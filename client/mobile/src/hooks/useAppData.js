import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../api';

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events
  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    Promise.all([
      fetchAPI('events'),
      fetchAPI('events/categories'),
      fetchAPI('users'),
      fetchAPI('users/user_events'),
      fetchAPI('comments'),
    ])
      .then(all => {
        setEventsData(prev => [...all[0].data]);
        setCategoriesData(prev => [...all[1].data]);
        setUsersData(prev => [...all[2].data]);
        setJoinedEvents(prev => [...all[3].data]);
        setComments(prev => [...all[4].data]);
      })
      .catch(err => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });
  }, []);

  const fetchUser = userID => {
    fetchAPI(`user/${userID}`).then(data => {
      const user = data.data[0];
      console.log(user.name);
      setUser(prev => ({
        id: user.id,
        name: user.name,
        age: user.age,
        gender: user.gender,
        picture: user.picture,
      }));
    });
  };

  const logout = () => {
    setUser({id: null, name: null, age: null, gender: null, picture: null});
  };

  return {
    eventsData,
    categoriesData,
    usersData,
    joinedEvents,
    comments,
    fetchUser,
    setUser,
    user,
    logout,
  };
}
