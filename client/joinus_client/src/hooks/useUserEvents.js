import axios from "axios";
import useSharedReload from "./useSharedReload";
import { postData } from "../api/index";
import { useNavigate } from "react-router-dom";

export default function useUserEvents() {
  const { reload, setReload } = useSharedReload();
  const navigate = useNavigate();
  const userCreateEventSubmit = (eventObj) => {
    console.log("api post request for userCreateEvent");
    postData("events", eventObj)
      .then(() => {
        console.log(eventObj);
      })
      .catch((err) => {
        console.log(err);
      });
    setReload(reload + 1);
  };

  const userEditEventSubmit = (event) => {
    console.log("api post request for userEditEvent");
    axios
      .put("http://localhost:8080/api/events", event)
      .then(() => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const leaveEvent = (dataObj) => {
    postData("events/leave", dataObj)
      .then(() => {
        console.log(dataObj);
        setReload(reload + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const joinEvent = (attendeelist, size_limit, dataObj) => {
    postData("events/join", dataObj)
      .then(() => {
        setReload(reload + 1);
        console.log("from regular join: ", dataObj);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEvent = (dataObj) => {
    postData(`events/delete`, dataObj)
      .then(() => {
        setReload(reload + 1);
        console.log(dataObj);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/user");
  };

  const userAddComment = (event) => {
    axios
      .post("http://localhost:8080/api/comments/add", event)
      .then(() => {
        console.log(event);
        setReload(reload + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (dataObj) => {
    postData("comments/delete", dataObj)
      .then(() => {
        setReload(reload + 1);
        console.log(dataObj);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    userCreateEventSubmit,
    userEditEventSubmit,
    leaveEvent,
    joinEvent,
    deleteEvent,
    userAddComment,
    deleteComment,
  };
}
