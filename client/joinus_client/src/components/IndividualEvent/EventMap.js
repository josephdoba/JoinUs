import React, { useEffect, useRef, useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import {
  useLoadScript,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import EventMapDetails from "./EventMapDetails";
import { Box, Stack, Button, Input, ButtonGroup } from "@mui/material";

const libraries = ["places"];

export default function EventMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  const { start_time, end_time, lat, lng } = props;
  const [map, setMap] = useState(/** @type googlemaps.Map */ (null));
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (loadError) return <MapError />;
  if (!isLoaded) return <div>Loading...</div>;

  // pan back to event location
  const handleClick = () => {
    map.panTo({ lat, lng });
  };

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
    setDirections(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }
  /* eslint-enabled */

  const clearRoute = () => {
    setDirections(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  };

  return (
    <Box flex={"30%"} p={2}>
      <Stack direction={"column"} spacing={2} justifyContent={"space-between"}>
        <MapComponent
          lat={lat}
          lng={lng}
          setMap={setMap}
          directions={directions}
          distance={distance}
          duration={duration}
        />

        <Autocomplete>
          <Input type="text" placeholder="Origin" ref={originRef} />
        </Autocomplete>
        <Autocomplete>
          <Input type="text" placeholder="Destination" ref={destinationRef} />
        </Autocomplete>

        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button onClick={calculateRoute} type="submit">
            Calculate
          </Button>
          <Button onClick={clearRoute}>Clear</Button>
        </ButtonGroup>
        <p>
          {distance} {duration}
        </p>

        <EventMapDetails
          start_time={start_time}
          end_time={end_time}
          lat={lat}
          lng={lng}
          handleClick={handleClick}
        />
      </Stack>
    </Box>
  );
}
