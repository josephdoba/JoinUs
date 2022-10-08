import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Error from "./Error";
import { formatTime } from "../../helpers/helpers";
import { shortenText } from "../../helpers/helpers";
import AttendeeNumDisplay from "./AttendeeNumDisplay";

// import userEvents from "../../api/useUserEvents";
import useUserEvents from "../../hooks/useUserEvents";
import CategoriesList from "../UserPage/CategoriesList";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

import { Box } from "@mui/system";
import useAppData from "../../hooks/useAppData";
import EventForm from "../UserPage/EventForm";
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
    categoriesData,
    owner_id,
    user,
    size_limit,
    showUserEvents,
    joinedEvents,
    setReload,
    reload,
    formType
  } = props;

  const { findEventByID } = useAppData();
  const { userLeaveEvent, userJoinEvent, userDeleteEvent } = useUserEvents();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  // const [formMode, setFormMode] = useState(formType); 

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };



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
      return "Leave Event";
    }
    if (
      user_id !== owner_id &&
      showUserEvents !== 1 &&
      !checkIfJoinedEvent(user.id, id, joinedEvents)
    ) {
      return "Interested";
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
        <CardContent>
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
        <Button 
              onClick={() => setOpen(true)} s
              size="small">
              Edit Event
              {open && <EventForm open={open} setOpen={setOpen} formMode={"edit"} categoriesData={categoriesData} eventData={{name, description, category }} />}
            </Button>
        <CardActions>
          <Button onClick={submitHandler} size="small">
            Learn More
          </Button>
          {user.id === owner_id && showUserEvents < 3 && (
            <Button onClick={(e) => setOpen(true)} size="small">
              <BorderColorTwoToneIcon />
            </Button>
          )}
          {showUserEvents !== 3 && (
            <Button
              size="small"
              onClick={(e) => {
                processEvent(id, user.id);
              }}
            >
              {getButtonText(id, user.id)}
            </Button>
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
