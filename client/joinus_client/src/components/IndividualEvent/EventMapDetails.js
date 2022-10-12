import {
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
import { useState } from "react";
import TimePopover from "./TimePopover";

export default function EventMapDetails(props) {
  const { handleClick } = props;
  const { event } = useSharedEvent();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickTime = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseTime = () => {
    setAnchorEl(null);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <IconButton fontSize="32" onClick={handleClick}>
            <PersonPinCircleTwoToneIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ fontSize: "12px" }}
          primary={<Address lat={event.lat} lng={event.lng} />}
        />
      </ListItem>
      <ListItem>
        <IconButton fontSize="32" onClick={handleClickTime}>
          <AccessTimeFilledIcon />
        </IconButton>
        <ListItemText
          primaryTypographyProps={{ fontSize: "12px" }}
          primary={formatTime(event.start_time, event.end_time)}
        />
        <TimePopover
          handleCloseTime={handleCloseTime}
          anchorEl={anchorEl}
          start={event.start_time}
        />
      </ListItem>
    </List>
  );
}
