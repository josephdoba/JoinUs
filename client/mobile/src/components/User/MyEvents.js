import {Button, Text} from '@rneui/base';
import React from 'react';
import {ScrollView} from 'react-native';
import useAppData from '../../hooks/useAppData';
import DisplayEvents from '../Events/DisplayEvents';
import {pastEvents} from '../../helpers/event_selectors';

const MyEvents = ({navigation}) => {
  return (
    <ScrollView>
      <Text>My Created Events </Text>
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

export default MyEvents;
