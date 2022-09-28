import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, experimentalStyled, IconButton, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { BottomNavigation } from '@mui/material';
export default function Feed() {

  const Card = styled("Card")(({ theme }) => ({
    display: 'flex', flexDirection: "column",
    alignItems: "center",
    margin: 5
  }));

  const CardContent = styled("CardContent")(({ theme }) => ({
    display: 'flex', flexDirection: "column",
    alignItems: "center",
    margin: 10
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
            5 attendees
          </Typography>

          <AvatarGroup max={4} sx={{
            '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
          }}>
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=826&t=st=1664226689~exp=1664227289~hmac=f902731d7e27baa3e10deaf833daa64d9b644baad17b4ddd12ec762debfdb491" />
            <Avatar alt="Travis Howard" src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=826&t=st=1664226705~exp=1664227305~hmac=a73f82e41b6ad2553c00d02712dc52b49f92f0bbc72ddc6e505c6454518339f8" />
            <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=826&t=st=1664226740~exp=1664227340~hmac=571618557769385ccfe3fb036cd4109883e8a7a92451dc9866b633942ed9890a" />
            <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=826&t=st=1664226755~exp=1664227355~hmac=a54b476daee8a547f1a03f6e8c5e437bf67d0cab761f6fb0148f20b439ad12a6" />
            <Avatar alt="Trevor Henderson" src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=826&t=st=1664226773~exp=1664227373~hmac=3910e620269a48446203c8ff5dfa5aaf7027412d691657d1ea8021477c703846" />
          </AvatarGroup>

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
            5 attendees
          </Typography>

          <AvatarGroup max={4} sx={{
            '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
          }}>
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=826&t=st=1664226689~exp=1664227289~hmac=f902731d7e27baa3e10deaf833daa64d9b644baad17b4ddd12ec762debfdb491" />
            <Avatar alt="Travis Howard" src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=826&t=st=1664226705~exp=1664227305~hmac=a73f82e41b6ad2553c00d02712dc52b49f92f0bbc72ddc6e505c6454518339f8" />
            <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=826&t=st=1664226740~exp=1664227340~hmac=571618557769385ccfe3fb036cd4109883e8a7a92451dc9866b633942ed9890a" />
            <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=826&t=st=1664226755~exp=1664227355~hmac=a54b476daee8a547f1a03f6e8c5e437bf67d0cab761f6fb0148f20b439ad12a6" />
            <Avatar alt="Trevor Henderson" src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=826&t=st=1664226773~exp=1664227373~hmac=3910e620269a48446203c8ff5dfa5aaf7027412d691657d1ea8021477c703846" />
          </AvatarGroup>

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
            5 attendees
          </Typography>


          <AvatarGroup max={4} sx={{
            '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
          }}>
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=826&t=st=1664226689~exp=1664227289~hmac=f902731d7e27baa3e10deaf833daa64d9b644baad17b4ddd12ec762debfdb491" />
            <Avatar alt="Travis Howard" src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=826&t=st=1664226705~exp=1664227305~hmac=a73f82e41b6ad2553c00d02712dc52b49f92f0bbc72ddc6e505c6454518339f8" />
            <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=826&t=st=1664226740~exp=1664227340~hmac=571618557769385ccfe3fb036cd4109883e8a7a92451dc9866b633942ed9890a" />
            <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=826&t=st=1664226755~exp=1664227355~hmac=a54b476daee8a547f1a03f6e8c5e437bf67d0cab761f6fb0148f20b439ad12a6" />
            <Avatar alt="Trevor Henderson" src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=826&t=st=1664226773~exp=1664227373~hmac=3910e620269a48446203c8ff5dfa5aaf7027412d691657d1ea8021477c703846" />
          </AvatarGroup>

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