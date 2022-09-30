import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import PersonPinCircleTwoToneIcon from '@mui/icons-material/PersonPinCircleTwoTone';
import { GoogleMap, Marker } from "@react-google-maps/api";

const center = {
  lat: 51.0233064354121,
  lng: -114.02369425973428,
};

export default function MapComponent() {
  // const [map, setMap] = useState(null);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap >
  );
}
