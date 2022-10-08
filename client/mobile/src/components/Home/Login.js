import React from 'react';
import {Button, Overlay, Input, Text, Icon} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';

const LoginForm = ({
  visible,
  toggleOverlay,
  handleLogin,
  setUserID,
  userID,
}) => {
  return (
    <View style={styles.marginBottom}>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Bored?!</Text>
        <Text style={styles.textSecondary}>
          Sign in and find an activity near you!
        </Text>
        {/* how do you handle form submits? */}
        <View>
          <Input
            containerStyle={styles.inputBox}
            autoCorrect="false"
            autoFocus="true"
            type="text"
            placeholder="Email Address"
            value={userID}
            onChangeText={value => setUserID(value)}
            leftIcon={{type: 'fontisto', name: 'email'}}
          />
          <Input
            type="password"
            secureTextEntry={true}
            leftIcon={{
              type: 'feather',
              name: 'lock',
            }}
            placeholder="Password"
          />
        </View>
        <Button
          style={styles.marginBottom}
          icon={
            <Icon
              name="doubleright"
              type="antdesign"
              color="white"
              size={25}
              iconStyle={styles.buttonIcon}
            />
          }
          title="Log In"
          onPress={handleLogin}
        />
        <Button
          style={styles.marginBottom}
          icon={
            <Icon
              name="cancel"
              type="material"
              color="white"
              size={25}
              iconStyle={styles.buttonIcon}
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
  marginBottom: {
    marginBottom: 20,
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
  buttonIcon: {
    marginRight: 10,
  },
  inputBox: {
    width: 350,
  },
});
