import {View, Text} from 'react-native';
import React from 'react';
import Chit from './Chit';
import styled from 'styled-components/native';

const ChitList = () => {
  const chits = ['tiger', 'lion', 'zebra', 'elephant'];
  return (
    <Wrapper>
      <ChitWrapper>
        <Chit text={chits[0]} />
        <Chit text={chits[1]} />
      </ChitWrapper>
      <ChitWrapper>
        <Chit text={chits[2]} />
        <Chit text={chits[3]} />
      </ChitWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 0.5;
`;

const ChitWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`;

export default ChitList;
