import { Box, Stack } from "@mui/material";
import { Fragment } from "react";
import EventDetails from "./EventDetails";
import EventMap from "./EventMap";

export default function IndividualEvent(props) {
  return (
    <Box flex={"row"} >
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <EventDetails />
        <EventMap />
      </Stack>
    </Box>
  );
}
