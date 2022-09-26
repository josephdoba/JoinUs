import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Event from "./Event";
import { fetchAPI } from "../api";
import Header from "./Header";
import EventCategoryDropdown from "./EventCategoryDropdown";
import moment from "moment";

export default function Eventlist() {
  const [eventData, setEventData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    Promise.all([fetchAPI("events"), fetchAPI("events/categories")])
      .then((all) => {
        console.log(all[1]);
        setEventData((prev) => [...all[0].data.events]);
        setCategoryData((prev) => [...all[1].data.categories]);
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

  //T
  const findCategoryByID = (categoryNum, categoryData) => {
    return categoryData.find((category) => category.id === categoryNum);
  };

  const events = upcomingEvents(eventData).map((e) => {
    const category = findCategoryByID(e.category, categoryData);
    return (
      <Event
        key={e.id}
        name={e.name}
        image={e.image}
        description={e.description}
        category={category.name}
        start_time={e.start_time}
        end_time={e.end_time}
      />
    );
  });

  return (
    <Container>
      <Header id="events-homepage-title" title="Join an Event!" />
      <EventCategoryDropdown list={categoryData} />
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
