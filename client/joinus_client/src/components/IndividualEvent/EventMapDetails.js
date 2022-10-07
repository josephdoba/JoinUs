import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { formatTime } from "../../helpers/helpers";
import Address from "./Address";
import useSharedEvent from "../../hooks/useSharedEvent";

export default function EventMapDetails(props) {
  const { handleClick } = props;
  const { event } = useSharedEvent();
  // const ListItemText = styled("ListItemText")(({ theme }) => ({
  //   listItemText:{
  //     fontSize:'10px',//Insert your required size
  //   }
  // }));

  return (
    <List sx={{ width: "100%", maxWidth: "100%", display: "flex" }}>
      <ListItem>
        <ListItemAvatar>
          <IconButton fontSize="medium" onClick={handleClick}>
            <PersonPinCircleTwoToneIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ fontSize: "14px" }}
          primary={<Address lat={event.lat} lng={event.lng} />}
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
          primary={formatTime(event.start_time, event.end_time)}
        />
      </ListItem>
    </List>
  );
}
