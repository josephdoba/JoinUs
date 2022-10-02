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
import { formatTime } from "../../helpers/helpers";

export default function EventMapDetails(props) {
  const { start_time, end_time, onClick } = props;
  // const ListItemText = styled("ListItemText")(({ theme }) => ({
  //   listItemText:{
  //     fontSize:'10px',//Insert your required size
  //   }
  // }));

  return (
    <List sx={{ width: "100%", maxWidth: "100%", display: "flex" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar onClick={onClick}>
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
          primary={formatTime(start_time, end_time)}
        />
      </ListItem>
    </List>
  );
}
