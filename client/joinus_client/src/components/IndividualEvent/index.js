import { Box, Stack, Typography } from "@mui/material";
import { findEventAttendees } from "../../helpers/user_selectors";
import useSharedEvent from "../../hooks/useSharedEvent";
import Error from "../Events/Error";

import EventDetails from "./EventDetails";
import EventMap from "./EventMap";
import CommentBox from "./CommentBox";
import useAppData from "../../hooks/useAppData";

export default function IndividualEvent(props) {
  const { joinedEvents, usersData, error, setError } = props;
  const { event } = useSharedEvent();
  const { comments } = useAppData();

  const attendeelist = findEventAttendees(event.id, usersData, joinedEvents);

  return (
    <Box flex={"row"} m={2}>
      <Box display="flex" justifyContent="center" alignItems="center" m={3}>
        <Typography variant="h4">{event.name}</Typography>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <EventDetails
            attendeelist={attendeelist}
            joinedEvents={joinedEvents}
            usersData={usersData}
            error={error}
            setError={setError}
          />
          <EventMap />
        </Stack>
      </Box>
      <CommentBox comments={comments} joinedEvents={joinedEvents} />
      <Error error={error} setError={setError} />
    </Box>
  );
}
