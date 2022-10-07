import {ButtonGroup} from '@rneui/base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Herobanner from './Herobanner';
import HowTo from './HowTo';

import useAppData from '../../hooks/useAppData';
import LoginScreen from '../User/Login';

const HomeScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleSelect = value => {
    setSelectedIndex(value);
    if (value === 1) {
      toggleOverlay();
    }
  };

  return (
    <ScrollView styles={styles.sectionContainer}>
      <Herobanner />
      <HowTo />

      <ButtonGroup
        buttons={['Sign Up', 'Log In']}
        selectedIndex={selectedIndex}
        buttonStyle={styles.signup}
        selectedButtonStyle={styles.login}
        onPress={value => {
          handleSelect(value);
        }}
        onPressOut={value => {
          setSelectedIndex(null);
        }}
        containerStyle={styles.container}
      />
      <LoginScreen toggleOverlay={toggleOverlay} visible={visible} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FBFBFF',
  },
  text: {
    fontSize: 42,
  },
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
});

export default HomeScreen;
