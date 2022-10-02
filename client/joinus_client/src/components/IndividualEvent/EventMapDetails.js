import { useState } from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EventMap from "./EventMap";
import { formatTime } from "../../helpers/helpers";
import { GoogleMap, Marker, MarkerF } from "@react-google-maps/api";

export default function EventMapDetails(props) {
  const { start_time, end_time, lat, lng } = props;
  const [map, setMap] = useState(null);
  // const ListItemText = styled("ListItemText")(({ theme }) => ({
  //   listItemText:{
  //     fontSize:'10px',//Insert your required size
  //   }
  // }));

  return (
    <Box flex={"30%"} p={2}>
      <Stack direction={"column"} spacing={2} justifyContent={"space-between"}>
        <EventMap lat={lat} lng={lng} map={map} setMap={setMap} />
        <List sx={{ width: "100%", maxWidth: "100%", display: "flex" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {/* <PersonPinCircleTwoToneIcon onClick{() > m }/> */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{ fontSize: "14px" }}
              secondaryTypographyProps={{ fontSize: "12px" }}
              primary="Montréal"
              secondary="55 rue Ontario Est"
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccessTimeFilledIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{ fontSize: "14px" }}
              primary={formatTime(start_time, end_time)}
            />
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}
