import React, { useState } from "react";
import Sidebar from "./Sidebar";
import EventForm from "./EventForm";
import { Fab, Tooltip, Box, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Events from "../Events";
import EventCategoryDropdown from "../Events/EventCategoryDropdown";
import {
  findUsersCreatedEvents,
  findUsersJoinedEvents,
  pastEvents,
} from "../../helpers/event_selectors";
import ClearCategories from "./CategoryClearButton";
import useSharedUser from "../../hooks/useSharedUser";
import Error from "../Events/Error";

export default function Userpage(props) {
  const {
    eventsData,
    categoriesData,
    usersData,
    setEvent,
    joinedEvents,
    error,
    setError,
  } = props;

  const [selectedCategory, setSelectedCategory] = useState([]); // state for drop down list
  const [showUserEvents, setShowUserEvents] = useState(0); // 0 for all events, 1 = my events, 2 = joined events, 3 = past events
  const [open, setOpen] = useState(false);
  const { user } = useSharedUser();

  const eventsShown = (eventsDataInput) => {
    return (
      <Events
        eventsData={eventsDataInput}
        usersData={usersData}
        categoriesData={categoriesData}
        setEvent={setEvent}
        joinedEvents={joinedEvents}
        selectedCategory={selectedCategory}
        showUserEvents={showUserEvents}
        error={error}
        setError={setError}
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

  return (
    <>
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
          <ClearCategories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
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

        <Error error={error} setError={setError} />

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
              setOpen(true);
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            New Event
          </Fab>
        </Tooltip>
        <EventForm
          categoriesData={categoriesData}
          open={open}
          setOpen={setOpen}
          eventsData={eventsData}
          formMode={"create"}
        />
      </Box>
    </>
  );
}
