import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React from 'react';

const UserScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Go To Event"
        onPress={() => navigation.navigate('Event')}
      />
    </View>
  );
};

export default UserScreen;
