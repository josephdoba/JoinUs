// import { addData } from "."; -- Wasn't working.
import axios from "axios";
import { useState } from "react";

// const testDummyData = {
//   "name": "coffee test",
//   "image": "https://ptfc.co.uk/wp-content/uploads/2020/09/PTFC-this-is-a-test-event1090x630.jpg",
//   "description": "Test description",
//   "size_limit": 3,
//   "owner_id": 1,
//   "category": 1,
//   "lat": 51.0233064354121,
//   "lng": -114.02369425973428,
//   "start_time": "2022-10-13 05:00:00",
//   "end_time": "2022-10-13 16:00:00"
//   };

export default function useUserEvents() {
  // const [myEvent, setMyEvent] = useState({
  //   eventName: "",
  //   eventImage: "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg",
  //   eventDescription: "Me and my partner are new in town, and invite you to join us over a coffee", // random coffee photo
  //   eventSizeLimit: 4,
  //   eventCategory: 1, // Food & Dining
  //   eventAddress: "", // Somehow needs to become lat & long fields... but for now, we can use these:
  //   lat: 51.0233064354121,
  //   lng: -114.02369425973428,
  //   start_time: "2022-10-13 05:00:00",
  //   end_time: "2022-10-13 17:00:00"
  //   });

  const userCreateEventSubmit = (event) => {
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

  const userEditEventSubmit = () => {
    console.log("api post request for userEditEvent")
  }

  return { userCreateEventSubmit, userEditEventSubmit }

}