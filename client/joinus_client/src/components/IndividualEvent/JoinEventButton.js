import { Button } from "@mui/material";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import useSharedEvent from "../../hooks/useSharedEvent";
import useSharedUser from "../../hooks/useSharedUser";
import { checkIfJoinedEvent } from "../../helpers/event_selectors";
import useUserEvents from "../../hooks/useUserEvents";
import { useNavigate } from "react-router-dom";

export default function JoinEventButton(props) {
  const { joinedEvents, attendeelist, setError } = props;
  const { event } = useSharedEvent();
  const { user } = useSharedUser();
  const { leaveEvent, deleteEvent, joinEvent } = useUserEvents();
  const navigate = useNavigate();

  const processEvent = (event_id, user_id) => {
    if (user_id === event.owner_id) {
      deleteEvent({ event_id, user_id });
      navigate("/user");
    }
    if (
      user_id !== event.owner_id &&
      checkIfJoinedEvent(user.id, event.id, joinedEvents)
    ) {
      leaveEvent({ event_id, user_id });
    }
    if (
      user_id !== event.owner_id &&
      !checkIfJoinedEvent(user.id, event.id, joinedEvents)
    ) {
      if (attendeelist.length >= event.size_limit) {
        setError(true);
        return;
      }
      joinEvent(attendeelist, event.size_limit, { event_id, user_id });
    }
  };

  const getButtonText = (event_id, user_id) => {
    if (user_id === event.owner_id) {
      return "Delete Event";
    }
    if (
      user_id !== event.owner_id &&
      checkIfJoinedEvent(user.id, event.id, joinedEvents)
    ) {
      return "Not Interested";
    }
    if (
      user_id !== event.owner_id &&
      !checkIfJoinedEvent(user.id, event.id, joinedEvents)
    ) {
      return "I'm Interested";
    }
  };

  return (
    <Button
      size="medium"
      color="primary"
      endIcon={<LocalActivityIcon />}
      onClick={(e) => {
        e.preventDefault();
        processEvent(event.id, user.id);
      }}
      // onSubmit={(e) => e.preventDefault}
    >
      {getButtonText(event.id, user.id)}
    </Button>
  );
}
