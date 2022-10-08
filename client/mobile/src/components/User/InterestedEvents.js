import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React from 'react';

const InterestedScreen = ({navigation}) => {
  return (
    <View>
      <Text>All of the Events go here</Text>
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

export default InterestedScreen;
