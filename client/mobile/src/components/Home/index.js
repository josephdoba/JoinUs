import {Button, ButtonGroup} from '@rneui/base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Herobanner from './Herobanner';
import HowTo from './HowTo';

import useAppData from '../../hooks/useAppData';

const HomeScreen = ({navigation}) => {
  const {usersData} = useAppData();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [user, setUser] = useState({
    id: null,
    name: null,
    age: null,
    gender: null,
    picture: null,
  });
  console.log(user);

  const handleSelect = async value => {
    setSelectedIndex(value);
    if (value === 1) {
      await navigation.navigate('User', {name: 'Carmen'});
    }
  };

  return (
    <ScrollView styles={styles.sectionContainer}>
      <Herobanner />
      <HowTo />

      <ButtonGroup
        buttons={['Sign Up', 'Log In']}
        selectedIndex={selectedIndex}
        buttonStyle={elementStyle.signup}
        selectedButtonStyle={elementStyle.login}
        onPress={value => {
          handleSelect(value);
        }}
        onPressOut={value => {
          setSelectedIndex(null);
        }}
        containerStyle={elementStyle.container}
      />
    </ScrollView>
  );
};

const elementStyle = {
  login: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    // borderRadius: 5,
  },
  signup: {
    backgroundColor: '#F9CF93',
    // borderRadius: 5,
  },
  title: {fontWeight: 'bold', fontSize: 23},
  container: {
    marginHorizontal: 50,
    height: 50,
    marginVertical: 10,
    marginBottom: 50,
    marginTop: 20,
  },
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FBFBFF',
  },
  text: {
    fontSize: 42,
  },
});

export default HomeScreen;
