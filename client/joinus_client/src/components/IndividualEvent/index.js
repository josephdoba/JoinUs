import { Box, Container, Stack, Typography } from "@mui/material";
import { findEventAttendees } from "../../helpers/user_selectors";
import useSharedEvent from "../../hooks/useSharedEvent";

import EventDetails from "./EventDetails";
import EventMap from "./EventMap";
import JoinEventButton from "./JoinEventButton";

export default function IndividualEvent(props) {
  const { joinedEvents, usersData } = props;
  const { event } = useSharedEvent();

  console.log(event);

  const attendeelist = findEventAttendees(event.id, usersData, joinedEvents);

  return (

    <Box flex={"row"}  m={2}>
      <Box display="flex" justifyContent="center" alignItems="center" m={3}>
        <Typography variant="h4">{event.name}</Typography>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <EventDetails attendeelist={attendeelist} />
          <EventMap />
        </Stack>
      </Box>
    </Box>
  );
}
