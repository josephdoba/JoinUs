import { useEffect, useState } from "react";
import { fetchAPI } from "../api";

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api
  const [categoriesData, setCategoriesData] = useState([]); //api
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchAPI("events"),
      fetchAPI("events/categories"),
      fetchAPI("users"),
    ])
      .then((all) => {
        console.log(all[0].data);
        setEventsData((prev) => [...all[0].data]);
        setCategoriesData((prev) => [...all[1].data]);
        setUsersData((prev) => [...all[2].data]);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  }, []);

  return { eventsData, categoriesData, usersData };
}
