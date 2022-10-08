import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSharedEvent from "../../hooks/useSharedEvent";
import AttendeeNumDisplay from "../Events/AttendeeNumDisplay";
import AttendeesAvatar from "./AtendeesAvatar";
import AttendeePopup from "./AttendeePopup";
import JoinEventButton from "./JoinEventButton";

export default function EventDetails(props) {
  const { attendeelist } = props;
  const navigate = useNavigate();
  const { event } = useSharedEvent();
  const { joinedEvents, usersData, reload, setReload } = props;

  // for avatar list pop up
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  // avatarlist pop up end

  // async function submitHandler() {
  //   await wait(250);
  //   navigate("/event/chat");
  // }

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  return (
    <Box
      flex={"50%"}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 2,
        }}
      >
        <CardHeader style={{ textAlign: "center" }} />
        <Box
          component="img"
          sx={{
            height: 333,
            width: 450,
            maxHeight: { xs: 233, md: "100%" },
            maxWidth: { xs: 350, md: "100%" },
          }}
          alt={event.name}
          src={event.image}
        />
        <Box>
          <Box>
            <Typography variant="h6" m={2}>
              Details
            </Typography>
            <Typography variant="body1" color="text.secondary" m={2}>
              {event.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              p: 1,
              m: 1,
              alignItems: "center",
            }}
          >
            {/* button to open attendee list */}
            <AttendeeNumDisplay
              attendeelist={attendeelist}
              size_limit={event.size_limit}
            />
            <AttendeesAvatar
              attendeelist={attendeelist}
              handleClickOpen={handleClickOpen}
            />

            <JoinEventButton
              reload={reload}
              setReload={setReload}
              joinedEvents={joinedEvents}
              usersData={usersData}
            />
          </Box>

          {/* the pop up */}
          <AttendeePopup
            attendeelist={attendeelist}
            open={open}
            handleClose={handleClose}
          />
        </Box>
      </Box>
    </Box>
  );
}
