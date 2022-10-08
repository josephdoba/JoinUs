import { Button, Fab, Tooltip } from "@mui/material";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import useUserEvents from "../../api/useUserEvents";
import { findEventAttendees } from "../../helpers/user_selectors";
import Error from "../Events/Error";
import { useState } from "react";
import useSharedEvent from "../../hooks/useSharedEvent";
import useSharedUser from "../../hooks/useSharedUser";
import { checkIfJoinedEvent } from "../../helpers/event_selectors";

export default function JoinEventButton(props) {
  const { reload, setReload, joinedEvents, usersData } = props;
  const { event } = useSharedEvent();
  const { user } = useSharedUser();

  const { userJoinEvent, userLeaveEvent } = useUserEvents();
  const attendeelist = findEventAttendees(event.id, usersData, joinedEvents);
  const [error, setError] = useState(false);

  async function joinEvent(dataObj) {
    if (attendeelist.length >= event.size_limit) {
      setError(true);
      return;
    } else {
      await userJoinEvent(dataObj);
      setReload(reload + 1);
    }
  }

  async function leaveEvent(dataObj) {
    await userLeaveEvent(dataObj);
    setReload(reload + 1);
  }

  return (
    <>
      {checkIfJoinedEvent(user.id, event.id, joinedEvents) ? (
        <Button size="medium" color="primary" endIcon={<LocalActivityIcon />}
          onClick={(e) => {
            const dataObj = {
              user_id: user.id,
              event_id: event.id,
            };
            leaveEvent(dataObj);
          }}>
          Leave this event!
        </ Button>
      ) : (<Button size="medium" color="primary" endIcon={<LocalActivityIcon />}
        onClick={(e) => {
          const dataObj = {
            user_id: user.id,
            event_id: event.id,
          };
          joinEvent(dataObj);
        }}>
        Join Event
      </ Button>
      )}
    </>
  );
}
