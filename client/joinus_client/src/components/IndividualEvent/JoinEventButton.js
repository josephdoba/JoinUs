import { Button, Fab, Tooltip } from "@mui/material";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

export default function JoinEventButton() {
  return (
    <Button size="medium" color="primary"  endIcon={<LocalActivityIcon />}>
      Join Event
    </Button>
  );
}
