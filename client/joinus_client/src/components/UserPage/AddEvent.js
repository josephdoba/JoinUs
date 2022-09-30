import React, { useState } from "react";
import dayjs from 'dayjs';
import Route from "react-router-dom";
import userEvents from '../../api/userEvents';

import {
  Button,
  Fab,
  IconButton,
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

export default function AddEvent() {
   const { userCreateEventSubmit, userEditEventSubmit } = userEvents()

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
  const [value, setValue] = useState(dayjs('2022-09-28T15:00:00'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="Create A New Event"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab variant="extended">
          <AddIcon sx={{ mr: 1 }} />
          New Event
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={500} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create New Event
          </Typography>
          <FormBox
            component="form"
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
            />

            <TextField
              id="standard-basic"
              label="Full Address"
              variant="standard"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Time"
                value={value}
                onChange={(handleChange)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextField
              id="outlined-textarea"
              label="Event Details"
              placeholder="..."
              multiline
              inputProps={{ maxLength: 300 }}
            />

            <Stack direction="row" spacing={2} justifyContent="center" >
              <Button onClick={(e) => setOpen(false)} variant="outlined">
                Cancel
              </Button>
              {/* <Button variant="contained" endIcon={<AddIcon />}> */}
              {/* <Button variant="contained" endIcon={<AddIcon />} onClick={() => {console.log("On Click")}}> */}
              {/* <Button variant="contained" endIcon={<AddIcon />} onClick={userCreateEventSubmit}> */}
              <Button variant="contained" endIcon={<AddIcon />} onClick={userEditEventSubmit}>
              {/* <Button variant="contained" endIcon={<AddIcon />} onClick={<Route to="/"/>}> */}
                Create
              </Button>
            </Stack>

          </FormBox>
        </Box>
      </StyledModal>
    </>
  );
}