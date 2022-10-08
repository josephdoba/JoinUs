import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Card, Text, Button, Icon} from '@rneui/themed';
import {
  findEventAttendees,
  findCategoryByID,
} from '../../helpers/other_selectors';
import useAppData from '../../hooks/useAppData';

const AllEventsScreen = ({navigation}) => {
  const {eventsData, joinedEvents, usersData, categoriesData} = useAppData();

  const displayEvents = eventArr => {
    return eventArr.map(event => {
      const attendeelist = findEventAttendees(
        event.id,
        usersData,
        joinedEvents,
      );
      const category = findCategoryByID(event.category, categoriesData);

      const IMAGE_URL = event.image;

      return (
        <View key={event.id} style={styles.container}>
          <Card>
            <Card.Title style={{flex: 2}}>{event.name}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{padding: 0, flex: 3}}
              source={{
                uri: IMAGE_URL,
              }}
            />
            <View style={{flex: 1}}>
              <Text style={{marginBottom: 10}}>{event.description}</Text>
              <Icon name="read-more" color="black" type="material" />
              <Icon
                name="emoticon-happy-outline"
                color="black"
                type="material-community"
              />
            </View>
          </Card>
        </View>
      );
    });
  };

  return <ScrollView>{displayEvents(eventsData)}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default AllEventsScreen;
