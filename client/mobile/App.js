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
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavBar from './src/components/NavBar';

import {ThemeProvider, createTheme} from '@rneui/themed';

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

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Join Us!'}}
            />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
          </Stack.Navigator>
        </ThemeProvider>
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
