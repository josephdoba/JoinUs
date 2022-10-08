import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Card, CardActions, Typography } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AddReactionTwoToneIcon from "@mui/icons-material/AddReactionTwoTone";
import ReadMoreTwoToneIcon from "@mui/icons-material/ReadMoreTwoTone";

import Error from "./Error";
import { formatTime, shortenText } from "../../helpers/helpers";
import AttendeeNumDisplay from "./AttendeeNumDisplay";
import useUserEvents from "../../api/useUserEvents";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

import { Box } from "@mui/system";
import useAppData from "../../hooks/useAppData";
import { checkIfJoinedEvent } from "../../helpers/event_selectors";

// need logic to show that 'join chat' link only if user has joined the chat
export default function EventCard(props) {
  const {
    id,
    name,
    image,
    description,
    start_time,
    end_time,
    category,
    attendeelist,
    eventsData,
    owner_id,
    user,
    size_limit,
    showUserEvents,
    joinedEvents,
    setReload,
    reload,
  } = props;

  //original
  const { findEventByID } = useAppData();

  const { userLeaveEvent, userJoinEvent, userDeleteEvent } = useUserEvents();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  // logic for join / edit / delete / leave button
  const processEvent = (event_id, user_id) => {
    if (user_id === owner_id && showUserEvents === 1) {
      deleteEvent({ event_id, user_id });
    }
    if (
      user_id !== owner_id &&
      showUserEvents !== 1 &&
      checkIfJoinedEvent(user.id, id, joinedEvents)
    ) {
      leaveEvent({ event_id, user_id });
    }
    if (
      user_id !== owner_id &&
      showUserEvents !== 1 &&
      !checkIfJoinedEvent(user.id, id, joinedEvents)
    ) {
      joinEvent({ event_id, user_id });
    }
  };

  const getButtonText = (event_id, user_id) => {
    if (user_id === owner_id && showUserEvents === 1) {
      return <DeleteForeverTwoToneIcon />;
    }
    if (
      user_id !== owner_id &&
      showUserEvents !== 1 &&
      checkIfJoinedEvent(user.id, id, joinedEvents)
    ) {
      return <NotInterestedIcon />;
    }
    if (
      user_id !== owner_id &&
      showUserEvents !== 1 &&
      !checkIfJoinedEvent(user.id, id, joinedEvents)
    ) {
      return <AddReactionTwoToneIcon />;
    }
  };
  // end of logic for buttons

  async function submitHandler() {
    findEventByID(id, eventsData);
    await wait(250);
    navigate(`/event`);
  }

  async function leaveEvent(dataObj) {
    await userLeaveEvent(dataObj);
    setReload(reload + 1);
  }

  async function joinEvent(dataObj) {
    if (attendeelist.length >= size_limit) {
      setError(true);
    } else {
      await userJoinEvent(dataObj);
      setReload(reload + 1);
    }
  }

  async function deleteEvent(dataObj) {
    let answer = prompt("Are you sure you want to delete? type yes or no");
    if (answer === "yes" || answer === "Yes") {
      await userDeleteEvent(dataObj);
      setReload(reload + 1);
    }
  }

  return (
    <Box p={2}>
      <Card sx={{ maxWidth: 330 }}>
        <CardMedia component="img" alt={name} height="140" image={image} />
        <CardContent sx={{ height: 130 }}>
          <Typography
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {formatTime(start_time, end_time)} <br />
            Category: {category.name}
          </Typography>
          <Typography variant="paragraph">
            {shortenText(description)}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton onClick={submitHandler} size="small">
            <ReadMoreTwoToneIcon />
          </IconButton>

          {user.id === owner_id && showUserEvents < 3 && (
            <IconButton onClick={(e) => setOpen(true)} size="small">
              <BorderColorTwoToneIcon />
            </IconButton>
          )}
          {showUserEvents !== 3 && (
            <IconButton
              size="small"
              onClick={(e) => {
                processEvent(id, user.id);
              }}
            >
              {getButtonText(id, user.id)}
            </IconButton>
          )}
          <AttendeeNumDisplay
            attendeelist={attendeelist}
            size_limit={size_limit}
          />
        </CardActions>
      </Card>
      <Error open={error} setOpen={setError} />
    </Box>
  );
}
