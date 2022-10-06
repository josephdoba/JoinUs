import React, { useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import { useLoadScript } from "@react-google-maps/api";
import EventMapDetails from "./EventMapDetails";
import { Box, Stack } from "@mui/material";
import useSharedEvent from "../../hooks/useSharedEvent";

const libraries = ["places"];

export default function EventMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  const { event } = useSharedEvent();
  const [map, setMap] = useState(/** @type googlemaps.Map */ (null));

  if (loadError) return <MapError />;
  if (!isLoaded) return <div>Loading...</div>;

  // pan back to event location
  const handleClick = () => {
    map.panTo({ lat: event.lat, lng: event.lng });
  };

  return (
    <Box flex={"30%"} p={2}>
      <Stack direction={"column"} spacing={2} justifyContent={"space-between"}>
        <MapComponent setMap={setMap} />

        <EventMapDetails handleClick={handleClick} />
      </Stack>
    </Box>
  );
}

// Autocomplete box for search.
