import {Button, Text} from '@rneui/base';
import React from 'react';
import {ScrollView} from 'react-native';
import useAppData from '../../hooks/useAppData';
import DisplayEvents from '../Events/DisplayEvents';

const MyEvents = ({navigation}) => {
  const {eventsData, joinedEvents, usersData, categoriesData} = useAppData();
  return (
    <ScrollView>
      <Text>My Created Events </Text>
      <DisplayEvents
        eventsArr={eventsData}
        usersData={usersData}
        joinedEvents={joinedEvents}
        categoriesData={categoriesData}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default MyEvents;
