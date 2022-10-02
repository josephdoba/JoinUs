import React, { useState, setState, useRef } from "react";
import dayjs from "dayjs";
import useUserEvents from "../../api/useUserEvents";
import CategoriesList from "./CategoriesList";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import {
  Button,
  Fab,
  IconButton,
  Input,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function AddEvent() {

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const FormBox = styled("Box")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const [myEvent, setMyEvent] = useState("")
  const { userCreateEventSubmit } = useUserEvents()

  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState(dayjs("2022-09-28T15:00:00"));
  const [endTime, setEndTime] = useState(dayjs("2022-09-28T15:00:00"));

  const [eventName, setEventName] = useState("")
    /*
  const [location, setLocation]=useState(“”)  
  
  onSubmit={()=>{const tempObj={eventName: eventName, location: location....}}}}
*/
  
  // https://reactjs.org/docs/hooks-reference.html#useref
  // const inputEl = useRef(null)
  // const buttonClick = () => {
  //   console.log(myEvent)
  //   console.log("--------------------")
  //   // console.log(inputEl.current.children[1].children[0].value) - correct object pathing we determined with a mentor
  //   // console.log(inputEl.current.children[1].children[0].value)
  // }


  return (
    <>
      <Tooltip
        title="Create A New Event"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab variant="extended"
          onClick={(e) => {
            setOpen(true);
        }}
        >
          <AddIcon sx={{ mr: 1 }} />
          New Event
        </Fab>
      </Tooltip>

{/* IT WAS AN ISSUE WITH <MODALSTYLE/> */}
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* https://stackoverflow.com/questions/29791721/how-get-data-from-material-ui-textfield-dropdownmenu-components */}
        {/* https://stackoverflow.com/questions/65531477/how-to-post-form-data-using-material-ui-into-api */}
        {/* https://stackoverflow.com/questions/69387824/sending-form-data-onto-backend */}
        {/* https://codevoweb.com/form-validation-react-hook-form-material-ui-react/ */}
        {/* fab, filledInput, formControl, formControlLabel, formGroup, formHelperText, formLabel */}

        <Box 
        width={500} 
        height={700} 
        bgcolor="white" 
        p={3} 
        borderRadius={3}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const sendDataObj = {
            eventName: data.get('label_eventName'),
            eventAddress: data.get('label_eventAddress')
          };
          userCreateEventSubmit(sendDataObj)
        }}
        noValidate
        >

          <Typography variant="h6" color="gray" textAlign="center">
            Create New Event
          </Typography>
          {/* <form> */}
           {/* <FormBox
            // component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            // noValidate
            // autoComplete="off"
          > */}
            {/* https://stackoverflow.com/questions/59862828/how-to-connect-button-to-form-submission-using-material-ui-cards */}

            <TextField
              id="standard-basic"
              label="Event Name"
              name="label_eventName"
              variant="standard"
              value={eventName}
              onChange={
                (event) => {
                  // event.preventDefault()
                  // setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  setEventName(event.target.value)
                  console.log(event.target.value)
              }}
              // ref={inputEl}
              // onChange={(e) => setEvent(e.inputEl.current.children[1].children[0].value)}
              //
              
            />


            <TextField
              id="standard-basic"
              label="Full Address"
              name="label_eventAddress"
              variant="standard"
              value={myEvent.eventAddress}
              onChange={
                (event) => {
                  event.preventDefault()
                  setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  console.log(event)
              }}
            />
{/* https://stackoverflow.com/questions/69387824/sending-form-data-onto-backend for time */}
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Start Time"
                renderInput={(params) => <TextField {...params} />}
                // value={startTime}
                // onChange={(e) => setStartTime(e.target.value)}
                value={myEvent.start_time}
                 onChange={
                (event) => {
                  event.preventDefault()
                  setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  console.log(event)
              }}
              />
            </LocalizationProvider> */}
            
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="End Time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                // (e) => setEvent(e.inputEl.current.children[1].children[0].value)
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}

            {/* <CategoriesList /> */}

            {/* <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="..."
              multiline
              inputProps={{ maxLength: 300 }}
            /> */}

            {/* <Stack direction="row" justifyContent="left">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="text" component="span" endIcon={<AddIcon />}>
                  Upload Image
                </Button>
              </label>
            </Stack> */}

            <Stack direction="row" spacing={2} justifyContent="center">
              <Button onClick={(e) => setOpen(false)} variant="outlined">
                Cancel
              </Button>
              {/* <Button variant="contained" endIcon={<AddIcon />}> */}
              {/* <Button variant="contained" type="submit" endIcon={<AddIcon />}> */}
              <Button
                variant="contained"
                type="submit"
                endIcon={<AddIcon />}
                
              >
                Create
                </Button>
              </Stack>
            {/* </FormBox> */}
          {/* </form> */}
        </Box>
      </Modal>
    </>
  );
}


/*
This code below was reference code while troubleshooting the form.

https://github.com/mui/material-ui/blob/v5.10.6/docs/data/material/getting-started/templates/sign-in/SignIn.js

-Joba
*/

/*
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [eventName, setEventName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
    <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />


        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={eventName}
              onChange={
                (event) => {
                  // event.preventDefault()
                  // setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  setEventName(event.target.value)
                  console.log(event.target.value)
                }}
                />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Modal>
    </>
  );
}
*/