import React from "react";
import Sidebar from './Sidebar'
import Feedlist from './Feedlist'
import AddEvent from './AddEvent'
import App_navbar from "./App_navbar";
import { Box, Stack } from "@mui/material";

export default function Userpage() {
  return (
    <Box>
      <App_navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feedlist />
      </Stack>
      <AddEvent />
    </Box>
  );
}