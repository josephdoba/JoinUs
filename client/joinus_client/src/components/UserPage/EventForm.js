import React, { useState, useEffect, useRef } from "react";
import useUserEvents from "../../hooks/useUserEvents";
import moment from "moment";
import CategoriesList from "./CategoriesList";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Search from "./Search";
import useSharedUser from "../../hooks/useSharedUser";

export default function EventForm(props) {
  let { formMode } = props; // needs to be a let for it to work
  const { open, setOpen, categoriesData, eventsData, eventData } = props;
  const { user } = useSharedUser();
  const { userCreateEventSubmit, userEditEventSubmit, joinEvent } =
    useUserEvents();

  // Stuff for image processing... might still need this
  const imageRef = useRef(null);
  // https://reactjs.org/docs/hooks-reference.html#useref
  const inputEl = useRef(null);

  // form mode handling:
  function handleCancelClick(e) {
    formMode = "create";
    setOpen(false);
  }

  // For Lat lng
  const [selected, setSelected] = useState({ lat: null, lng: null });

  useEffect(() => {
    setForm((prev) => ({ ...form, lat: selected.lat, lng: selected.lng }));
  }, []);
  // latlng end

  const [form, setForm] = useState({
    name: eventData ? eventData.name : "",
    image: eventData ? eventData.image : "",
    description: eventData ? eventData.description : "",
    size_limit: eventData ? eventData.size_limit : "",
    city: eventData ? eventData.city : "",
    owner_id: user.id,
    category: eventData ? eventData.category : "",
    lat: selected.lat,
    lng: selected.lng,
    start_time: eventData ? eventData.start_time : "",
    end_time: eventData ? eventData.end_time : "",
  });

  const dataObj = {
    eventId: eventData ? eventData.id : null,
    eventName: form.name,
    eventImage: form.image,
    eventDescription: form.description,
    eventSizeLimit: form.size_limit,
    eventOwnerId: user.id,
    eventCategory: form.category,
    eventCity: form.city,
    lat: selected.lat,
    lng: selected.lng,
    start_time: form.start_time,
    end_time: form.end_time,
  };

  const submitForm = (dataObj) => {
    console.log(`form mode: ${formMode}`);
    if (formMode === "create") {
      userCreateEventSubmit(dataObj);
      joinEvent([], dataObj.eventSizeLimit, {
        event_id: eventsData.length + 1,
        user_id: user.id,
      });
    } else if (formMode === "edit") {
      userEditEventSubmit(dataObj);
    } else {
      console.log("something went wrong updating the formMode");
    }
    setOpen(false);
    setForm({});
  };

  return (
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
        bgcolor={"background.default"} color={"text.primary"}
        p={3}
        borderRadius={3}
        component="form"
        noValidate
        autoComplete="off"
        sx={FormBoxStyles}
        ref={inputEl}
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(dataObj);
        }}
      >
        <Typography variant="h6" color="gray" textAlign="center">
          {formMode === "create" ? "Create New Event" : "Edit Event"}
        </Typography>
        <TextField
          required
          id="standard-basic"
          label="Event Name"
          variant="standard"
          name="Event Name"
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <TextField
            required
            id="standard-basic"
            label="City"
            variant="standard"
            name="City"
            value={form.city}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, city: event.target.value }))
            }
          />
          <Search
          selected={selected}
          setSelected={setSelected}
          form={form}
          setForm={setForm}
        />
          <TextField
            required
            id="standard-basic"
            label="Party Limit"
            variant="standard"
            name="Party Limit"
            value={form.size_limit}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, size_limit: event.target.value }))
            }
          />
        </Stack>

        <Search
          selected={selected}
          setSelected={setSelected}
          form={form}
          setForm={setForm}
        />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            label="Start Time"
            value={form.start_time}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, start_time: moment.utc(event) }))
            }
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            label="End Time"
            value={form.end_time}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, end_time: moment.utc(event) }))
            }
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <CategoriesList
          required
          categories={categoriesData}
          name="label_eventCategory"
          value={form.category}
          onChange={(event) => {
            // console.log(`${event}, event from categories list`);
            setForm((prev) => ({
              ...prev,
              category: parseInt(event.target.value),
            }));
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
          value={form.description}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, description: event.target.value }))
          }
        />
        <TextField
          required
          id="outlined-textarea"
          label="Image URL"
          placeholder="..."
          multiline
          inputProps={{ maxLength: 300 }}
          name="label_eventImage"
          value={form.image}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, image: event.target.value }))
          }
        />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button onClick={(e) => handleCancelClick(e)} variant="outlined">
            Cancel
          </Button>
          <Button variant="contained" type="submit" endIcon={<AddIcon />}>
            {formMode === "create" ? "Create" : "Submit"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

const StyledModal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const FormBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& > :not(style)": { m: 1, width: "100%" },
};
