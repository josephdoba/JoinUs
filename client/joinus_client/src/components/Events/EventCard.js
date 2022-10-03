import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { formatTime } from "../../helpers/helpers";
import { shortenText } from "../../helpers/helpers";
import AttendeeNumDisplay from "./AttendeeNumDisplay";

// need logic to show that 'join chat' link only if user has joined the chat
export default function EventCard(props) {
  const {
    id,
    name,
    image,
    description,
    start_time,
    end_time,
    category,
    attendeelist,
    eventsData,
    setEvent,
  } = props;

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  const findEventByID = (id, eventsData) => {
    const event = eventsData.find((event) => event.id === id);
    setEvent(event);
  };

  const navigate = useNavigate();

  async function submitHandler() {
    findEventByID(id, eventsData);

    await wait(250);
    navigate(`/event`);
  }

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 380, maxHeight: 380 }}>
        <CardMedia component="img" alt={name} height="150" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography gutterBottom variant="body2" color="text.secondary">
            {formatTime(start_time, end_time)} <br />
            Category: {category.name}
          </Typography> */}
          <Typography variant="paragraph">
            {shortenText(description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={submitHandler} size="small">
            Learn More
          </Button>
          <Button onClick={() => {}} size="small">
            Join Event
          </Button>
          <AttendeeNumDisplay attendeelist={attendeelist} />
        </CardActions>
      </Card>
    </Grid>
  );
}
