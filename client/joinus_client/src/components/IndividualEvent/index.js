import { Box, Stack } from "@mui/material";
import EventDetails from "./EventDetails";
import EventMap from "./EventMap";

export default function IndividualEvent(props) {
  const { event } = props;

  return (
    <Box flex={"row"}>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <EventDetails />
        <p>{event.name}</p>
        <EventMap />
      </Stack>
    </Box>
  );
}
