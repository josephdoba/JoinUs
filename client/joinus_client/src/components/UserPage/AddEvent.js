import React, { useState } from "react";
import dayjs from "dayjs";
import userEvents from "../../api/userEvents";
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
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function AddEvent() {
  const { userCreateEventSubmit } = userEvents();

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
  const [value, setValue] = useState(dayjs("2022-09-28T15:00:00"));

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
        {/* https://stackoverflow.com/questions/29791721/how-get-data-from-material-ui-textfield-dropdownmenu-components */}
        {/* https://stackoverflow.com/questions/65531477/how-to-post-form-data-using-material-ui-into-api */}

        <Box width={500} height={700} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create New Event
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
            {/* https://stackoverflow.com/questions/59862828/how-to-connect-button-to-form-submission-using-material-ui-cards */}
            {/*

              omg Moe help how tf does this form/submit interaction work in MUI?!
              tried putting "onSubmit={userCreateEventSubmit}" as a property within the <FormBox> component.. wasn't working.  

            Hmmm.. mkay so using "<form onSubmit={userCreateEventSubmit}>" "technically" works at even hitting the "userCreateEventSubmit function", but it breaks the entire layout. 

              */}

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
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <CategoriesList />

            <TextField
              id="outlined-textarea"
              label="Event Details"
              placeholder="..."
              multiline
              inputProps={{ maxLength: 300 }}
            />

            <Stack direction="row" justifyContent="left">
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
                Create
              </Button>
            </Stack>
          </FormBox>
        </Box>
      </StyledModal>
    </>
  );
}
