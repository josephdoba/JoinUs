import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MyEvents from './User/MyEvents';
import AllEvents from './User/AllEvents';
import InterestedEvents from './User/InterestedEvents';
import HistoryScreen from './User/EventHistory';
// for creating bottom nav https://reactnavigation.org/docs/bottom-tab-navigator/
const Tab = createBottomTabNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#fdf3e4',
  },
  headerTintColor: '#222831',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const EventTabs = () => {
  return (
    <Tab.Navigator
      name="User"
      // screenOptions={headerOptions}
      initialRouteName="All"
      backBehaviour="initialRoute"
      headerShown={false}>
      <Tab.Screen name="All" component={AllEvents} />
      <Tab.Screen name="My Events" component={MyEvents} />
      <Tab.Screen name="Interested" component={InterestedEvents} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default EventTabs;
