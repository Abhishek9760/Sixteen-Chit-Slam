import React from 'react';
import {View} from 'react-native';

export const Spacer = ({horizontal, vertical, margin}) => {
  margin = parseInt(margin, 10);
  const styles = {};
  if (horizontal) {
    styles.marginHorizontal = margin;
  } else {
    styles.marginVertical = margin;
  }
  return <View style={styles} />;
};
