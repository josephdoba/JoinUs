import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AddEvent from "./AddEvent";
import App_navbar from "../App_navbar";
import { Box, Button, Stack } from "@mui/material";
import Events from "../Events";
import EventCategoryDropdown from "../Events/EventCategoryDropdown";
import { Container } from "@mui/system";
import { findUserByID } from "../../helpers/user_selectors";

export default function Userpage(props) {
  const { eventsData, categoriesData, usersData, setEvent, joinedEvents } =
    props;
  const [selectedCategory, setSelectedCategory] = useState([]); // state for drop down list

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
        <Sidebar />

        <Events
          eventsData={eventsData}
          usersData={usersData}
          categoriesData={categoriesData}
          setEvent={setEvent}
          joinedEvents={joinedEvents}
          selectedCategory={selectedCategory}
        />
      </Stack>
      <AddEvent />
    </Box>
  );
}
