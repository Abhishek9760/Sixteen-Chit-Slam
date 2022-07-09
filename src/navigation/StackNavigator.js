import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {DrawerNavigator} from './DrawerNavigator';
import RoomScreen from '../screens/RoomScreen';
// import CustomNavigationBar from './CustomNavigationBar';
import GameScreen from '../screens/GameScreen';
import {useTheme} from 'react-native-paper';
import ChitsScreen from '../screens/ChitsScreen';
// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const theme = useTheme();
  // const theme = useSelector(state => state.appTheme.theme);
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
        headerTintColor: '#ffffff',
      }}
      // screenOptions={{
      //   header: props => <CustomNavigationBar {...props} />,
      // }}
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
      <Stack.Screen
        name="chits"
        component={ChitsScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="game"
        component={GameScreen}
        options={{
          headerTitle: 'Games',
        }}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
