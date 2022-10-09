import {Button, Text, Avatar, Divider} from '@rneui/base';
import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {StackActions} from '@react-navigation/native';

const UserScreen = ({route, navigation}) => {
  const user = route.params.user;

  // console.log(JSON.stringify(route.params));

  const handleLogout = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/people.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.profile}>
          <Avatar
            size={120}
            rounded
            source={{uri: user.picture}}
            title={user.name}
            containerStyle={styles.avatar}>
            <Avatar.Accessory size={30} />
          </Avatar>
          <View>
            <Text style={styles.header}>{user.name} </Text>
            <Button
              title="EDIT"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{marginLeft: 10}}
              titleStyle={{fontWeight: '700'}}
              buttonStyle={styles.editButton}
              containerStyle={styles.editContainer}
            />
          </View>
        </View>
        <Divider
          style={styles.divider}
          color="#94B49F"
          insetType="left"
          subHeaderStyle={{}}
          width={2}
          orientation="horizontal"
        />

        <Button
          title="To My Events"
          onPress={() => navigation.navigate('MyEvents', {user})}
        />

        <Button
          title="New Event"
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.newButton}
          titleStyle={{fontWeight: 'bold', fontSize: 23}}
          containerStyle={styles.buttonContainer}
          onPress={() => console.log('aye')}
        />

        <Button
          title="Go To Event"
          onPress={() => navigation.navigate('Event')}
        />

        <Button
          title="Logout"
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.newButton}
          titleStyle={{fontWeight: 'bold', fontSize: 23}}
          containerStyle={styles.buttonContainer}
          onPress={handleLogout}
        />
      </ImageBackground>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
  },
  avatar: {
    margin: 15,
    backgroundColor: 'grey',
  },
  header: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    width: '80%',
    margin: 20,
  },
  editButton: {
    backgroundColor: 'rgba(199, 43, 98, 1)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
  },
  editContainer: {
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  newButton: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderRadius: 5,
  },
  buttonContainer: {
    marginHorizontal: 100,
    height: 50,
    width: 200,
    marginVertical: 10,
  },
});
