import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {TextInput, Button} from 'react-native-paper';
import FancyButton from './FancyButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateRoom = () => {
  const [roomCode, setRoomCode] = useState('');
  const [roomKey, setRoomKey] = useState('');
  return (
    <Container>
      <Wrapper>
        <TextInput
          label="ROOM CODE"
          value={roomCode}
          onChangeText={setRoomCode}
        />

        <TextInput label="ROOM KEY" value={roomKey} onChangeText={setRoomKey} />

        <Button
          disabled
          icon={() => <Icon name="rocket" size={30} color="#900" />}
          mode="contained-tonal"
          onPress={() => console.log('Pressed')}>
          ENTER ROOM
        </Button>
        <Button icon="camera" mode="elevated" onPress={() => {}}>
          Elevated
        </Button>
        <Button icon="camera" mode="container-tonal" onPress={() => {}}>
          Container tonal
        </Button>
      </Wrapper>
    </Container>
  );
};

export default CreateRoom;

const Wrapper = styled.View`
  padding: 5px 20px;
  flex: 0.4;
  justify-content: space-between;
  /* background-color: yellow; */
`;

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {flex: 0.8, justifyContent: 'center'},
})`
  background-color: '#eeeeee';
`;
