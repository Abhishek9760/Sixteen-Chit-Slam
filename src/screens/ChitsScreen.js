import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {generateChits} from '../actions/chitActions';
import styled from 'styled-components/native';

const Chit = () => {
  return;
};

const ChitsScreen = () => {
  const dispatch = useDispatch();
  const chits = useSelector(state => state.chits.chit_list);
  console.log(chits);

  useEffect(() => {
    dispatch(generateChits());
  }, []);

  return (
    <Container>
      {chits.map((chit, i) => (
        <Text key={i}>{chit}</Text>
      ))}
    </Container>
  );
};

export default ChitsScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.tertiary};
`;
