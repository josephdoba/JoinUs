import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { Container } from "@mui/material";

export default function HowToJoin() {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="https://img.freepik.com/free-vector/verification-technologies-abstract-concept-illustration_335657-3894.jpg?w=1060&t=st=1663732762~exp=1663733362~hmac=2300fabb6b258c54f256b69d9070a5b0918f5940ccbb8fe680f7a9ee6ac82288"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              JOIN US! by signing up
            </Typography>
            <Typography variant="body2" color="text.secondary">
              text text text text text text text text text text text text text
              text text text text text
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="https://img.freepik.com/free-vector/learn-how-knit-abstract-concept-vector-illustration-positive-self-statement-practice-crocheting-mental-health-benefits-relieve-stress-during-coronavirus-pandemic-abstract-metaphor_335657-4129.jpg?w=1060&t=st=1663731741~exp=1663732341~hmac=ee038c476d2d8104617c05788b3623bcc757c5ae6bdfc8ff7ca602314791c4e9"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Look for an event you like
            </Typography>
            <Typography variant="body2" color="text.secondary">
              text text text text text text text text text text text text text
              text text text text text
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="https://img.freepik.com/free-vector/online-meetup-abstract-concept-vector-illustration-conference-call-join-meetup-group-video-call-online-service-distance-communication-informal-meeting-members-networking-abstract-metaphor_335657-2920.jpg?w=1060&t=st=1663729887~exp=1663730487~hmac=5d953ca6a6dcb9392c0c8dd84a62477d03ee49f70086e40c56ba6a29dbf992d4"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Chat with people
            </Typography>
            <Typography variant="body2" color="text.secondary">
              text text text text text text text text text text text text text
              text text text text text
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="https://img.freepik.com/free-vector/stay-connected-people-abstract-concept-vector-illustration-self-isolation-social-media-connections-friends-meetup-online-communication-social-distance-stay-home-abstract-metaphor_335657-4141.jpg?w=1060&t=st=1663732591~exp=1663733191~hmac=718acc90ab3d4b45490ff92f82110b1ac79bb5617537c5627cc1a1af6fd32dad"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Meet them
            </Typography>
            <Typography variant="body2" color="text.secondary">
              text text text text text text text text text text text text text
              text text text text text
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
