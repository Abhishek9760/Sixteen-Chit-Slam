import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import CreateRoom from '../components/CreateRoom';

export default function RoomScreen() {
  return <CreateRoom />;
}

const Container = styled.ScrollView`
  background-color: ${props => props.theme.colors.secondary};
  flex: 1;
`;
