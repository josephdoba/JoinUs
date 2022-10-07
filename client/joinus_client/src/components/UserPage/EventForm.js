import React, { useState, setState, useRef } from "react";
import dayjs from "dayjs";
import useUserEvents from "../../hooks/useUserEvents";
import CategoriesList from "./CategoriesList";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import {
  Button,
  Fab,
  Modal,
  Stack,
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

export default function EventForm(props) {
  console.log(props)

 // We need this, just need to find how it was implemented before a previous merge wrecked it
  const imageRef = useRef()

  const StyledModal = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

// styles  the elements inside the modal:
  const FormBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > :not(style)": { m: 1, width: "100%" },
  };

  // const [myEvent, setMyEvent] = useState("")
  const { userCreateEventSubmit, userEditEventSubmit } = useUserEvents();
  const [selected, setSelected] = useState({ lat: null, lng: null });
  const [open, setOpen] = useState(false);

/* 
"i removed the set lat and long states....should this one giant object instead of separate useStates?" -Carmen

Good question! I asked a mentor about the difference of sending it all as one gigachad state object, and apparently its an older way of doing things when handling form data in react. With the scope of our project though, having them as individual states makes sense since its currently working. imho having a Form State object would be great for refactoring and i'm happy to do that once its all working with individual states

We also might need those lng/lat states, but i'll bring em back if we need em -Joba

*/
  // Form State 
  const [eventForm, setEventForm] = useState("");

  // // Form info State declarations:
  const [eventName, setEventName] = useState(props.name || "");
  const [eventImage, setEventImage] = useState(""); // image is breaking this atm
  const [eventDescription, setEventDescription] = useState(props.description || "");
  const [eventSizeLimit, setEventSizeLimit] = useState("");
  const [eventCategory, setEventCategory] = useState(props.category || "");
  const [eventAddress, setEventAddress] = useState(props.address || "");
  const [startTime, setStartTime] = useState(dayjs("2022-09-28T15:00:00"));
  const [endTime, setEndTime] = useState(dayjs("2022-09-28T15:00:00"));

  /*
  const [location, setLocation]=useState(“”)  
  onSubmit={()=>{const tempObj={eventName: eventName, location: location....}}}}
*/
  
  return (
    <>
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
          const sendDataObj = {
            eventName: data.get('label_eventName'),
            eventImage,
            eventDescription: data.get('label_eventDescription'),
            eventSizeLimit: 2,
            eventOwnerId: 1,
            eventCategory: data.get('label_eventCategory'),
            eventAddress: data.get('label_eventAddress'),
            lat: 51.0233064354121, // use the auto feature from the google api
            lng: -114.02369425973428,
            start_time: startTime,
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
              required
              id="standard-basic"
              label="Event Name"
              variant="standard"
              name="label_eventName"
              value={eventName}
              onChange={
                (event) => {
                  setEventName(event.target.value)
              }}
              />
              
            <TextField
              required
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

            <Search setSelected={setSelected} />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                required 
                label="Start Time"
                renderInput={(params) => <TextField {...params} />}
                value={startTime}
                onChange={
                  (event) => { 
                    setStartTime(event.$d.toUTCString())
              }}
            />
            </LocalizationProvider>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                required
                label="End Time"
                value={endTime}
                renderInput={(params) => <TextField {...params} />}
                onChange={
                  (event) => {
                    setEndTime(event.$d.toUTCString())
              }}
              />
            </LocalizationProvider>

          <CategoriesList
            required
            categoriesData={props.categoriesData}
            name="label_eventCategory"
            value={eventCategory}
            onChange={(event) => {
              event.preventDefault();
              setEventCategory(event.target.value);
            }}
          />

          <TextField
            required
            id="outlined-textarea"
            label="Description"
            placeholder="..."
            multiline
            inputProps={{ maxLength: 300 }}
            name="label_eventDescription"
            value={eventDescription}
            onChange={(event) => {
              setEventDescription(event.target.value);
            }}
          />

          <Stack direction="row" justifyContent="left">
            <input
              required
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              name="label_eventImage"
              value={eventImage}
              onChange={(event) => {
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
            
          </Stack>
        </Box>
      </Modal>
    </>
  );
}