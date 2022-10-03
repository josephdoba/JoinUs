/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserScreen from './src/components/User';
import HomeScreen from './src/components/Home';
import EventScreen from './src/components/Event';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './src/components/Header';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

// passing additional props to a screne https://reactnavigation.org/docs/hello-react-navigation

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <SafeAreaView> */}
        {/* <StatusBar /> */}
        {/* <ScrollView> */}
        <Header />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Join Us!'}}
          />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="Event" component={EventScreen} />
        </Stack.Navigator>
        {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
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
