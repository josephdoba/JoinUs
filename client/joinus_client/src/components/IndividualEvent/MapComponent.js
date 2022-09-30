import { Box } from "@mui/material";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo, useState } from "react";
import { useLoadScript, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

export default function MapComponent(props) {
  const { lat, lng } = props;

  const center = { lat, lng };
  console.log(lat);
  console.log(lng);
  return (
    <Box bgcolor="red" flex={"50%"} p={2}>
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerStyle={mapContainerStyle}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </Box>
  );
}
