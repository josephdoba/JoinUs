import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSharedEvent from "../../hooks/useSharedEvent";
import AttendeeNumDisplay from "../Events/AttendeeNumDisplay";
import AttendeesAvatar from "./AtendeesAvatar";
import AttendeePopup from "./AttendeePopup";
import JoinEventButton from "./JoinEventButton";
import { owner } from "../../helpers/user_selectors";

export default function EventDetails(props) {
  const { attendeelist, error, setError } = props;
  const navigate = useNavigate();
  const { event } = useSharedEvent();
  const { joinedEvents, usersData } = props;

  // for avatar list pop up
  const [openAttendee, setOpenAttendee] = useState(false);

  const eventOwner = owner(attendeelist, event);
  console.log(owner(attendeelist, event));

  const handleClickOpen = () => {
    setOpenAttendee(true);
  };

  const handleClose = (value) => {
    setOpenAttendee(false);
  };

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
        {/* Moe this part is new!!! */}
        <Box>
          <Typography>
            Organizer:
            <Avatar
              alt={eventOwner.name}
              src={eventOwner.picture}
              sx={{ width: 56, height: 56 }}
            />
            {eventOwner.name}
          </Typography>
        </Box>
        <Box
          // end of organizer info
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

            {/* @Moe THIS PART IS ALSO NEW */}
            <Typography>City: {event.city}</Typography>

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
              joinedEvents={joinedEvents}
              usersData={usersData}
              attendeelist={attendeelist}
              event_id={event.id}
              error={error}
              setError={setError}
            />
          </Box>

          {/* the pop up */}
          <AttendeePopup
            attendeelist={attendeelist}
            open={openAttendee}
            handleClose={handleClose}
          />
        </Box>
      </Box>
    </Box>
  );
}
