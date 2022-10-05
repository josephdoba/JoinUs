import React, { useState, setState, useRef } from "react";
import dayjs from "dayjs";
import useUserEvents from "../../api/useUserEvents";
import CategoriesList from "./CategoriesList";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import {
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Search from "./Search";

export default function AddEvent(props) {
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

  // const [myEvent, setMyEvent] = useState("")
  const { userCreateEventSubmit } = useUserEvents();
  const [selected, setSelected] = useState({ lat: null, lng: null });

  const [open, setOpen] = useState(false);

  // i removed the set lat and long states....should this one giant object instead of separate useStates?
  // Form info State declarations:
  const [eventName, setEventName] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventSizeLimit, setEventSizeLimit] = useState(""); // []
  const [eventCategory, setEventCategory] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [startTime, setStartTime] = useState(dayjs("2022-09-28T15:00:00"));
  const [endTime, setEndTime] = useState(dayjs("2022-09-28T15:00:00"));

  /*
  const [location, setLocation]=useState(“”)  
  
  onSubmit={()=>{const tempObj={eventName: eventName, location: location....}}}}
*/
  
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
        <Fab
          variant="extended"
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          New Event
        </Fab>
      </Tooltip>

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
        component="form"
        noValidate
        autoComplete="off"
        sx={FormBox}
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          console.log(data.get("label_start_time"))
          const sendDataObj = {
            eventName: data.get('label_eventName'),
            eventAddress: data.get('label_eventAddress'),
            eventImage,
            eventDescription: data.get('label_eventDescription'),
            eventSizeLimit: 2,
            eventOwnerId: 1, // grab owner_id from cookies
            eventCategory: data.get('label_eventCategory'),
            lat: 51.0233064354121, // will eventually need to generate these values from address
            lng: -114.02369425973428,
            // start_time: "2022-10-13 05:00:00",
            start_time: startTime,
            // end_time: "2022-10-13 17:00:00"
            end_time: endTime
          };

          userCreateEventSubmit(sendDataObj)
          setOpen(false)
        }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create New Event
          </Typography>
            <TextField
              id="standard-basic"
              label="Event Name"
              variant="standard"
              name="label_eventName"
              value={eventName}
              onChange={
                (event) => {
                  // event.preventDefault()
                  // setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  setEventName(event.target.value)
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
              <Button variant="text" component="span" endIcon={<AddIcon />}>
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
            <Button variant="contained" type="submit" endIcon={<AddIcon />}>
              Create
            </Button>
            <Search setSelected={setSelected} />
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

/*
The code below was reference code while troubleshooting the form.

https://github.com/mui/material-ui/blob/v5.10.6/docs/data/material/getting-started/templates/sign-in/SignIn.js

-Joba
*/
