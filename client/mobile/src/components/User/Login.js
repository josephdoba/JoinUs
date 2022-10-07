import React, {useState} from 'react';
import {Button, Overlay, Icon} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';

const LoginScreen = ({navigation, visible, toggleOverlay}) => {
  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Hello!</Text>
        <Text style={styles.textSecondary}>
          Welcome to React Native Elements
        </Text>
        <Button
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Start Building"
          onPress={toggleOverlay}
        />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Button
          title="Log In"
          onPress={() => navigation.navigate('User', {name: 'Carmen'})}
        />
      </Overlay>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});
