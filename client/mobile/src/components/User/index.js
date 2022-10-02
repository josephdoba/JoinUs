import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React from 'react';

const UserScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the user's profile</Text>
      <Button
        title="Go To Event"
        onPress={() => navigation.navigate('Event')}
      />
      <Button title="User page again" onPress={() => navigation.push('User')} />
    </View>
  );
};

export default UserScreen;
