// import { addData } from "."; -- Wasn't working.
import axios from "axios";
import { useState } from "react";
import { cleanCreateEvent, cleanEditEvent } from "./cleanEvent";

export default function useUserEvents() {

  const userCreateEventSubmit = (event) => {
    cleanCreateEvent()
    // axios.post(url[, data[, config]]) <- syntax
    console.log("api post request from userCreateEventSubmit", event);
    // axios.post("http://localhost:8080/api/events", testDummyData)
    axios.post("http://localhost:8080/api/events", event)
    .then(() => {
      console.log(event)
    })
    .catch((err) => {console.log(err)});

    // both from the same call from the user
    /*
    Promise.all([
      axios.post("the endpoint for the join table", owner_id), 
      axios.post("the endpoint for the join table", event_id),
    ])
    .err(err => console.log(err));
  }*/
}

  const userLeaveEvent = (event) => {
    axios.post('http://localhost:8080/api/leaveEvent', event)
    .then(() => {
      console.log(event)
    })
    .catch((err) => {console.log(err)})
  }

  const userJoinEvent = (event) => {
    axios.post('http://localhost:8080/api/joinEvent', event)
    .then(() => {
      console.log(event)
    })
    .catch((err) => {console.log(err)})
  }

  const userDeleteEvent = (event) => {
    axios.post('http://localhost:8080/api/deleteEvent', event)
    .then(() => {
      console.log(event)
    })
    .catch((err) => {console.log(err)})
  }

  const userEditEventSubmit = () => {
    console.log("api post request for userEditEvent")
  }

  return { userCreateEventSubmit, userEditEventSubmit, userLeaveEvent, userJoinEvent, userDeleteEvent }

}