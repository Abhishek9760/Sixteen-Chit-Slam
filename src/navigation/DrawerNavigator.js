import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import styled from 'styled-components/native';

// import CustomDrawerContent from './CustomDrawerContent';
import RoomScreen from '../screens/RoomScreen';
// import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  // const navigation = useNavigation();
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="home"
      // screenOptions={{
      // headerTintColor: '#fff',
      // headerStyle: {backgroundColor: theme.drawer.BG_COLOR},
      // headerTitleStyle: {fontFamily: 'Stentiga'},
      // drawerContentStyle: {backgroundColor: '#ffffff'},
      // drawerLabelStyle: {
      //   color: Colors.purple900,
      //   fontFamily: 'Wabene',
      // },
      // drawerActiveTintColor: Colors.purple800,
      // }}
    >
      <Drawer.Screen name="room" component={RoomScreen} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};
