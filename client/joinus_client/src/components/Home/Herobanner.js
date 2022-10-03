import React from "react";
import ReactSwitch from 'react-switch'
import { Container } from "@mui/system";
import { Box, Stack, Typography } from "@mui/material";
import bannerImg from "../../images/run.png"


const Herobanner = function () {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"space-between"} p={5}>
      <Typography p={5}>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
      </Typography>

      <Box
        component="img"
        sx={{
          height: 433,
          width: 650,
          maxHeight: { xs: 233, md: 667 },
          maxWidth: { xs: 350, md: 750 },
        }}
        alt="Running"
        src={bannerImg}
      />
    </Stack >
  )
}

export default Herobanner