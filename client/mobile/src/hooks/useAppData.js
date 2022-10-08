import React, {useState, useEffect} from 'react';
import {fetchAPI} from '../api';

export default function useAppData() {
  const [eventsData, setEventsData] = useState([]); //api for all events
  const [categoriesData, setCategoriesData] = useState([]); //api for all categories
  const [usersData, setUsersData] = useState([]); // api for all users
  const [joinedEvents, setJoinedEvents] = useState([]); //api for all joined events
  const [comments, setComments] = useState([]);

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

  const fetchUser = async userID => {
    await fetchAPI(`user/${userID}`);
  };

  return {
    eventsData,
    categoriesData,
    usersData,
    joinedEvents,
    comments,
    fetchUser,
  };
}
