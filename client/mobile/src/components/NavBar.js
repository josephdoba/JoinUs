import * as React from 'react';
import {Header, Icon} from '@rneui/base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

const NavBar = ({navigation}) => {
  return (
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: 'JoinUs!',
        style: {color: '#fff'},
      }}
      centerContainerStyle={{}}
      containerStyle={{width: '100%'}}
      leftComponent={
        <Icon
          color="#0CC"
          containerStyle={{}}
          disabledStyle={{}}
          iconProps={{}}
          iconStyle={{}}
          name="hamburger"
          onPress={() => console.log('onPress()')}
          size={30}
          type="material-community"
        />
      }
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={
        <Icon
          color="#0CC"
          name="home"
          onPress={() => console.log('onPress()')}
          size={30}
          type="ionicons"
        />
      }
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
};

export default NavBar;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
