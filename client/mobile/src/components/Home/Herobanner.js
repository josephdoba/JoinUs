import {Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Herobanner = () => {
  return (
    <>
      <Text style={styles.title}>Come and Join Us!</Text>
      <Image
        style={styles.bannerImage}
        source={require('../../images/running.png')}
      />
      <Text style={styles.body}>
        Have you ever been out in public and wanted to experience something new
        with someone new? Tired of making plans weeks in advance only to have
        them cancel at the last minute? Do you miss the spontaneity of your
        childhood?! Well look no further! Our app JoinUs! is a short-term meetup
        app that allows users to arrange short-term, spontaneous meetups with
        other like minded individuals. No commitment required!
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
  bodytext: {
    color: 'dimgray',
  },
  bannerImage: {
    height: 350,
    width: 350,
  },
});
