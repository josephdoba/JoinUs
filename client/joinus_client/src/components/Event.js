import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import moment from "moment";
import { Grid } from "@mui/material";

export default function Event(props) {
  const { name, image, description, start_time, end_time, category } = props;

  const start = moment(start_time).format("llll");
  const end = moment(end_time).format("LT");

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={name} height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {start} - {end} <br />
            Category: {category}
          </Typography>

          <Typography paragraph>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => {}} size="small">
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
