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
      <Button
        title="To My Events"
        onPress={() => navigation.push('MyEvents')}
      />
      <Button title="All Events" onPress={() => navigation.push('AllEvents')} />
      <Button
        title="Upcoming Events"
        onPress={() => navigation.push('JoinedEventScreen')}
      />
      <Button
        title="Upcoming Events"
        onPress={() => navigation.push('HistoryScreen')}
      />
    </View>
  );
};

export default UserScreen;
