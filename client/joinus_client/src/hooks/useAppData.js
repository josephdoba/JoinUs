import { useEffect, useState } from "react";
import { fetchAPI, addData } from "../api";

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api
  const [categoriesData, setCategoriesData] = useState([]); //api
  const [usersData, setUsersData] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchAPI("events"),
      fetchAPI("events/categories"),
      fetchAPI("users"),
      fetchAPI("users/user_events"),
    ])
      .then((all) => {
        console.log(all[2].data);
        setEventsData((prev) => [...all[0].data]);
        setCategoriesData((prev) => [...all[1].data]);
        setUsersData((prev) => [...all[2].data]);
        setUserEvents(all[3].data);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  }, []);

  const joinEvent = (id) => {
    addData(`users/user_events/${id}`).then();
  };

  return { eventsData, categoriesData, usersData, userEvents };
}
