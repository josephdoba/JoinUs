import { Box } from "@mui/material";
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function MapComponent(props) {
  const { lat, lng } = props;
  const center = {
    lat,
    lng,
  };

  return (
    <Box bgcolor="red" flex={"50%"} p={2}>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </Box>
  );
}
