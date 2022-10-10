import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

//avatars for the event page

export default function AttendeesAvatar(props) {
  const { attendeelist, handleClickOpen, handleClose, openAttendee } = props;

  const avatar = attendeelist.map((person) => {
    return <Avatar key={person.id} alt={person.name} src={person.picture} />;
  });

  return (
    <Button open={openAttendee} onClose={handleClose} onClick={handleClickOpen}>
      <AvatarGroup
        max={5}
        sx={{ "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 15 } }}
      >
        {avatar}
      </AvatarGroup>
    </Button>
  );
}
