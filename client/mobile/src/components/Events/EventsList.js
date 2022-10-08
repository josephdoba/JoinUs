import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Card, Text, Badge, Icon, Image, ListItem, Avatar} from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';

const EventsList = ({event}) => {
  const IMAGE_URL = event.image;
  return (
    <View key={event.id} style={styles.container}>
      <ListItem
        Component={TouchableScale}
        friction={90} //
        tension={100} // Touchable Scale stuff
        activeScale={0.95} //
      >
        <ListItem.Content style={styles.title}>
          <ListItem.Title>{event.name}</ListItem.Title>
          <View style={styles.subtitleView}>
            <Image
              source={{
                uri: IMAGE_URL,
              }}
              style={styles.image}
            />
            <Text style={styles.ratingText}>{event.description}</Text>
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default EventsList;

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  image: {
    height: 100,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
    width: 250,
  },
  container: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  // fonts: {
  //   marginBottom: 8,
  // },
  // user: {
  //   flexDirection: 'row',
  //   marginBottom: 6,
  // },
  // image: {
  //   width: 20,
  //   height: 20,
  //   marginRight: 10,
  // },
  // name: {
  //   fontSize: 16,
  //   marginTop: 5,
  // },
  // buttonContainer: {
  //   flex: 1,
  // },
});
