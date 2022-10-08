import * as React from 'react';
import {Header, Icon} from '@rneui/base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Image} from 'react-native';

const NavBar = ({navigation}) => {
  return (
    <Header
      style={styles.headerContainer}
      backgroundColor="#f9fbe7"
      backgroundImageStyle={{}}
      barStyle="light-content"
      centerComponent={{
        text: 'JoinUs!',
        style: styles.heading,
      }}
      centerContainerStyle={{}}
      containerStyle={{width: '100%'}}
      rightComponent={
        <Icon
          color="#595959"
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
      leftComponent={
        <Image
          style={styles.logo}
          source={require('../images/logo_light.png')}
          onPress={() => console.log('onPress()')}
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
    color: '#595959',
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
  logo: {
    width: 30,
    height: 30,
  },
});
