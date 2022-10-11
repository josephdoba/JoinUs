import {Button, Text} from '@rneui/base';
import React from 'react';
import {ScrollView} from 'react-native';
import useAppData from '../../hooks/useAppData';
import DisplayEvents from '../Events/DisplayEvents';
import {findJoinedEvents} from '../../helpers/event_selectors';

const InterestedEvents = ({navigation}) => {
  const {eventsData, joinedEvents, user, usersData, categoriesData} =
    useAppData();

  const interestedEvents = findJoinedEvents();
  return (
    <ScrollView>
      <Text>My Interested Events </Text>
      <DisplayEvents
        eventsArr={interestedEvents}
        usersData={usersData}
        joinedEvents={joinedEvents}
        categoriesData={categoriesData}
        navigation={navigation}
      />

      <Button title="To My Profile" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

export default InterestedEvents;
