import EventsList from './EventsList';
import React from 'react';
import {
  findCategoryByID,
  findEventAttendees,
} from '../../helpers/other_selectors';

// maps the events array that is passed in.

const DisplayEvents = ({
  eventsArr,
  usersData,
  joinedEvents,
  categoriesData,
  navigation,
}) => {
  return eventsArr.map(event => {
    const attendeelist = findEventAttendees(event.id, usersData, joinedEvents);
    const category = findCategoryByID(event.category, categoriesData);
    return (
      <EventsList
        key={event.id}
        event={event}
        attendeelist={attendeelist}
        category={category}
        navigation={navigation}
      />
    );
  });
};

export default DisplayEvents;
