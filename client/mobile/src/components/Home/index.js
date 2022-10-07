import {Button} from '@rneui/base';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Herobanner from './Herobanner';
import HowTo from './HowTo';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView styles={styles.scrollView}>
      <Herobanner />
      <HowTo />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('User', {name: 'Carmen'})}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default HomeScreen;
