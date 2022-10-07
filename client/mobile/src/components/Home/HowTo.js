import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const INSTRUCTIONS = [
  {
    id: 1,
    image: (
      <Image
        style={styles.imageSize}
        source={require('../../images/join.png')}
      />
    ),
    alt: 'how to join',
    title: 'Join Us!',
    description: 'Create an account and see what others around are doing!',
  },
  {
    id: 2,
    image: (
      <Image
        style={styles.imageSize}
        source={require('../../images/idea.png')}
      />
    ),
    alt: 'create',
    title: 'Create',
    description:
      'Think of something fun to do and make an event or join someone in theirs',
  },
  {
    id: 3,
    image: (
      <Image
        style={styles.imageSize}
        source={require('../../images/chat.png')}
      />
    ),
    alt: 'Chat',
    title: 'Chat',
    description:
      'Chat with others to make sure you get along and confirm your plans.',
  },
  {
    id: 4,
    image: (
      <Image
        style={styles.imageSize}
        source={require('../../images/meet.png')}
      />
    ),
    alt: 'Meet',
    title: 'Meet',
    description: 'Head out and do something new with a new friend.',
  },
];
const HowTo = ({}) => {};

export default HowTo;

const styles = Stylesheet.create({
  imageSize: {
    height: 60,
    width: 60,
  },
});
