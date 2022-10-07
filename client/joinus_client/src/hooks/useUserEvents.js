import axios from "axios";
import { useState } from "react";
import cleanEvent from "./cleanEvent";

export default function useUserEvents() {
  const { cleanCreateEvent, cleanEditEvent } = cleanEvent();

  const userCreateEventSubmit = (event) => {
    cleanCreateEvent(event)
    axios
      .post("http://localhost:8080/api/events", event)
      .then(() => {
        console.log("post complete!")
      })
      .catch((err) => {
        console.log(err);
      });
};

  const userEditEventSubmit = (event) => {
    cleanEditEvent(event)
    console.log("api post request for userEditEvent");
    axios
        .post("http://localhost:8080/api/events", event)
        .then(() => {
          console.log(event);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const userLeaveEvent = (event) => {
    axios
      .post("http://localhost:8080/event/leave", event)
      .then(() => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userJoinEvent = (event) => {
    axios
      .post("http://localhost:8080/event/join", event)
      .then(() => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userDeleteEvent = (event) => {
    axios
      .post("http://localhost:8080/event/delete", event)
      .then(() => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userAddComment = (event) => {
    axios
      .post('http://localhost:8080/api/comments/add', event)
      .then(() => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userDeleteComment = (event) => {
    axios
      .post('http://localhost:8080/api/comments/delete', event)
      .then(() => {
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    userCreateEventSubmit,
    userEditEventSubmit,
    userLeaveEvent,
    userJoinEvent,
    userDeleteEvent,
    userAddComment,
    userDeleteComment
  };
}
