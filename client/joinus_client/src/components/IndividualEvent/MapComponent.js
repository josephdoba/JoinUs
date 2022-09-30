import { Box } from "@mui/material";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useState } from "react";

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

export default function MapComponent(props) {
  const [userCoords, setUserCoords] = useState(null);
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
        center={userCoords ? userCoords : position}
        mapContainerStyle={mapContainerStyle}
      >
        <Marker position={position} onLoad={onLoad} />
      </GoogleMap>
    </Box>
  );
}
