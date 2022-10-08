import { Fab, Tooltip } from "@mui/material";

import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import useUserEvents from "../../api/useUserEvents";
import { findEventAttendees } from "../../helpers/user_selectors";
import Error from '../Events/Error';
import { useState } from "react";

export default function JoinEventButton(props) {

  const { reload, setReload, user, event, joinedEvents, usersData } = props;

  const { userJoinEvent, userLeaveEvent } = useUserEvents();
  const attendeelist = findEventAttendees(event.id, usersData, joinedEvents);
  const [error, setError] = useState(false)


  async function joinEvent(dataObj) {
    if (attendeelist.length >= event.size_limit) {
      setError(true)
      return
    } else {
      await userJoinEvent(dataObj);
      setReload(reload + 1);
    }
  }

  const checkIfJoinedEvent = (joinedEvents) => {
    const events = [];
    for (const i of joinedEvents) {
      if (user.id === i.user_id) {
        events.push(i.event_id);
      }
    }
    for (const prop of events) {
      if (prop === event.id) {
        return true;
      }
    }
    return false;
  };

  async function leaveEvent(dataObj) {
    await userLeaveEvent(dataObj);
    setReload(reload + 1);
  }

  return (
    <div>
      {checkIfJoinedEvent(joinedEvents) ? <Tooltip
      onClick={(e) => {
        const dataObj = {
          user_id: user.id,
          event_id: event.id
        };
        leaveEvent(dataObj);
      }}
      title="Leave this event!"
      sx={{
        position: "fixed",
        bottom: '45px',
        right: '45px'
        
      }}
    >
      <Fab variant="extended">
        <LocalActivityIcon sx={{ mr: 1 }} />
        Leave Event
      </Fab>
    </Tooltip> : 
    <Tooltip
      onClick={(e) => {
        const dataObj = {
          user_id: user.id,
          event_id: event.id
        };
        joinEvent(dataObj);
      }}
      title="Join an event!"
      sx={{
        position: "fixed",
        bottom: '45px',
        right: '45px'
        
      }}
    >
      <Fab variant="extended">
        <LocalActivityIcon sx={{ mr: 1 }} />
        Join Event
      </Fab>
    </Tooltip>}
    <Error open={error} setOpen={setError} />
    </div>
  );
}
