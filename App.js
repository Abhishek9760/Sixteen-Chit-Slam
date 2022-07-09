import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MainStackNavigator} from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

const {store} = configureStore();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#610404',
    accent: '#E66A6A',
    tertiary: '#DE911D',
    secondary: '#780A0A',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.primary} />
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
