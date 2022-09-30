import { Container, Grid } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";

import { findCategoryByID } from "../../helpers/category_selectors";
import {
  upcomingEvents,
  findEventsByCategory,
} from "../../helpers/event_selectors";

export default function Events(props) {
  const { eventsData, categoriesData, setEvent, selectedCategory } = props;

  const displayEventCard = (eventArr) => {
    return eventArr.map((e) => {
      const category = findCategoryByID(e.category, categoriesData);

      return (
        <EventCard
          key={e.id}
          name={e.name}
          image={e.image}
          description={e.description}
          category={category}
          start_time={e.start_time}
          end_time={e.end_time}
          eventsData={eventsData}
          setEvent={setEvent}
          id={e.id}
        />
      );
    });
  };

  const filteredEvents = findEventsByCategory(
    selectedCategory,
    categoriesData,
    eventsData
  );

  let event;

  if (selectedCategory.length === 0) {
    event = displayEventCard(upcomingEvents(eventsData));
  } else {
    event = displayEventCard(filteredEvents);
  }

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {event}
      </Grid>
    </Container>
  );
}
