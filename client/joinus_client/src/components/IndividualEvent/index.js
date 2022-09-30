import { Box, Fab, Stack, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";
import EventDetails from "./EventDetails";
import EventMap from "./EventMap";
import EventMapDetails from "./EventMapDetails";
import NavigationIcon from '@mui/icons-material/Navigation';
import JoinEventButton from "./JoinEventButton";

export default function IndividualEvent(props) {
  const { event } = props;

  return (
    <Box flex={"row"} >
      <Box display="flex" justifyContent="center" alignItems="center" m={3}>
        <Typography variant="h4">
          Here EVENT NAME{/* {event.name} */}
        </Typography>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <EventDetails />
          <EventMapDetails />
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', m: 5}}>
        <JoinEventButton />
      </Box>
    </Box>
  );
}
