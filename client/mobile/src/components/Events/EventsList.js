import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text, Icon, Image, ListItem, Button, Avatar} from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';

const EventsList = ({event}) => {
  const user = {id: 1};

  const IMAGE_URL = event.image;
  return (
    <View style={styles.container}>
      <ListItem.Swipeable
        Component={TouchableScale}
        friction={90} //
        tension={100} // Touchable Scale stuff
        activeScale={0.95} //
        leftContent={reset => (
          <Button
            title="Info"
            onPress={() => reset()}
            icon={{name: 'info', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
          />
        )}
        rightContent={reset => (
          <Button
            title="Delete"
            onPress={() => reset()}
            icon={{name: 'delete', color: 'white'}}
            buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
          />
        )}>
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
      </ListItem.Swipeable>
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
});
