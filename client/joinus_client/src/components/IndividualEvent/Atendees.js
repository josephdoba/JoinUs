import { Avatar, AvatarGroup } from "@mui/material";

//avatars for the event page

export default function Attendees(props) {
  const { attendeelist } = props;

  const avatar = attendeelist.map((person) => {
    return <Avatar alt={person.name} src={person.picture} />;
  });

  return (
    <AvatarGroup
      max={5}
      sx={{ "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 15 } }}
    >
      {avatar}
    </AvatarGroup>
  );
}
