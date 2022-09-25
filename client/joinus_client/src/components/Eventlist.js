import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Event from "./Event";
import { fetchAPI } from "../api";
import Header from "./Header";
import EventCategorySearch from "./EventCategorySearch";
import moment from "moment";

export default function Eventlist() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetchAPI("events")
      .then((data) => {
        setEventData((prev) => [...data.data.events]);
      })
      .catch((err) => console.error(err.response.data));
  }, []);

  // return new array without past events
  const upcomingEvents = (events) => {
    let results = [];
    const now = moment(Date.now());
    events.forEach((event) => {
      const eventEnd = moment(event.end_time);
      if (now.isBefore(eventEnd)) {
        results.push(event);
      }
    });
    return results;
  };

  const events = upcomingEvents(eventData).map((e) => {
    return (
      <Event
        key={e.id}
        name={e.name}
        image={e.image}
        description={e.description}
        category={e.category}
        start_time={e.start_time}
        end_time={e.end_time}
      />
    );
  });

  return (
    <Container>
      <Header id="events-homepage-title" title="Join an Event!" />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {events}
      </Grid>
    </Container>
  );
}
