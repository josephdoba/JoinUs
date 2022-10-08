import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React from 'react';

const MyEventsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Events Created by the user </Text>
      <Button
        title="Go To Event"
        onPress={() => navigation.navigate('Event')}
      />
      <Button
        title="To My Events"
        onPress={() => navigation.push('MyEvents')}
      />
    </View>
  );
};

export default MyEventsScreen;
