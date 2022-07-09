import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';

function CustomNavigationBar({navigation, back}) {
  const theme = useTheme();
  const navState = navigation.getState();
  console.log();
  const index = navState.index;
  const headerTitle = navState.routeNames[index];
  return (
    // <Appbar>
    <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={headerTitle} />
    </Appbar.Header>
    // </Appbar>
  );
}

export default CustomNavigationBar;
