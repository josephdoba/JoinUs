import { Box, Stack } from "@mui/material";
import EventDetails from "./EventDetails";
import EventMap from "./EventMap";

export default function IndividualEvent(props) {
  const { event } = props;

  return (
    <Box flex={"row"}>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <EventDetails event={event} />
        <p>
          {event.name}
          {event.lat}
          {event.lng}
        </p>
        <EventMap lat={event.lat} lng={event.lng} />
      </Stack>
    </Box>
  );
}
