import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { BottomNavigation } from '@mui/material';
export default function Feed() {

  const Card = styled("Card")(({ theme }) => ({
    display: 'flex', flexDirection: "column",
    alignItems: "center",
    margin: 5
  }));

  return (

    <Stack direction="row" spacing={2}>
      <Card >
        <CardHeader style={{ textAlign: 'center' }}
          title="Celebration Night"
          subheader="September 30, 2022"
        />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg?w=996&t=st=1664094421~exp=1664095021~hmac=c1927e0282bb72583c2b1a397b5d3981a0505d3c9465026a326870f36250ccde"
        />
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            3 attendees
          </Typography>
          <Button size="small" variant="text">Join Chat</Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">

          </IconButton>
          <IconButton aria-label="share">
          </IconButton>
        </CardActions>
      </Card>

      <Card >
        <CardHeader style={{ textAlign: 'center' }}
          title="Celebration Night"
          subheader="September 30, 2022"
        />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg?w=996&t=st=1664094421~exp=1664095021~hmac=c1927e0282bb72583c2b1a397b5d3981a0505d3c9465026a326870f36250ccde"
        />
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            3 attendees
          </Typography>
          <Button size="small" variant="text">Join Chat</Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">

          </IconButton>
          <IconButton aria-label="share">
          </IconButton>
        </CardActions>
      </Card>

      <Card >
        <CardHeader style={{ textAlign: 'center' }}
          title="Celebration Night"
          subheader="September 30, 2022"
        />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg?w=996&t=st=1664094421~exp=1664095021~hmac=c1927e0282bb72583c2b1a397b5d3981a0505d3c9465026a326870f36250ccde"
        />
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            3 attendees
          </Typography>
          <Button size="small" variant="text">Join Chat</Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">

          </IconButton>
          <IconButton aria-label="share">
          </IconButton>
        </CardActions>
      </Card>
    </Stack>
  );
}