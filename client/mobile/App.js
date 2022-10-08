/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserScreen from './src/components/User';
import HomeScreen from './src/components/Home';
import EventScreen from './src/components/Event';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import useAppData from './src/hooks/useAppData';

import {ThemeProvider, createTheme} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// React Native Element Theme
const theme = createTheme({
  lightColors: {
    primary: '#94B49F',
    secondary: '#B2A4FF ',
    success: '#4db6ac',
    background: '#FBFBFF',
  },
  darkColors: {
    primary: '#00ADB5',
    secondary: '#E94560',
    background: '#222831',
  },
  components: {
    Button: {
      color: 'rgba(111, 202, 186, 1)',
    },
  },
});

// passing additional props to a screne https://reactnavigation.org/docs/hello-react-navigation

const headerOptions = {
  headerStyle: {
    backgroundColor: '#f9fbe7',
  },
  headerTintColor: '#222831',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const UserStack = createNativeStackNavigator();
const App = () => {
  const {eventsData, usersData, user, setUser} = useAppData();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <ThemeProvider theme={theme}>
          {/* <NavBar /> */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={headerOptions}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Join Us!'}}
              setUser={setUser}
              user={user}
            />
            <Stack.Screen
              name="User"
              component={UserScreen}
              options={({route, navigation}) => ({
                title: route.params.userId,
              })}
              eventsData={eventsData}
            />
            <Stack.Screen name="Event" component={EventScreen} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>

    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <StatusBar />
    //     <Tab.Navigator screenOptions={{headerShown: false}}>
    //       <Tab.Screen name="Public">
    //         {() => {
    //           <HomeStack.Navigator>
    //             <HomeStack.Screen name="JoinUs!" component={HomeScreen} />
    //             <HomeStack.Screen name="LogIn" component={LoginScreen} />
    //           </HomeStack.Navigator>;
    //         }}
    //       </Tab.Screen>

    //       <Tab.Screen name="LoggedIn">
    //         {() => (
    //           <UserStack.Navigator>
    //             <UserStack.Screen name="User" component={UserScreen} />
    //             <UserStack.Screen name="Event" component={EventScreen} />
    //           </UserStack.Navigator>
    //         )}
    //       </Tab.Screen>
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
