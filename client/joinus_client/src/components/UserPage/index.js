import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AddEvent from "./AddEvent";
import { Box, Button, Stack } from "@mui/material";
import Events from "../Events";
import EventCategoryDropdown from "../Events/EventCategoryDropdown";
import { Container } from "@mui/system";
import {
  findUsersCreatedEvents,
  findUsersJoinedEvents,
  pastEvents,
} from "../../helpers/event_selectors";
import { reactLocalStorage } from "reactjs-localstorage";

export default function Userpage(props) {
  const {
    eventsData,
    categoriesData,
    usersData,
    setEvent,
    joinedEvents,
    user,
  } = props;
  const [selectedCategory, setSelectedCategory] = useState([]); // state for drop down list
  const [showUserEvents, setShowUserEvents] = useState(0);

  console.log(`user in user page: ${user}`);

  const usersCreatedEvents = findUsersCreatedEvents(user.id, eventsData);
  const usersJoinedEvents = findUsersJoinedEvents(
    user.id,
    eventsData,
    joinedEvents
  );
  const eventHistory = pastEvents(eventsData);
  console.log(eventHistory);

  // if there is a selected category, a button to clear the chips appear
  const clearCategories = (selectedCategory) => {
    if (selectedCategory.length >= 1) {
      return (
        <Button
          variant="text"
          size="small"
          onClick={() => setSelectedCategory([])}
        >
          Clear
        </Button>
      );
    }
  };

  return (
    <Box>
      <Container sx={{ display: "flex" }}>
        <EventCategoryDropdown
          list={categoriesData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {clearCategories(selectedCategory)}
      </Container>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar
          setUserEvents={setShowUserEvents}
          showUserEvents={showUserEvents}
        />
        {showUserEvents === 0 && (
          <Events
            eventsData={eventsData}
            usersData={usersData}
            categoriesData={categoriesData}
            setEvent={setEvent}
            joinedEvents={joinedEvents}
            selectedCategory={selectedCategory}
          />
        )}
        {showUserEvents === 1 && (
          <Events
            eventsData={usersCreatedEvents}
            usersData={usersData}
            categoriesData={categoriesData}
            setEvent={setEvent}
            joinedEvents={joinedEvents}
            selectedCategory={selectedCategory}
          />
        )}
        {showUserEvents === 2 && (
          <Events
            eventsData={usersJoinedEvents}
            usersData={usersData}
            categoriesData={categoriesData}
            setEvent={setEvent}
            joinedEvents={joinedEvents}
            selectedCategory={selectedCategory}
          />
        )}
        {showUserEvents === 3 && (
          <Events
            eventsData={eventHistory}
            usersData={usersData}
            categoriesData={categoriesData}
            setEvent={setEvent}
            joinedEvents={joinedEvents}
            selectedCategory={selectedCategory}
            showUserEvents={showUserEvents}
          />
        )}
      </Stack>
      <AddEvent />
    </Box>
  );
}
