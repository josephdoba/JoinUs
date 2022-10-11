import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../api';

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events
  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events

  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([
      fetchAPI('events'),
      fetchAPI('events/categories'),
      fetchAPI('users'),
      fetchAPI('users/events'),
    ])
      .then(all => {
        setEventsData(prev => [...all[0].data]);
        setCategoriesData(prev => [...all[1].data]);
        setUsersData(prev => [...all[2].data]);
        setJoinedEvents(prev => [...all[3].data]);
      })
      .catch(err => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  }, []);

  const fetchUser = userID => {
    return fetchAPI(`users/${userID}`)
      .then(data => {
        const u = data.data[0];
        setUser({
          id: u.id,
          name: u.name,
          age: u.age,
          gender: u.gender,
          picture: u.picture,
        });
        return u;
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(`user in useAppData ${JSON.stringify(user)}`);

  return {
    eventsData,
    categoriesData,
    usersData,
    joinedEvents,
    fetchUser,
    setUser,
    user,
  };
}
