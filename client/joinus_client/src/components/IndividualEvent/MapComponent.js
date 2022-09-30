import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import PersonPinCircleTwoToneIcon from '@mui/icons-material/PersonPinCircleTwoTone';
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLoadScript, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

export default function MapComponent(props) {
  const [userCoords, setUserCoords] = useState({});
  const { lat, lng } = props;

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log("user Latitude is :", position.coords.latitude);
      console.log(" user Longitude is :", position.coords.longitude);
    });
  }, []);

  // arggggg why is the marker not workign!!!!!!

  const position = { lat, lng };
  console.log(`event coords is ${lat}, ${lng}`);

  return (
    <Box bgcolor="red" flex={"50%"} p={2}>
      <GoogleMap
        zoom={12}
        center={userCoords}
        mapContainerStyle={mapContainerStyle}
      >
        <Marker position={position} onLoad={onLoad} />
      </GoogleMap>
    </Box>
  );
}
