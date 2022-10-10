import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React from 'react';

const MyEvents = ({navigation}) => {
  return (
    <View>
      <Text>Events Created by the user </Text>
      <Button
        title="Go To Event"
        onPress={() => navigation.navigate('Event')}
      />
      <Button
        title="To All Events"
        onPress={() => navigation.navigate('AllEvents')}
      />
    </View>
  );
};

export default MyEvents;
