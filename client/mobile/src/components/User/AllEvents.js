import React from 'react';
import {ScrollView} from 'react-native';
import {upcomingEvents} from '../../helpers/event_selectors';
import useAppData from '../../hooks/useAppData';
import DisplayEvents from '../Events/DisplayEvents';

const AllEvents = ({route, navigation}) => {
  const {eventsData, joinedEvents, usersData, user, categoriesData} =
    useAppData();

  console.log(user.name);

  const allevents = upcomingEvents(eventsData);

  return (
    <ScrollView>
      <DisplayEvents
        eventsArr={allevents}
        usersData={usersData}
        joinedEvents={joinedEvents}
        categoriesData={categoriesData}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default AllEvents;
