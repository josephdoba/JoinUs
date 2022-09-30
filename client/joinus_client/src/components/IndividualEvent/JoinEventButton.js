import { Box, Fab, Stack, Tooltip, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";
import EventDetails from "./EventDetails";
import EventMap from "./EventMap";
import EventMapDetails from "./EventMapDetails";
import NavigationIcon from '@mui/icons-material/Navigation';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function JoinEventButton() {

  return (
    <Tooltip
      onClick={(e) => {
        
      }}
      title="Create A New Event"
      sx={{
        position: "inherit",        
      }}
    >
      <Fab variant="extended">
        <LocalActivityIcon sx={{ mr: 1 }} />
        Join Event
      </Fab>
    </Tooltip>
  );
}


