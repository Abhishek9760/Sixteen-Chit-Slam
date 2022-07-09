import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Button, Divider} from 'react-native-paper';
import ChitList from '../components/ChitList';
import {socket} from '../socket';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../actions';
import {addCurrentUser} from '../actions/userActions';
import {View} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const avatars = {
  avatar1: require('../assets/images/avatars/avatar1.png'),
  avatar2: require('../assets/images/avatars/avatar2.png'),
  avatar3: require('../assets/images/avatars/avatar3.png'),
  avatar4: require('../assets/images/avatars/avatar4.png'),
};

const Avatar = ({image, active, name, online}) => (
  <AvatarWrapper active={active}>
    <Row>
      <OnlineStatus online={online} />
      <AvtarText>{name || 'Waiting...'}</AvtarText>
    </Row>
    <AvatarImage source={image} />
  </AvatarWrapper>
);

const GameScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  let users = useSelector(state => state.users.user_list);
  const first = users.splice(0, 2);
  const second = users;
  console.log(first, second);

  useEffect(() => {
    socket.on('connect', () => {
      const {roomCode} = route.params;
      socket.emit('join-room', roomCode);
      const userData = {
        ...route.params,
        socketid: socket.id,
      };
      dispatch(addUser(userData));
      dispatch(addCurrentUser(userData));
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <AvatarContainer>
          {first.map((user, i) => {
            return (
              <Avatar
                key={i}
                image={avatars[`avatar${i + 1}`]}
                name={user.name}
                online
              />
            );
          })}
        </AvatarContainer>
        <AvatarContainer>
          {second.map((user, i) => {
            return (
              <Avatar
                key={i}
                image={avatars[`avatar${i + 1}`]}
                name={user.name}
                online
              />
            );
          })}
        </AvatarContainer>
      </Wrapper>
      <Divider style={{backgroundColor: '#eee'}} />
      {/* <ChitList /> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button mode="contained" onPress={() => navigation.navigate('chits')}>
          Select Chits
        </Button>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.tertiary};
`;

const AvatarImage = styled.Image`
  height: 80px;
  width: 80px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const AvatarWrapper = styled.View`
  align-items: center;
  background-color: ${props =>
    props.active ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  padding: 5px 30px 15px 30px;

  border-radius: 5px;
`;
const AvtarText = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  color: #eee;
`;

const Wrapper = styled.View`
  flex: 0.5;
`;

const OnlineStatus = styled.View`
  height: 10px;
  aspect-ratio: 1;
  border-radius: 100px;
  background-color: ${props => (props.online ? 'lightgreen' : 'red')};
  margin-right: 5px;
`;

export default GameScreen;
