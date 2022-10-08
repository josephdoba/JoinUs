import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import React from 'react';
import UserScreen from './User';
import EventScreen from './Event';
// for creating bottom nav https://reactnavigation.org/docs/bottom-tab-navigator/
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator name="User">
      <Tab.Screen name="AllEvents" component={AllEventsScreen} />
      <Tab.Screen name="MyEvents" component={CreatedEventsScreen} />
      <Tab.Screen name="JoinedEvents" component={JoinedEventScreen} />
      <Tab.Screen name="EventsHistory" component={HistoryScreen} />
    </Tab.Navigator>
  );
};
