import { useEffect, useState } from "react";
import { fetchAPI, addData } from "../api";
import { reactLocalStorage } from "reactjs-localstorage";

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events
  const [user, setUser] = useState({ id: null, name: null, picture: null });
  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events
  const [reload, setReload] = useState(0);

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
  }, [reload]);

  const login = (userID) => {
    fetchAPI(`user/${userID}`)
      .then((data) => {
        setUser((prev) => JSON.stringify(data.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setUser({});
    reactLocalStorage.remove("currentUser");
  };

  return {
    eventsData,
    categoriesData,
    usersData,
    joinedEvents,
    setReload,
    reload,
    login,
    logout,
    user,
    setUser,
  };
}
