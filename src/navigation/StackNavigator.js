import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './DrawerNavigator';
import RoomScreen from '../screens/RoomScreen';
import CustomNavigationBar from './CustomNavigationBar';
// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  // const theme = useSelector(state => state.appTheme.theme);
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}
      // screenOptions={{
      //   headerStyle: {backgroundColor: theme.STATUS_BAR_BG_COLOR},
      //   headerTintColor: '#fff',
      // }}
    >
      <Stack.Screen
        name="home"
        component={RoomScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
