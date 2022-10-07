import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Login Screen here</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
    <Button
      title="Log In"
      onPress={() => navigation.navigate('User', {name: 'Carmen'})}
    />
  </View>;
};

export default LoginScreen;
