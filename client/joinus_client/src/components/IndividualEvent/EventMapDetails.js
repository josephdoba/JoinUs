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

export default function EventMapDetails() {
  // const ListItemText = styled("ListItemText")(({ theme }) => ({
  //   listItemText:{
  //     fontSize:'10px',//Insert your required size
  //   }
  // }));

  return (
    <Box flex={"30%"} p={2}>
      <Stack direction={"column"} spacing={2} justifyContent={"space-between"}>
        <EventMap />
        <List sx={{ width: "100%", maxWidth: "100%", display: "flex" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonPinCircleTwoToneIcon />
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
              secondaryTypographyProps={{ fontSize: "12px" }}
              primary="5:00 PM"
              secondary="September 21, 2022"
            />
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}
