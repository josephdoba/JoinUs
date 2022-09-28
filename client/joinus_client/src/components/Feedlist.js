import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Feed from './Feed'

export default function Feedlist() {
  return (
    <Box flex={4} p={2} >
      <Feed />
      <Feed />
    </Box>



  )
}