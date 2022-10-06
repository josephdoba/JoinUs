import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { blue } from "@mui/material/colors";

export default function AttendeePopup(props) {
  const { onClose, open, handleClose, attendeelist } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Attendee List</DialogTitle>
      <List sx={{ pt: 0 }}>
        {attendeelist.map((person) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <Avatar
                  key={person.id}
                  alt={person.name}
                  src={person.picture}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={person.name} />
          </ListItem>
        ))}

        <ListItem>
          <Button onClick={onClose}></Button>
        </ListItem>
      </List>
    </Dialog>
  );
}
