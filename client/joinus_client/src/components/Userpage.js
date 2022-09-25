import React from "react";
import Sidebar from './Sidebar'
import Feed from './Feed'
import App_navbar from "./App_navbar";
import { Box, Stack } from "@mui/material";

export default function Homepage() {
  return (
    <Box>
      <App_navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}