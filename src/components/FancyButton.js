import * as React from 'react';
import {Button, useTheme} from 'react-native-paper';

export default function FancyButton(props) {
  const theme = useTheme();
  return <Button {...props} />;
}
