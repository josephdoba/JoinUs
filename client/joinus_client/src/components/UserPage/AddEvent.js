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
    "& > :not(style)": { m: 1, width: "100%" }
  };

  
  // const [myEvent, setMyEvent] = useState("")
  const { userCreateEventSubmit } = useUserEvents()

  const [open, setOpen] = useState(false);
  
  // Form info State declarations:
  const [eventName, setEventName] = useState("")
  const [eventImage, setEventImage] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventSizeLimit, setEventSizeLimit] = useState("") // []
  const [eventCategory, setEventCategory] = useState("")
  const [eventAddress, setEventAddress] = useState("")
  const [eventLat, setEventLat] = useState("") // []
  const [eventLng, setEventLng] = useState("") // []
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
        <Fab variant="extended"
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
{/* https://stackoverflow.com/questions/69387824/sending-form-data-onto-backend for time */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="label_start_time"
                renderInput={(params) => <TextField {...params} />}
                // name="label_start_time" // TimePicker does not hav ea name prop
                value={startTime}
                // onChange={(e) => setStartTime(e.target.value)}
                // value={myEvent.start_time}
                onChange={
                  (event) => { 
                    // event.preventDefault();
                    console.log(event)
                    // console.log(event.$d)
                    // setStartTime(prev => ({...prev, start_time: event.$d}))
                    setStartTime(event.$d.toUTCString())
                    // console.log(startTime)
              }}
              />
            </LocalizationProvider>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="End Time"
                name="label_end_time"
                value={endTime}
                // onChange={(e) => setEndTime(e.target.value)}
                // value={myEvent.end_time}
                onChange={
                  (event) => {
                    // event.preventDefault()
                    // setEndTime(prev => ({...prev, end_time: event.target.value}))
                    setEndTime(event.$d.toString())
              }}
                // (e) => setEvent(e.inputEl.current.children[1].children[0].value)
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <CategoriesList
            categoriesData={props.categoriesData}
            eventCategory={eventCategory}
            setEventCategory={setEventCategory}
            // onChange={
            // (event) => {
            //   event.preventDefault();
            //   setEventCategory(event.target.value)}
            />

            <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="..."
              multiline
              inputProps={{ maxLength: 300 }}
              name="label_eventDescription"
              value={eventDescription}
              onChange={
                (event) => {
                  // event.preventDefault()
                  // setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  setEventDescription(event.target.value)
              }}
               />

            <Stack direction="row" justifyContent="left">
              <input
                ref={imageRef}
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                name="label_eventImage"
                // value={eventImage.toString()}
                onChange={
                (event) => {
                  // let url = URL.createObjectURL(file)
                  const reader = new FileReader();
                  // console.log(imageRef)
                  // console.log(event.target.files)
                  console.log(URL.createObjectURL(imageRef.current.files[0]).url)
                  // console.log(imageRef.current.files[0])
                  // console.log(event.target)
                  // event.preventDefault()
                  // setMyEvent(prev => ({...prev, eventName: event.target.value}))
                  // console.log(`setEventImage to: ${event.target.value}`)
                  // setEventImage(event.target.value)
                  setEventImage(URL.createObjectURL(imageRef.current.files[0]))
                  // console.log(`eventImage state: ${eventImage}`)
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
              <Button
                variant="contained"
                type="submit"
                endIcon={<AddIcon />}
                
              >
                Create
                </Button>
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