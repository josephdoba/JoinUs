import { Box, Card, CardContent, CardHeader, styled, Typography } from "@mui/material";
import React from "react";

export default function EventDetails(props) {
  const Card = styled("Card")(({ theme }) => ({
    display: 'flex', flexDirection: "column",
    alignItems: "center",
    margin: 5
  }));
  return (
    <Box bgcolor="red" flex={"50%"} p={3}>
      <Card>
        <CardHeader style={{ textAlign: 'center' }}
          title="Celebration Night"
        />
        <Box
          component="img"
          sx={{
            height: 333,
            width: 450,
            maxHeight: { xs: 233, md: "100%" },
            maxWidth: { xs: 350, md: "100%" },
          }}
          alt="The house from the offer."
          src="https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg?w=996&t=st=1664094421~exp=1664095021~hmac=c1927e0282bb72583c2b1a397b5d3981a0505d3c9465026a326870f36250ccde"
        />
        <CardContent>
          <Typography variant="h6">
            Details
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Text Text Text Text Text Text Text Text Text Textv
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text Text
          </Typography>

        </CardContent>
      </Card>
    </Box>
  )

}
