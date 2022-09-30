import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feedlist from "./Feedlist";
import AddEvent from "./AddEvent";
import App_navbar from "../App_navbar";
import { Box, Stack } from "@mui/material";
import Events from "../Events";
import EventCategoryDropdown from "../Events/EventCategoryDropdown";

export default function Userpage(props) {
  const { eventsData, categoriesData, usersData, setEvent } = props;
  const [selectedCategory, setSelectedCategory] = useState([]); //drop down

  return (
    <Box>
      <App_navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <EventCategoryDropdown
          list={categoriesData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Events
          eventsData={eventsData}
          usersData={usersData}
          categoriesData={categoriesData}
          setEvent={setEvent}
          selectedCategory={selectedCategory}
        />
      </Stack>
      <AddEvent />
    </Box>
  );
}
