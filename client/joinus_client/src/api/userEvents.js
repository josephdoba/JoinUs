import axios from "axios"

export default function userEvents() {
  console.log("onClick from userCreateEvent from userEvents.js")
  // make calls into the data base in this file.

    
  // will be refactoring this into their own files.
  const userCreateEventSubmit = () => {
    console.log("api post request for userCreateEvent");
  };
  

  const userEditEventSubmit = () => {
    console.log("api post request for userEditEvent")
  }

  return { userCreateEventSubmit, userEditEventSubmit }
}