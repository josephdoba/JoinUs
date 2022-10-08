import React, {useState} from 'react';
import {Button, Overlay, Input, Icon} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';

const LoginForm = ({navigation, visible, toggleOverlay}) => {
  const [userID, setUserID] = useState('');
  console.log(userID);
  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Bored?!</Text>
        <Text style={styles.textSecondary}>
          Sign in and find an activity near you!
        </Text>
        <View>
          <Input
            containerStyle={{width: 350}}
            autoFocus="true"
            placeholder="Email Address"
            keyboardType="default"
            label="Email Address"
            value={userID}
            onChangeText={value => setUserID(value)}
            leftIcon={{type: 'fontisto', name: 'email'}}
          />
          <Input
            autoFocus="true"
            keyboardType="default"
            leftIcon={{
              type: 'material-community',
              name: 'form-textbox-password',
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <Button
          style={styles.button}
          icon={
            <Icon
              name="doubleright"
              type="antdesign"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Log In"
          onPress={toggleOverlay}
        />
        <Button
          style={styles.button}
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Cancel"
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
