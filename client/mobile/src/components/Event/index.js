import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const EventScreen = ({navigation, route}) => {
  const event = route.params.event;
  const attendeelist = route.params.attendeelist;
  const category = route.params.category;

  return (
    <View style={styles.container}>
      <Text>
        {event.name}, {event.description}, {attendeelist.length}
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
