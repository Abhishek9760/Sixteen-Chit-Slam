import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconButton} from 'react-native-paper';

const Chit = ({text}) => {
  return (
    <ChitBackground
      resizeMode="cover"
      source={require('../assets/images/chits/chit1.png')}>
      <ChitText>{text}</ChitText>
      <IconButton
        icon={() => <Icon name="exchange" size={22} />}
        onPress={() => console.log('Pressed')}
      />
    </ChitBackground>
  );
};

const ChitText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ChitBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1;
`;

export default Chit;
