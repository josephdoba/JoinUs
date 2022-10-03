import { Typography } from "@mui/material";

export default function AttendeeNumDisplay(props) {
  const { attendeelist, size_limit } = props;

  if (attendeelist.length === 1) {
    return (
      <Typography variant="body2" color="text.secondary">
        {attendeelist.length}/{size_limit} Attendee
      </Typography>
    );
  }

  return (
    <Typography variant="body2" color="text.secondary">
      {attendeelist.length}/{size_limit} Attendees
    </Typography>
  );
}
