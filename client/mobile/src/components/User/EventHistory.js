import {Button, Text} from '@rneui/base';
import React from 'react';
import {ScrollView} from 'react-native';
import useAppData from '../../hooks/useAppData';
import DisplayEvents from '../Events/DisplayEvents';
import {pastEvents} from '../../helpers/event_selectors';

const HistoryScreen = ({route, navigation}) => {
  const {eventsData, joinedEvents, usersData, categoriesData} = useAppData();

  const past = pastEvents(eventsData);
  return (
    <ScrollView>
      <DisplayEvents
        eventsArr={past}
        usersData={usersData}
        joinedEvents={joinedEvents}
        categoriesData={categoriesData}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HistoryScreen;
