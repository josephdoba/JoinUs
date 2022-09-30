import { Typography } from "@mui/material";

export default function AttendeeNumDisplay(props) {
  const { attendeelist } = props;

  if (attendeelist.length === 1) {
    return (
      <Typography variant="body2" color="text.secondary">
        {attendeelist.length} Attendee
      </Typography>
    );
  }

  return (
    <Typography variant="body2" color="text.secondary">
      {attendeelist.length} Attendees
    </Typography>
  );
}
