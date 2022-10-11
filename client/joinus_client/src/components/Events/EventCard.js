import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  Card,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import NotInterestedIcon from "@mui/icons-material/NotInterested"; // not interested
import AddReactionTwoToneIcon from "@mui/icons-material/AddReactionTwoTone"; // interested in event
import ReadMoreTwoToneIcon from "@mui/icons-material/ReadMoreTwoTone"; // learn more

import { formatTime, shortenText } from "../../helpers/helpers";
import AttendeeNumDisplay from "./AttendeeNumDisplay";
import useUserEvents from "../../hooks/useUserEvents";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

import useAppData from "../../hooks/useAppData";
import EventForm from "../UserPage/EventForm";
import { checkIfJoinedEvent } from "../../helpers/event_selectors";
import useSharedUser from "../../hooks/useSharedUser";

export default function EventCard(props) {
  // console.log("props from EventCard")
  // console.log(props)
  const {
    category,
    attendeelist,
    eventsData,
    thisEvent,
    showUserEvents,
    joinedEvents,
    error,
    setError,
  } = props;

  const {
    id,
    name,
    image,
    start_time,
    end_time,
    description,
    city,
    owner_id,
    size_limit,
  } = thisEvent;

  // console.log(thisEvent)

  const { user } = useSharedUser();

  const [open, setOpen] = useState(false);

  //original
  const { findEventByID } = useAppData();

  const { leaveEvent, joinEvent, deleteEvent } = useUserEvents();

  const navigate = useNavigate();

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  // logic for delete / leave / join
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
      if (attendeelist.length >= size_limit) {
        setError(true);
        return;
      }
      joinEvent(attendeelist, size_limit, { event_id, user_id });
    }
  };

  const getButton = (event_id, user_id) => {
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
            City: {city}
            <br />
            {formatTime(start_time, end_time)} <br />
            Category: {category.name}
          </Typography>
          <Typography variant="paragraph">
            {shortenText(description)}
          </Typography>
        </CardContent>

        {/* Learn More */}

        <CardActions>
          <IconButton onClick={submitHandler} size="small">
            <ReadMoreTwoToneIcon />
          </IconButton>
          {/* User to edit form. will pop up modal */}
          {user.id === owner_id && showUserEvents === 1 && (
            <IconButton onClick={(e) => setOpen(true)} size="small">
              <BorderColorTwoToneIcon />
            </IconButton>
          )}

          {open && (
            <EventForm
              open={open}
              setOpen={setOpen}
              formMode={"edit"}
              category={category}
              eventData={thisEvent}
              categoriesData={props.categoriesData}
            />
          )}

          {showUserEvents !== 3 && (
            <IconButton
              size="small"
              onClick={(e) => {
                processEvent(id, user.id);
              }}
            >
              {getButton(id, user.id)}
            </IconButton>
          )}
          <AttendeeNumDisplay
            attendeelist={attendeelist}
            size_limit={size_limit}
          />
        </CardActions>
      </Card>
    </Box>
  );
}
