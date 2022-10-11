import {Text, StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Herobanner = () => {
  return (
    <View style={styles.sectionContainer}>
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
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fdf3e4',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'dimgray',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    color: 'dimgray',
    textAlign: 'center',
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
