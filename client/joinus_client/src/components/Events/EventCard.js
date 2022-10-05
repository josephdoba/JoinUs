import React, { useState } from "react";
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

  const { userCreateEventSubmit } = userEvents();
  const { userLeaveEvent, userJoinEvent, userDeleteEvent } = useUserEvents();

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

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(dayjs("2022-09-28T15:00:00"));

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
            {/* EventCard.js:140 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
                at EventCard (EventCard.js:140:1) */}
            {/* {formatTime(start_time, end_time)} <br /> */}
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
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={700} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create New Event
            {/* if  */}
          </Typography>
          <FormBox
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
              value={name}
            />

            <TextField
              id="standard-basic"
              label="Full Address"
              variant="standard"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Time"
                value={start_time}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <CategoriesList categoriesData={props.categoriesData} />

            <TextField
              id="outlined-textarea"
              label="Event Details"
              placeholder="..."
              multiline
              inputProps={{ maxLength: 300 }}
              value={description}
            />

            <Stack direction="row" justifyContent="left">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
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
          </FormBox>
        </Box>
      </StyledModal>
      <Error open={error} setOpen={setError} />
    </Grid>
  );
}
