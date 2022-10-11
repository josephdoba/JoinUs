import {Button, Text, Avatar, Divider} from '@rneui/base';
import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import useAppData from '../../hooks/useAppData';

const UserScreen = ({route, navigation}) => {
  const person = route.params.person;
  console.log(person);

  // can't send user state b/c of refresh. state is cleared.

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
            source={{uri: person.picture}}
            title={person.name}
            containerStyle={styles.avatar}>
            <Avatar.Accessory size={30} />
          </Avatar>
          <View>
            <Text style={styles.header}>{person.name} </Text>
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
          insetType="center"
          width={2}
          orientation="horizontal"
        />
        <View style={styles.container}>
          <Button
            title="My Events"
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.newButton}
            titleStyle={styles.buttonTitle}
            onPress={() =>
              navigation.navigate('Events', {
                screen: 'All',
                params: {user: person},
              })
            }
          />
          <Button
            title="New Event"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.newButton}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={() => console.log('aye')}
          />
          <Button
            title="Logout"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={styles.newButton}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            onPress={() => console.log('aye')}
          />
        </View>
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
    fontSize: 28,
    marginTop: 30,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    width: '80%',
    margin: 20,
    marginLeft: 35,
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
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonContainer: {
    marginHorizontal: 40,
    height: 50,
    width: 300,
    marginVertical: 10,
  },
});
