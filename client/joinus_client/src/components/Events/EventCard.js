import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Error from "./Error";

import { formatTime } from "../../helpers/helpers";
import { shortenText } from "../../helpers/helpers";
import AttendeeNumDisplay from "./AttendeeNumDisplay";

import dayjs from "dayjs";
import userEvents from "../../api/useUserEvents";
import CategoriesList from "../UserPage/CategoriesList";
import useUserEvents from "../../api/useUserEvents";

import { Modal, Stack, styled, TextField } from "@mui/material";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";

// need logic to show that 'join chat' link only if user has joined the chat
export default function EventCard(props) {
  const {
    id,
    name,
    image,
    description,
    start_time,
    end_time,
    category,
    attendeelist,
    eventsData,
    setEvent,
    owner_id,
    user,
    size_limit,
    showUserEvents,
    joinedEvents,
    setReload,
    reload,
  } = props;

  // to duck: We need an address props - Where would they come from? the db.. yea but.. what fil... the db??.. sigh, what I mean is, what is the parent of where these props are coming in? why do I need to know? -joba

  

  const { userCreateEventSubmit, userEditEventSubmit } = userEvents();
  const { userLeaveEvent, userJoinEvent, userDeleteEvent } = useUserEvents();

  const imageRef = useRef()

  const StyledModal = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // represents the elements inside the modal
  const FormBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > :not(style)": { m: 1, width: "100%" },
  };

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(dayjs("2022-09-28T15:00:00"));

  // Form info State declarations:
  const [eventName, setEventName] = useState(name);
  const [eventImage, setEventImage] = useState(""); // image is breaking this atm
  const [eventDescription, setEventDescription] = useState(description);
  const [eventSizeLimit, setEventSizeLimit] = useState(""); 
  const [eventCategory, setEventCategory] = useState(category);
  const [eventAddress, setEventAddress] = useState("");
  const [startTime, setStartTime] = useState(dayjs("2022-09-28T15:00:00"));
  const [endTime, setEndTime] = useState(dayjs("2022-09-28T15:00:00"));
  // // Form info State declarations:
  // const [eventName, setEventName] = useState(name);
  // const [eventImage, setEventImage] = useState(image);
  // const [eventDescription, setEventDescription] = useState(description);
  // const [eventSizeLimit, setEventSizeLimit] = useState(size_limit); // []
  // const [eventCategory, setEventCategory] = useState(category);
  // const [eventAddress, setEventAddress] = useState("");
  // const [startTime, setStartTime] = useState(dayjs("2022-09-28T15:00:00"));
  // const [endTime, setEndTime] = useState(dayjs("2022-09-28T15:00:00"));

    

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  const findEventByID = (id, eventsData) => {
    const event = eventsData.find((event) => event.id === id);
    setEvent(event);
  };

  const navigate = useNavigate();

  async function submitHandler() {
    findEventByID(id, eventsData);

    await wait(250);
    navigate(`/event`);
  }

  async function leaveEvent(dataObj) {
    await userLeaveEvent(dataObj);
    setReload(reload + 1);
  }

  async function joinEvent(dataObj) {
    if (attendeelist.length >= size_limit) {
      setError(true);
    } else {
      await userJoinEvent(dataObj);
      setReload(reload + 1);
    }
  }

  async function deleteEvent(dataObj) {
    let answer = prompt("Are you sure you want to delete? type yes or no");
    if (answer === "yes" || answer === "Yes") {
      await userDeleteEvent(dataObj);
      setReload(reload + 1);
    }
  }

  const checkIfJoinedEvent = (joinedEvents) => {
    const events = [];
    for (const i of joinedEvents) {
      if (user.id === i.user_id) {
        events.push(i.event_id);
      }
    }
    for (const prop of events) {
      if (prop === id) {
        return true;
      }
    }
    return false;
  };

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 380, maxHeight: 380 }}>
        <CardMedia component="img" alt={name} height="150" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {formatTime(start_time, end_time)} <br />
             {/*  Getting weird errors with this line after even after reinstalling depedencies, restarting server, reseeding db. tried props.category.name with no luck commented out for now*/}
             {/* Category: {category.name} */}
          </Typography>
          <Typography variant="paragraph">
            {shortenText(description)}
          </Typography>
        </CardContent>

        {user.id === owner_id && showUserEvents === 1 && (
          <CardActions>
            <Button onClick={submitHandler} size="small">
              Learn More
            </Button>
            <Button onClick={(e) => setOpen(true)} size="small">
              Edit Event
            </Button>
            <Button
              size="small"
              onClick={(e) => {
                const dataObj = {
                  event_id: id,
                  owner_id: user.id,
                };
                deleteEvent(dataObj);
              }}
            >
              Delete Event
            </Button>
          </CardActions>
        )}
        {showUserEvents !== 1 && checkIfJoinedEvent(joinedEvents) && (
          <CardActions>
            <Button onClick={submitHandler} size="small">
              Learn More
            </Button>
            <Button
              onClick={(e) => {
                const dataObj = {
                  user_id: user.id,
                  event_id: id,
                };
                leaveEvent(dataObj);
              }}
              size="small"
            >
              Leave Event
            </Button>
            <AttendeeNumDisplay
              attendeelist={attendeelist}
              size_limit={size_limit}
            />
          </CardActions>
        )}
        {showUserEvents !== 1 && checkIfJoinedEvent(joinedEvents) === false && (
          <CardActions>
            <Button onClick={submitHandler} size="small">
              Learn More
            </Button>
            <Button
              size="small"
              onClick={(e) => {
                const dataObj = {
                  user_id: user.id,
                  event_id: id,
                };
                joinEvent(dataObj);
              }}
            >
              Join Event
            </Button>
            <AttendeeNumDisplay
              attendeelist={attendeelist}
              size_limit={size_limit}
            />
          </CardActions>
        )}
      </Card>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={StyledModal}
      > 
        <Box 
        width={500} 
        height={700} 
        bgcolor="white" 
        p={3} 
        borderRadius={3}
        sx={FormBox}
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const sendDataObj = {
            eventName: data.get('label_eventName'),
            eventAddress: data.get('label_eventAddress'),
            eventImage,
            eventDescription: data.get('label_eventDescription'),
            eventSizeLimit: 2,
            eventOwnerId: user.id, // grab owner_id from cookies .. just user user.id?
            eventCategory: data.get('label_eventCategory'),
            lat: 51.0233064354121, // will eventually need to generate these values from address
            lng: -114.02369425973428,
            // start_time: "2022-10-13 05:00:00",
            start_time: startTime,
            // end_time: "2022-10-13 17:00:00"
            end_time: endTime
          };
          userEditEventSubmit(sendDataObj)
          setOpen(false)
        }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create New Event
            {/* if  */}
          </Typography>
          <Box
            component="form"
            //
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Event Name"
              variant="standard"
              name="label_eventName"
              value={eventName} // name is the pre-rendered data, so why not try setting your existing state for eventName to equal name on load -- Because name is a prop, its not state. Therefore, when you changed this to use eventName state, it shows up blank, because nothing is stored.
              // if you try using setState, it re-renders the component.
              //  the issue is props are being pulled.. which can't be updated? I don't believe that .. nvm props are static https://stackoverflow.com/questions/24939623/can-i-update-a-components-props-in-react-js#:~:text=A%20component%20cannot%20update%20its,the%20props%20of%20its%20children.

              // so on render, we need to assign "name" to eventName state

              // https://www.robinwieruch.de/react-derive-state-props/

              // Yaaas setting them individually on the state declaration worked!

              onChange={
                (event) => {
                  setEventName(event.target.value); 
              }}
              />

            <TextField
              id="standard-basic"
              label="Full Address"
              variant="standard"
              name="label_eventAddress"
              value={eventAddress}
              onChange={
                (event) => {
                  event.preventDefault()
                  setEventAddress(event.target.value)
              }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Start Time"
                renderInput={(params) => <TextField {...params} />}
                value={startTime}
                onChange={
                  (event) => { 
                    console.log(event)
                    setStartTime(event.$d.toUTCString())
              }}
            />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="End Time"
                // name="label_end_time"
                value={endTime}
                onChange={
                  (event) => {
                    setEndTime(event.$d.toString())
              }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <CategoriesList
            categoriesData={props.categoriesData}
            name="label_eventCategory"
            value={eventCategory}
            onChange={(event) => {
              event.preventDefault();
              setEventCategory(event.target.value);
              console.log(event);
            }}
          />

          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="..."
            multiline
            inputProps={{ maxLength: 300 }}
            name="label_eventDescription"
            value={eventDescription}
            onChange={(event) => {
              // event.preventDefault()
              // setMyEvent(prev => ({...prev, eventName: event.target.value}))
              setEventDescription(event.target.value);
              console.log(event.target.value);
            }}
          />

            <Stack direction="row" justifyContent="left">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                name="label_eventImage"
                value={eventImage}
                onChange={(event) => {
                  // event.preventDefault()
                  // setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  setEventImage(event.target.value);
                  console.log(event.target.value);
                  console.log(`from event Image state: ${eventImage}`);
                }}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="text"
                  component="span"
                  endIcon={<AddIcon />}
                  value={image}
                >
                  Upload Image
                </Button>
              </label>
            </Stack>

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
                onClick={userCreateEventSubmit}
              >
                Submit edit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
      <Error open={error} setOpen={setError} />
    </Grid>
  );
}
