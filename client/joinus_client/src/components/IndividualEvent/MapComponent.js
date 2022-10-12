import { Box } from "@mui/system";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import useSharedEvent from "../../hooks/useSharedEvent";

const mapContainerStyle = {
  marginTop: "20px",
  width: "450px",
  height: "333px",
};

export default function MapComponent(props) {
  const { setMap } = props;
  const { event } = useSharedEvent();

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const center = { lat: event.lat, lng: event.lng };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 2,
      }}
    >
      <GoogleMap
        zoom={14}
        center={center ? center : userCoords} // set center to event location, or user's location
        mapContainerStyle={mapContainerStyle}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF position={center} onLoad={onLoad} />
      </GoogleMap>
    </Box>
  );
}
