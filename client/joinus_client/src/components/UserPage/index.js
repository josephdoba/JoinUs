import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import AddEvent from "./AddEvent";
import EventForm from "./EventForm";
import { Fab, Tooltip, Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


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
    comments,
    formType
  } = props;

  const [selectedCategory, setSelectedCategory] = useState([]); // state for drop down list
  const [showUserEvents, setShowUserEvents] = useState(0); // 0 for all events, 1 = my events, 2 = joined events, 3 = past events
  const [open, setOpen] = useState(false);

  // what if you had another function to control the open state instead of just.. state? that way we can export it and implement it into the useEventForm modal file... its already being imported from useEventForm

  const eventsShown = (eventsDataInput) => {
    return (
      <Events
        eventsData={eventsDataInput}
        usersData={usersData}
        categoriesData={categoriesData}
        setEvent={setEvent}
        joinedEvents={joinedEvents}
        selectedCategory={selectedCategory}
        user={user}
        showUserEvents={showUserEvents}
        setReload={setReload}
        reload={reload}
      />
    );
  };

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
      <Box
        sx={{ display: "flex" }}
        m={2}
        direction={"row"}
        justifyContent={"center"}
        >
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
        {showUserEvents === 0 && eventsShown(eventsData)}
        {showUserEvents === 1 && eventsShown(usersCreatedEvents)}
        {showUserEvents === 2 && eventsShown(usersJoinedEvents)}
        {showUserEvents === 3 && eventsShown(eventHistory)}
      </Stack>
      <Tooltip
        title="Create A New Event"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab
          variant="extended"
          onClick={(e) => {
            setOpen(true)
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          New Event
        </Fab>
      </Tooltip>
      {/* <AddEvent categoriesData={categoriesData}/> */}
      <EventForm categoriesData={categoriesData} open={open} setOpen={setOpen} eventData={{}} formMode={"create"} />
    </Box>
  );
}
