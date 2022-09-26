import {Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Herobanner = () => {
  return (
    <>
      <Text style={styles.title}>Come and Join Us!</Text>
      <Image
        style={styles.bannerImage}
        source={require('../images/running.png')}
      />
      <Text style={styles.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis
        sollicitudin enim eu dapibus. Donec efficitur, eros lobortis tristique
        ornare, tellus tellus venenatis neque, non cursus ligula sem sed ipsum.
        Phasellus efficitur purus vitae auctor pulvinar. Donec erat nunc,
        pellentesque nec aliquet sit amet, facilisis at sapien. Quisque commodo
        maximus metus a feugiat. Nullam turpis dolor, fringilla nec neque a,
        pellentesque varius odio. Pellentesque sit amet porttitor lacus, non
        vulputate enim. Pellentesque sed elementum diam, at egestas mi. Nunc sit
        amet metus vel massa molestie egestas. Morbi non massa gravida, euismod
        ex ac, vestibulum nibh. Nulla lobortis, lacus et congue sagittis, sem
        risus ultricies justo, quis bibendum risus augue et est. Nunc
        consectetur, neque ut vehicula venenatis, eros lorem congue ipsum, non
        tincidunt tellus diam vel dui. Suspendisse tempus pharetra nisl, non
        eleifend ante tempus sed. Aliquam erat volutpat. Etiam vitae ultrices
        risus, eget aliquam ex. Phasellus odio nunc, laoreet non accumsan sit
        amet, maximus at justo.{' '}
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
