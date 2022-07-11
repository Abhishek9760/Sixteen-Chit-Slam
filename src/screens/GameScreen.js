import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Button, Divider} from 'react-native-paper';
import ChitList from '../components/ChitList';
import {socket} from '../socket';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../actions';
import {addCurrentUser} from '../actions/userActions';
import {View} from 'react-native';
import {ADD_AVATAR} from '../constants';
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
  const users = useSelector(state => state.users.user_list);
  // const avatar = useSelector(state => state.users.avatar);
  // console.log(state);
  let usrs = [...users];
  const first = usrs.splice(0, 2);
  const second = usrs;
  // console.log(first, second);

  useEffect(() => {
    socket.on('connect', () => {
      const {roomCode, name} = route.params;
      const userData = {
        ...route.params,
        socketid: socket.id,
        avatar: 'avatar' + name,
      };
      dispatch(addCurrentUser(userData));
      dispatch({type: ADD_AVATAR, payload: userData.avatar});

      // JOINING ROOM
      console.log('joining room', roomCode);
      socket.emit('join-room', roomCode);

      socket.on('give-me-users-list', () => {
        console.log('updating..');
        socket.emit('update-client', userData);
      });

      socket.on('set-user-state', user => {
        console.log('setting user', user.name, 'in', socket.id);
        socket.emit('update-other-socket', {data: userData, to: user});
        dispatch(addUser(user));
      });

      socket.on('set-user-state-last', user => dispatch(addUser(user)));

      // GETTING UPDATED USERS
      // socket.on('get-users', () => {
      //   socket.emit('users-list', state.user_list);
      // });

      // socket.on('get-updated-user-data', () => {
      //   console.log('getting the data', socket.id, userData);
      //   socket.emit('set-user-data', userData);
      // });

      // socket.on('set-user-state', user => {
      //   console.log(user);
      //   dispatch(addUser(user));
      // });
      // dispatch(addUser(userData));
      // socket.emit('add-new-user', userData);
      // socket.on('add-new-user-to-state', user => {
      //   // console.log(user, user);
      //   dispatch(addUser(user));
      //   // socket.emit('add-user-to-other-side', state.current_user);
      // });
      // socket.on('get-updated-user-data', socket.emit(''))
      // socket.emit('add-new-user', userData);
      console.log(userData.socketid);
      // dispatch(addUser(userData));
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
                image={avatars[user.avatar]}
                name={user.name}
                online
                active={user.socketid === socket.id}
              />
            );
          })}
        </AvatarContainer>
        <AvatarContainer>
          {second.map((user, i) => {
            return (
              <Avatar
                key={i}
                image={avatars[user.avatar]}
                name={user.name}
                online
                active={user.socketid === socket.id}
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
