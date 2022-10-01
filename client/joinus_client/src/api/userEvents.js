import axios from "axios"

export default function userEvents() {

  // will be refactoring this into their own files.
  const userCreateEventSubmit = () => {
    console.log("api post request for userCreateEventSubmit");
    axios.get("http://localhost:8080/api/events")
    .then(console.log())
    .err(err => console.log(err));
    
    // axios.post(url[, data[, config]])
  }
  

  const userEditEventSubmit = () => {
    console.log("api post request for userEditEvent")
  }

  return { userCreateEventSubmit, userEditEventSubmit }
}