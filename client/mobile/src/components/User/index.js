import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React, {useState} from 'react';

const UserScreen = ({route, navigation}) => {
  const user = route.params.user;

  // console.log(user);
  console.log(JSON.stringify(route.params));

  return (
    <View>
      <Text>This is {user.name} the profile</Text>
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
