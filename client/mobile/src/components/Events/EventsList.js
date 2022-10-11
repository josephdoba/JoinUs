import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Image, Icon, ListItem, Button} from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';
import {formatTime, shortenText} from '../../helpers/helpers';

// display of the individual event item

const EventsList = ({navigation, event}) => {
  const IMAGE_URL = event.image;

  return (
    <View style={styles.container}>
      <ListItem.Swipeable
        Component={TouchableScale}
        friction={90} //
        tension={100} // Touchable Scale stuff
        activeScale={0.95} //
        leftContent={reset => (
          <Button
            title="Info"
            onPress={() => navigation.navigate('Event', event)}
            onPressOut={() => reset()}
            icon={{name: 'info', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
          />
        )}
        rightContent={reset => (
          <Button
            title="Interested"
            onPress={() => reset()}
            icon={
              <Icon
                name="smiley"
                type="octicon"
                color="white"
                size={25}
                style={{marginRight: 5}}
              />
            }
            buttonStyle={{minHeight: '100%', backgroundColor: 'orange'}}
          />
        )}>
        <ListItem.Content>
          <View style={styles.headerContainer}>
            <ListItem.Title style={styles.title}> {event.name} </ListItem.Title>
            <Text style={styles.cityText}>{event.city}</Text>
          </View>
          <View style={styles.subtitleView}>
            <Image
              source={{
                uri: IMAGE_URL,
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.date}>
                {formatTime(event.start_time, event.end_time)}
              </Text>
              <Text style={styles.text}>{shortenText(event.description)}</Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem.Swipeable>
    </View>
  );
};

export default EventsList;

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  image: {
    height: 120,
    width: 120,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: '',
    width: 800,
  },
  cityText: {
    paddingRight: 15,
    color: 'grey',
    width: 120,
    fontSize: 12,
    paddingBottom: 5,
    marginTop: 5,
    justifyContent: 'flex-end',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  date: {
    paddingLeft: 10,
    marginLeft: 35,
    color: 'grey',
    width: 120,
    fontSize: 12,
    paddingBottom: 5,
    // justifyContent: '',
    textAlign: 'center',
  },
  text: {
    paddingLeft: 10,
    color: 'grey',
    width: 230,
    fontSize: 16,
  },
  container: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 250,
    // textAlign: 'center',
  },
});
