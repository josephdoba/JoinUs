import React, { useState } from "react";
import MapComponent from "./MapComponent";
import MapError from "./MapError";
import { useLoadScript } from "@react-google-maps/api";
import EventMapDetails from "./EventMapDetails";
import { Box, Stack, ListItemText } from "@mui/material";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const libraries = ["places"];

export default function EventMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  const { start_time, end_time, lat, lng } = props;
  const [map, setMap] = useState(/** @type googlemaps.Map */ (null));
  const [selected, setSelected] = useState(null);

  if (loadError) return <MapError />;
  if (!isLoaded) return <div>Loading...</div>;

  // pan back to event location
  const handleClick = () => {
    map.panTo({ lat, lng });
  };

  return (
    <Box flex={"30%"} p={2}>
      <Stack direction={"column"} spacing={2} justifyContent={"space-between"}>
        <Search setSelected={setSelected} />
        <MapComponent lat={lat} lng={lng} setMap={setMap} />

        <EventMapDetails
          start_time={start_time}
          end_time={end_time}
          lat={lat}
          lng={lng}
          handleClick={handleClick}
        />
      </Stack>
      <p>{selected && selected.lat}</p>
      <p>{selected && selected.lng}</p>
    </Box>
  );
}

// Autocomplete box for search.
function Search({ setSelected }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
