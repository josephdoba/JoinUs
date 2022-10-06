import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AddEvent from "./AddEvent";
import { Box, Button, Stack } from "@mui/material";
import Events from "../Events";
import EventCategoryDropdown from "../Events/EventCategoryDropdown";
import {
  findUsersCreatedEvents,
  findUsersJoinedEvents,
  pastEvents,
} from "../../helpers/event_selectors";

export default function Userpage(props) {
  const {
    eventsData,
    categoriesData,
    usersData,
    setEvent,
    joinedEvents,
    user,
    setReload,
    reload,
    comments
  } = props;

  const [selectedCategory, setSelectedCategory] = useState([]); // state for drop down list
  const [showUserEvents, setShowUserEvents] = useState(0); // 0 for all events, 1 = my events, 2 = joined events, 3 = past events

  if (user !== null && user.id !== null) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  const usersCreatedEvents = findUsersCreatedEvents(user.id, eventsData);
  const usersJoinedEvents = findUsersJoinedEvents(
    user.id,
    eventsData,
    joinedEvents
  );
  const eventHistory = pastEvents(eventsData);

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
      <Box sx={{ display: "flex" }} m={2} direction={"row"} justifyContent={"center"}>
        <EventCategoryDropdown
          list={categoriesData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {clearCategories(selectedCategory)}
      </Box>
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
            user={user}
            setReload={setReload}
            reload={reload}
            comments={comments}
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
            user={user}
            showUserEvents={showUserEvents}
            setReload={setReload}
            reload={reload}
            comments={comments}
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
            user={user}
            setReload={setReload}
            reload={reload}
            comments={comments}
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
            user={user}
            setReload={setReload}
            reload={reload}
            comments={comments}
          />
        )}
      </Stack>
      <AddEvent categoriesData={categoriesData} />
    </Box>
  );
}
