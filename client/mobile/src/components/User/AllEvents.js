import React from 'react';
import {ScrollView} from 'react-native';

import {
  findEventAttendees,
  findCategoryByID,
} from '../../helpers/other_selectors';
import useAppData from '../../hooks/useAppData';
import EventsList from '../Events/EventsList';

const AllEvents = ({navigation}) => {
  const {eventsData, joinedEvents, usersData, categoriesData} = useAppData();

  const displayEvents = eventArr => {
    return eventArr.map(event => {
      const attendeelist = findEventAttendees(
        event.id,
        usersData,
        joinedEvents,
      );
      const category = findCategoryByID(event.category, categoriesData);

      return (
        <EventsList
          key={event.id}
          event={event}
          attendeelist={attendeelist}
          category={category}
        />
      );
    });
  };

  return <ScrollView>{displayEvents(eventsData)}</ScrollView>;
};

export default AllEvents;
