import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import moment from "moment";
import { Grid } from "@mui/material";

// shorten the displayed text to 75 letters including spaces
const shortenText = (text) => {
  if (text.length >= 75) {
    const short = text.slice(0, 75);
    return `${short}...`;
  }

  return text;
};

export default function Event(props) {
  const { name, image, description, start_time, end_time, category, id, setEvent } = props;

  const start = moment(start_time).format("llll"); // format: Wed, Sep 28, 2022 12:00 PM
  const end = moment(end_time).format("LT"); // format: 11:00 AM

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  const navigate = useNavigate();

  async function submitHandler(e) { 
    let data
    for (const i of props.eventData) {
      if (id === i.id) {
        data = i
      }
    }
    await wait(250)
    navigate(`/event`,{state:{id:data}} )
  }

  return (
    <Grid item xs={4} >
      <Card sx={{ maxWidth: 345, maxHeight: 360 }}>
        <CardMedia component="img" alt={name} height="140" image={image}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {start} - {end} <br />
            Category: {category.name}
          </Typography>

          <Typography paragraph>{shortenText(description)}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={submitHandler} size="small">
            Learn More
          </Button>
          <Button onClick={() => {}} size="small">
            Join Event
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
