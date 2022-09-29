import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import EventCard from "./EventCard";
import Header from "../Header";
import EventCategoryDropdown from "./EventCategoryDropdown";
import moment from "moment";

export default function Eventlist(props) {
  const { eventsData, categoriesData } = props;
  const [selectedCategory, setSelectedCategory] = useState([]); //drop down

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

  const findCategoryByID = (categoryNum, categoryData) => {
    return categoryData.find((category) => category.id === categoryNum);
  };

  // return an array of selected category obj
  const findCategoryByARR = (selectedCategoryArr, categoryData, eventsData) => {
    let arr = [];
    let results = [];

    for (let categoryObj of categoryData) {
      for (let name of selectedCategoryArr) {
        if (categoryObj.name === name) {
          arr.push(categoryObj.id);
        }
      }
    }
    for (let eventObj of eventsData) {
      for (let id of arr) {
        if (eventObj.category === id) {
          results.push(eventObj);
        }
      }
    }
    return results;
  };

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
        />
      );
    });
  };

  const filteredEvents = findCategoryByARR(
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
      <Header id="events-homepage-title" title="Join an Event!" />
      <EventCategoryDropdown
        list={categoriesData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
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
