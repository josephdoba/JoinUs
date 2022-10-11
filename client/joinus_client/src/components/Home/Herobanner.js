import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import bannerImg from "../../images/HeroBanner2.png"


const Herobanner = function () {
  return (
    // <Stack direction={"row"} spacing={2} justifyContent={"space-between"} p={5}>

    //   <Box sx={{
    //     display: 'flex',
    //     flexDirection: "column",
    //     justifyContent: 'center'
    //   }}>
    //     <Typography p={1}>
    //       Social without the schedule.
    //     </Typography>

    //     <Typography p={5} align="center">
    //       Make new friends with shared interests using local short-term meetups.
    //     </Typography>
    //   </Box>


    //   <Box
    //     component="img"
    //     sx={{
    //       height: 433,
    //       width: 650,
    //       maxHeight: { xs: 233, md: 667 },
    //       maxWidth: { xs: 350, md: 750 },
    //     }}
    //     alt="Running"
    //     src={bannerImg}
    //   />
    // </Stack >

    <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
        
        }}
        alt="Social without the schedule. HeroBanner"
        src={bannerImg}
      />
  )
}

export default Herobanner