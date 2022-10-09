import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const EventScreen = ({navigation, route}) => {
  const event = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{event.name}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EventScreen;
