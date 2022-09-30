import { useEffect, useState } from "react";
import { fetchAPI, addData } from "../api";

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events
  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events

  useEffect(() => {
    Promise.all([
      fetchAPI("events"),
      fetchAPI("events/categories"),
      fetchAPI("users"),
      fetchAPI("users/user_events"),
    ])
      .then((all) => {
        setEventsData((prev) => [...all[0].data]);
        setCategoriesData((prev) => [...all[1].data]);
        setUsersData((prev) => [...all[2].data]);
        setJoinedEvents((prev) => [...all[3].data]);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  }, []);

  // const joinEvent = (id) => {
  //   addData(`users/user_events/${id}`).then();
  // };

  return { eventsData, categoriesData, usersData, joinedEvents };
}
