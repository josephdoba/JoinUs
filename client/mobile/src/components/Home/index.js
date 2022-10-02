import {Button} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import Herobanner from './Herobanner';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Herobanner />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('User', {name: 'Carmen'})}
      />
    </View>
  );
};

export default HomeScreen;
