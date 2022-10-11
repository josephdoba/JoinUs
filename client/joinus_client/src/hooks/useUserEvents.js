import axios from "axios";
import { useState } from "react";
import useSharedReload from "./useSharedReload";
import cleanEvent from "./cleanEvent";
import { postData } from "../api/index";

export default function useUserEvents() {
  const { cleanCreateEvent, cleanEditEvent } = cleanEvent();
  const { reload, setReload } = useSharedReload();

  const userCreateEventSubmit = (event) => {
    // cleanCreateEvent(event)
    console.log("api post request for userCreateEvent");
    axios
      .post("http://localhost:8080/api/events", event)
      .then(() => {
        console.log("post complete!");
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post("http://localhost:8080/events/join", event)
      .then(() => {
        console.log(event);
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
        console.log(dataObj);
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
