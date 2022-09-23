import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import axios from "axios";

const events = [
  {
    id: 1,
    event_name: "coffee chat",
    event_image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
    event_description:
      "Come join me for me a lovely quick little morning coffee and chat about the problems of the world",
    owner_id: 1,
    event_latitude: 51.0233064354121,
    event_longitude: -114.02369425973428,
    event_start_time: "2022-09-28 05:00:00",
    event_end_time: "2022-09-28 16:00:00",
  },
  {
    id: 2,
    event_name: "board games",
    event_image:
      "https://i.cbc.ca/1.2716999.1406221490!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/135000779-board-games.jpg",
    event_description:
      "Come join me for some fun board games this could include battleship, monopoly, and risk!",
    owner_id: 1,
    event_latitude: 49.25825320517397,
    event_longitude: -123.04434376344798,
    event_start_time: "2022-09-28 08:00:00",
    event_end_time: "2022-09-28 11:00:00",
  },
];

const Eventlist = () => {
  // const [eventData, setEventData] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/events")
  //     .then((data) => setEventData(data.events))
  //     .catch((err) => console.error(err.response.data));
  // }, []);
  return (
    <div>
      <h1>Join an event near you!</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Eventlist;
