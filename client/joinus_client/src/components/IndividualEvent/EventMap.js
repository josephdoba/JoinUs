import React, { useEffect, useRef, useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import {
  useJsApiLoader,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import EventMapDetails from "./EventMapDetails";
import { Box, Stack, Button, Input } from "@mui/material";

const libraries = ["places"];

export default function EventMap(props) {
  const { start_time, end_time, lat, lng } = props;
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  const originRef = useRef();
  const destinationRef = useRef();

  if (loadError) return <MapError />;
  if (!isLoaded) return <div>Loading...</div>;

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    /* eslint-disable */
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
  }

  return (
    <Box flex={"30%"} p={2}>
      <Stack direction={"column"} spacing={2} justifyContent={"space-between"}>
        <MapComponent lat={lat} lng={lng} setMap={setMap} />

        <Autocomplete>
          <Input type="text" placeholder="Origin" ref={originRef} />
        </Autocomplete>
        <Autocomplete>
          <Input type="text" placeholder="Destination" ref={destinationRef} />
        </Autocomplete>

        <EventMapDetails
          start_time={start_time}
          end_time={end_time}
          map={map}
          lat={lat}
          lng={lng}
        />
      </Stack>
    </Box>
  );
}
