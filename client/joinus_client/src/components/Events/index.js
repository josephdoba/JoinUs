import { Container, Grid } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";

import { findCategoryByID } from "../../helpers/category_selectors";
import {
  upcomingEvents,
  findEventsByCategory,
  pastEvents
} from "../../helpers/event_selectors";
import { findEventAttendees } from "../../helpers/user_selectors";

export default function Events(props) {
  const {
    eventsData,
    categoriesData,
    setEvent,
    selectedCategory,
    usersData,
    joinedEvents,
    showUserEvents,
    user
  } = props;

  const displayEventCard = (eventArr) => {
    return eventArr.map((e) => {
      const attendeelist = findEventAttendees(e.id, usersData, joinedEvents);
      const category = findCategoryByID(e.category, categoriesData);

      return (
        <EventCard
          key={e.id}
          id={e.id}
          name={e.name}
          image={e.image}
          description={e.description}
          user={user}
          owner_id={e.owner_id}
          category={category}
          start_time={e.start_time}
          end_time={e.end_time}
          eventsData={eventsData}
          setEvent={setEvent}
          attendeelist={attendeelist}
          categoriesData={categoriesData}
          size_limit={e.size_limit}
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

  //all upcoming events
  if(showUserEvents === 3) {
    if (selectedCategory.length === 0) {
      event = displayEventCard(pastEvents(eventsData));
    } else {
      event = displayEventCard(filteredEvents);
    }
  } else {
    if (selectedCategory.length === 0) {
      event = displayEventCard(upcomingEvents(eventsData));
    } else {
      event = displayEventCard(filteredEvents);
    }
  }

  // user owned events
  
  // user joined events
  // past events

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
