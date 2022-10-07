import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Herobanner from './Herobanner';
import HowTo from './HowTo';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState({
    id: 1,
    name: 'Lawrence Orr',
    age: 24,
    gender: 'male',
    picture: 'https://cdn-icons-png.flaticon.com/128/4333/4333609.png',
  });

  return (
    <ScrollView styles={styles.sectionContainer}>
      <Herobanner />
      <HowTo />
      <Button
        title="Log in"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={elementStyle.login}
        titleStyle={elementStyle.title}
        containerStyle={elementStyle.container}
        onPress={() => navigation.navigate('User', {name: 'Carmen'})}
      />
      <Button
        title="Sign up!"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={elementStyle.signup}
        titleStyle={elementStyle.title}
        containerStyle={elementStyle.container}
        onPress={() => console.log('aye')}
      />
    </ScrollView>
  );
};

const elementStyle = {
  login: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderRadius: 5,
  },
  signup: {
    backgroundColor: '#F9CF93',
    borderRadius: 5,
  },
  title: {fontWeight: 'bold', fontSize: 23},
  container: {
    marginHorizontal: 50,
    height: 50,
    width: 200,
    marginVertical: 10,
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
