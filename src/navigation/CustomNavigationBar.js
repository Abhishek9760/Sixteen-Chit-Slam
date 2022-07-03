import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';

function CustomNavigationBar({navigation, back}) {
  const theme = useTheme();
  return (
    // <Appbar>
    <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Create Room" />
    </Appbar.Header>
    // </Appbar>
  );
}

export default CustomNavigationBar;
