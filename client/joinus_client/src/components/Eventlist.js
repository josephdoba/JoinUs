import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Event from "./Event";
import axios from "axios";

const events = [
  {
    id: 1,
    name: "coffee chat",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
    description:
      "Come join me for me a lovely quick little morning coffee and chat about the problems of the world",
    size_limit: 4,
    owner_id: 1,
    latitude: 51.0233064354121,
    longitude: -114.02369425973428,
    start_time: "2022-09-28 05:00:00",
    end_time: "2022-09-28 16:00:00",
  },
  {
    id: 2,
    name: "board games",
    image:
      "https://i.cbc.ca/1.2716999.1406221490!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/135000779-board-games.jpg",
    description:
      "Come join me for some fun board games this could include battleship, monopoly, and risk!",
    size_limit: 4,
    owner_id: 1,
    latitude: 49.25825320517397,
    longitude: -123.04434376344798,
    start_time: "2022-09-28 08:00:00",
    end_time: "2022-09-28 11:00:00",
  },
];

export default function Eventlist() {
  // const [eventData, setEventData] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("/api/events")
  //     .then((data) => {
  //       setEventData(data.events);
  //       console.log(eventData);
  //     })
  //     .catch((err) => console.error(err.response.data));
  // }, []);

  const event = events.map((e) => {
    return (
      <Event
        key={e.id}
        name={e.name}
        image={e.image}
        description={e.description}
        start_time={e.start_time}
        end_time={e.end_time}
      />
    );
  });

  return (
    <Container>
      <h2 id="homepage-eventlist-title">Find an event!</h2>
      {event}
    </Container>
  );
}
