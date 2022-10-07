import {Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Herobanner = () => {
  return (
    <>
      <Text style={styles.title}>Social without the schedule.</Text>
      <Image
        style={styles.bannerImage}
        source={require('../../images/running.png')}
      />
      <Text style={styles.subtitle}>
        Make new friends with shared interests using local short-term meetups.
      </Text>
    </>
  );
};

export default Herobanner;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'dimgray',
  },
  subtitle: {
    fontSize: 25,
    color: 'dimgray',
  },
  bannerImage: {
    height: 350,
    width: 350,
  },
  logo: {
    height: 100,
    width: 100,
  },
});
