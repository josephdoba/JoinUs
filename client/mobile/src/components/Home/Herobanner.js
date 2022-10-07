import {Text, StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Herobanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social without the schedule.</Text>
      <Image
        style={styles.bannerImage}
        source={require('../../images/running.png')}
      />
      <Text style={styles.subtitle}>
        Make new friends with shared interests using local short-term meetups.
      </Text>
    </View>
  );
};

export default Herobanner;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'dimgray',
  },
  subtitle: {
    fontSize: 20,
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
