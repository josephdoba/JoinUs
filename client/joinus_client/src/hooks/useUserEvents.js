import axios from "axios";
import { useState } from "react";
import useSharedReload from "./useSharedReload";
import cleanEvent from "../api/cleanEvent";
import { postData } from "../api/index";

export default function useUserEvents() {
  const { cleanCreateEvent, cleanEditEvent } = cleanEvent();
  const { reload, setReload } = useSharedReload();
  const [error, setError] = useState(false);

  const userCreateEventSubmit = (event) => {
    cleanCreateEvent(event);
    axios
      .post("http://localhost:8080/api/events", event)
      .then(() => {
        console.log("post complete!");
      })
      .catch((err) => {
        console.log(err);
      });

    // both from the same call from the user
    /*
    Promise.all([
      axios.post("the endpoint for the join table", owner_id), 
      axios.post("the endpoint for the join table", event_id),
    ])
    .err(err => console.log(err));
  }*/
  };

  const userEditEventSubmit = (event) => {
    cleanEditEvent(event);
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

  const leaveEvent = (dataObj) => {
    postData("event/leave", dataObj)
      .then(() => {
        console.log(dataObj);
        setReload(reload + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const joinEvent = (attendeelist, size_limit, dataObj) => {
    if (attendeelist.length >= size_limit) {
      setError(true);
      return;
    }

    postData("event/join", dataObj)
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
      postData(`event/delete`, dataObj)
        .then(() => {
          console.log(dataObj);
          setReload(reload + 1);
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

  const deleteComment = (comment_id) => {
    postData("api/comments/delete", { comment_id })
      .then(() => {
        setReload(reload + 1);
        console.log({ comment_id });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // async function handleDeleteComment(e) {
  //   e.preventDefault();
  //   const dataObj = {
  //     comment_id: commentID,
  //   };
  //   await userDeleteComment(dataObj);
  //   setReload(reload + 1);
  // }

  // const userDeleteComment = (event) => {
  //   axios
  //     .post("http://localhost:8080/api/comments/delete", event)
  //     .then(() => {
  //       console.log(event);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return {
    userCreateEventSubmit,
    userEditEventSubmit,
    leaveEvent,
    joinEvent,
    deleteEvent,
    userAddComment,
    deleteComment,
    error,
    setError,
  };
}
