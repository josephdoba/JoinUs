import {Button, Text, Avatar, Divider} from '@rneui/base';
import {ImageBackground, StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';

const UserScreen = ({route, navigation}) => {
  const user = route.params.user;

  // console.log(JSON.stringify(route.params));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/people.png')}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Avatar
            size={120}
            rounded
            source={{uri: user.picture}}
            title="Bj"
            containerStyle={styles.avatar}>
            <Avatar.Accessory size={30} />
          </Avatar>

          <Text style={styles.text}>{user.name} </Text>
        </View>
        <Divider
          style={{width: '80%', margin: 20}}
          color="#94B49F"
          insetType="left"
          subHeaderStyle={{}}
          width={2}
          orientation="horizontal"
        />
        <Button
          title="Go To Event"
          onPress={() => navigation.navigate('Event')}
        />
        <Button
          title="To My Events"
          onPress={() => navigation.navigate('MyEvents')}
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
  image: {
    flex: 1,
  },
  avatar: {
    margin: 15,
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 32,

    fontWeight: 'bold',
    textAlign: 'center',
  },
});
