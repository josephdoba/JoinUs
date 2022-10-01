import { Fab, Tooltip } from "@mui/material";

import LocalActivityIcon from "@mui/icons-material/LocalActivity";

export default function JoinEventButton() {
  return (
    <Tooltip
      onClick={(e) => {}}
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
