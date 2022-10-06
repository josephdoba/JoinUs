import { useEffect, useState } from "react";
import { fetchAPI } from "../api";
import useSharedUser from "./useSharedUser";

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events

  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events
  const [reload, setReload] = useState(0);

  const { setUser } = useSharedUser();

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
        const user = data.data[0];
        console.log(user.name);
        setUser((prev) => ({
          id: user.id,
          name: user.name,
          age: user.age,
          gender: user.gender,
          picture: user.picture,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setUser({ id: null, name: null, age: null, gender: null, picture: null });
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
    useSharedUser,
  };
}
