// import { addData } from "."; -- Wasn't working.
import axios from "axios";


const testDummyData = {
  "name": "coffee test",
  "image": "https://ptfc.co.uk/wp-content/uploads/2020/09/PTFC-this-is-a-test-event1090x630.jpg",
  "description": "Test description",
  "size_limit": 3,
  "owner_id": 1,
  "category": 1,
  "lat": 51.0233064354121,
  "lng": -114.02369425973428,
  "start_time": "2022-10-13 05:00:00",
  "end_time": "2022-10-13 16:00:00"
  };

export default function userEvents() {

  const userCreateEventSubmit = (req) => {
    console.log("api post request from userCreateEventSubmit", testDummyData);
    // https://masteringjs.io/tutorials/axios/put - It doesnt, it only turns a js object into JSON.
    axios.post("http://localhost:8080/api/events", testDummyData)
    .then(console.log("-------- data posting to db ------- "))
    .err(err => console.log(err));
    
    // axios.post(url[, data[, config]])
    console.log(req.body)
    return req.body
  }
  

  const userEditEventSubmit = () => {
    console.log("api post request for userEditEvent")
  }

  return { userCreateEventSubmit, userEditEventSubmit }
}