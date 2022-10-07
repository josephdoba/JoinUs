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
import {ListItem, Avatar} from '@rneui/base';

const DATA = [
  {
    id: 1,
    image: require('../../images/sign_up.png'),
    title: 'Join',
    description: 'Create an account and see what others around are doing!',
  },
  {
    id: 2,
    image: require('../../images/idea.png'),
    title: 'Create',
    description:
      'Think of something fun to do and make an event or join someone in theirs',
  },
  {
    id: 3,
    image: require('../../images/chat.png'),
    title: 'Chat',
    description:
      'Chat with others to make sure you get along and confirm your plans.',
  },
  {
    id: 4,
    image: require('../../images/meet.png'),
    title: 'Meet',
    description: 'Head out and do something new with a new friend.',
  },
];

const HowTo = () => {
  return DATA.map(item => {
    return (
      <ListItem key={item.id} style={styles.container}>
        <Avatar source={item.image} style={styles.imageSize} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  });
};

export default HowTo;

const styles = StyleSheet.create({
  imageSize: {
    height: 100,
    width: 100,
    marginBottom: 8,
  },
  container: {
    flex: 3,
    position: 'relative',
    alignItems: 'center',
  },
});
