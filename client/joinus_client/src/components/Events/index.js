import { Box, Container, Grid } from "@mui/material";
import React from "react";
import EventCard from "./EventCard";

import { findCategoryByID } from "../../helpers/category_selectors";
import {
  upcomingEvents,
  findEventsByCategory,
  pastEvents,
} from "../../helpers/event_selectors";
import { findEventAttendees } from "../../helpers/user_selectors";

export default function Events(props) {
  const {
    eventsData,
    categoriesData,
    selectedCategory,
    usersData,
    joinedEvents,
    showUserEvents,
    setReload,
    reload,
  } = props;

  const displayEventCard = (eventArr) => {
    return eventArr.map((e) => {
      const attendeelist = findEventAttendees(e.id, usersData, joinedEvents);
      const category = findCategoryByID(e.category, categoriesData);

      return (
        <EventCard
          key={e.id}
          thisEvent={e}
          category={category}
          eventsData={eventsData}
          attendeelist={attendeelist}
          categoriesData={categoriesData}
          showUserEvents={showUserEvents}
          joinedEvents={joinedEvents}
          setReload={setReload}
          reload={reload}
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
  if (showUserEvents === 3) {
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

  return (
    <Box
      flex={5}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {event}
    </Box>
  );
}
