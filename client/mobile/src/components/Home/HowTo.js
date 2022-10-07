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
import {Card} from '@rneui/base';
import Herobanner from './Herobanner';

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

const Instructions = ({image, title, description}) => (
  <Card containerStyle={{}} wrapperStyle={{}}>
    <Image style={styles.imageSize} resizeMode="contain" source={image} />
    <Card.Title>{title}</Card.Title>
    <Text>{description}</Text>
  </Card>
);
const HowTo = () => {
  const renderInstruction = ({item}) => (
    <Instructions
      title={item.title}
      image={item.image}
      description={item.description}
    />
  );

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderInstruction}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default HowTo;

const styles = StyleSheet.create({
  imageSize: {
    height: 100,
    // width: 60,
    width: '100%',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cardView: {
    position: 'relative',
    alignItems: 'center',
  },
});
