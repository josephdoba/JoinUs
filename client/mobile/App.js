/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserScreen from './src/components/User';
import HomeScreen from './src/components/Home';
import EventScreen from './src/components/Event';
import LoginScreen from './src/components/User/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider, createTheme} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const theme = createTheme({
  lightColors: {
    primary: '#3EB489',
    secondary: '#00bfa5',
    success: '#4db6ac',
    background: '#FBFBFF',
  },
  darkColors: {
    primary: '#000',
  },
  components: {
    Button: {
      color: 'purple',
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
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Public">
            {() => {
              <HomeStack.Navigator>
                <HomeStack.Screen name="JoinUs!" component={HomeScreen} />
                <HomeStack.Screen name="Log In" component={LoginScreen} />
              </HomeStack.Navigator>;
            }}
          </Tab.Screen>

          <Tab.Screen name="LoggedIn">
            {() => (
              <UserStack.Navigator>
                <UserStack.Screen name="User" component={UserScreen} />
                <UserStack.Screen name="Event" component={EventScreen} />
              </UserStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
