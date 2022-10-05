import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const EventScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Event Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EventScreen;
