import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Attendees from "./Atendees";

export default function EventDetails(props) {
  const { attendeelist, description, image, name } = props;
  const navigate = useNavigate();

  async function submitHandler() {
    await wait(250);
    navigate("/event/chat");
  }

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  const attendeeNumDisplay = (attendeelist) => {
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
  };

  return (
    <Box flex={"50%"}>
      <Card
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
          alt={name}
          src={image}
        />
        <CardContent>
          <Typography variant="h6" m={2}>
            Details
          </Typography>

          {attendeeNumDisplay(attendeelist)}

          <Attendees attendeelist={attendeelist} />

          <Button size="small" variant="text" onClick={submitHandler}>
            Join Chat
          </Button>

          <Typography variant="body1" color="text.secondary" m={3}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
