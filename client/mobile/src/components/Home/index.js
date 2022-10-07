import {Button} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Herobanner from './Herobanner';
import HowTo from './HowTo';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Herobanner />
        <HowTo />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('User', {name: 'Carmen'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
