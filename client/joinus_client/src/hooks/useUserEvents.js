import axios from "axios";
import useSharedReload from "./useSharedReload";
import { useState } from "react";
import { postData } from "../api/index";

export default function useUserEvents() {
  const { reload, setReload } = useSharedReload();

  const userCreateEventSubmit = (event) => {
    console.log("api post request for userCreateEvent");
    axios
      .post("http://localhost:8080/api/events", event)
      .then((res) => {
        console.log("from useUserEvents res:")
        console.log(res);
        setReload(reload + 1);
        axios.post("http://localhost:8080/events/join", {
          events_id: res.data[0].id,
          user_id: res.data[0].owner_id,
          user_attendance: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
    let answer = prompt("Are you sure you want to delete? type yes or no");
    if (answer === "yes" || answer === "Yes") {
      postData(`events/delete`, dataObj)
        .then(() => {
          setReload(reload + 1);
          console.log(dataObj);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    postData("api/comments/delete", dataObj)
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
