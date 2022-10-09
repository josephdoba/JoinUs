import { useEffect, useState } from "react";
import { fetchAPI } from "../api";
import useSharedEvent from "./useSharedEvent";
import useSharedReload from "./useSharedReload";
import useSharedUser from "./useSharedUser";

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events

  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events
  const [comments, setComments] = useState([]);

  const { setUser } = useSharedUser();
  const { setEvent } = useSharedEvent();
  const { reload } = useSharedReload();

  useEffect(() => {
    Promise.all([
      fetchAPI("events"),
      fetchAPI("events/categories"),
      fetchAPI("users"),
      fetchAPI("users/user_events"),
      fetchAPI("comments"),
    ])
      .then((all) => {
        setEventsData((prev) => [...all[0].data]);
        setCategoriesData((prev) => [...all[1].data]);
        setUsersData((prev) => [...all[2].data]);
        setJoinedEvents((prev) => [...all[3].data]);
        setComments((prev) => [...all[4].data]);
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

  const findEventByID = (id, eventsData) => {
    const event = eventsData.find((event) => event.id === id);
    console.log(`event name in findEvent func: ${event.name}`);
    setEvent({
      id: event.id,
      name: event.name,
      image: event.image,
      description: event.description,
      size_limit: event.size_limit,
      owner_id: event.owner_id,
      category: event.category,
      lat: event.lat,
      lng: event.lng,
      start_time: event.start_time,
      end_time: event.end_time,
    });
  };

  return {
    eventsData,
    categoriesData,
    usersData,
    joinedEvents,
    login,
    logout,
    comments,
    findEventByID,
  };
}
