import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TextInput, Button} from 'react-native-paper';
import {Spacer} from './utils/Spacer';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const CreateRoom = () => {
  const [roomCode, setRoomCode] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();
  // const user = useSelector(state => state.users);

  const handlePress = () => {
    if (roomCode && name) {
      navigation.navigate('game', {
        name,
        roomCode,
      });
    }
  };
  return (
    <Container>
      <Wrapper>
        <TextInput label="YOUR NAME" value={name} onChangeText={setName} />
        <Spacer margin="10" vertical />
        <TextInput
          label="ROOM CODE"
          value={roomCode}
          onChangeText={setRoomCode}
        />
        <Spacer margin="10" vertical />
        <Button
          icon={() => <Icon name="enter-outline" size={22} color="white" />}
          mode="contained"
          onPress={handlePress}>
          ENTER ROOM
        </Button>
      </Wrapper>
    </Container>
  );
};

export default CreateRoom;

const Wrapper = styled.View`
  padding: 5px 20px;
  justify-content: space-between;
`;

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {flex: 1, justifyContent: 'center'},
})`
  background-color: ${props => props.theme.colors.background};
`;
