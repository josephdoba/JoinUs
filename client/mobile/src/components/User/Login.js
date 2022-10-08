import React, {useState} from 'react';
import {Button, Overlay, Icon} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';

const LoginForm = ({navigation, visible, toggleOverlay}) => {
  const [userID, getUserID] = useState('');
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
      </Overlay>
    </View>
  );
};

export default LoginForm;

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
