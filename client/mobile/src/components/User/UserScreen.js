import {Text} from 'react-native';

const UserScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default UserScreen;
