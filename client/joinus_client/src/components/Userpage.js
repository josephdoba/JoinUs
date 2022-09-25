import React from "react";
import Sidebar from './Sidebar'
import Feed from './Feed'
import Navbar2 from "./Navbar2";
import { Box, Stack } from "@mui/material";

export default function Homepage() {
  return (
    <Box>
      <Navbar2 />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
}