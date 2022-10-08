import {ButtonGroup} from '@rneui/base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Herobanner from './Herobanner';
import HowTo from './HowTo';
import useAppData from '../../hooks/useAppData';
import LoginForm from './Login';

const HomeScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [userID, setUserID] = useState('');
  const {fetchUser} = useAppData();

  const handleLogin = e => {
    e.preventDefault();
    const user = fetchUser(userID);

    setUserID('');
    toggleOverlay();
    navigation.navigate('Profile', {user});
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleSelect = value => {
    setSelectedIndex(value);
    if (value === 1) {
      toggleOverlay();
    }
    if (value === 0) {
      navigation.navigate('MyEvents');
    }
  };

  return (
    <ScrollView styles={styles.sectionContainer}>
      <Herobanner />
      <HowTo />

      <ButtonGroup
        buttons={['Sign Up', 'Log In']}
        selectedIndex={selectedIndex}
        buttonStyle={styles.button}
        selectedButtonStyle={styles.selected}
        onPress={value => {
          handleSelect(value);
        }}
        onPressOut={value => {
          setSelectedIndex(null);
        }}
        containerStyle={styles.container}
      />
      <LoginForm
        toggleOverlay={toggleOverlay}
        visible={visible}
        setUserID={setUserID}
        handleLogin={handleLogin}
      />
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
  selected: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    // borderRadius: 5,
  },
  button: {
    backgroundColor: '#F9CF93',
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
