import React, { useState } from "react";
import dayjs from 'dayjs';
import { Fab, IconButton, Modal, styled, TextField, Tooltip, Typography } from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function AddEvent() {

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })

  const [open, setOpen] = useState(false)

  const [value, setValue] = useState("10");

  return (
    <>
      <Tooltip onClick={e => { setOpen(true) }}
        title="Create A New Event"
        sx={{
          position: "fixed", bottom: 20,
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
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={300} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">Create New Event</Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Event Name" variant="standard" />
            <TextField id="standard-basic" label="Full Address" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
}