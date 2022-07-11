import {SET_CHITS} from '../constants';
import {shuffle} from '../utils';

const chits = ['Elephant', 'Zebra', 'Lion', 'Rat'];

const generateChits_ = chits => {
  let chitList = [];
  chits.forEach(e => {
    chitList = [...chitList, ...Array(4).fill(e)];
  });
  return shuffle(chitList);
};

export const generateChits = () => async dispatch => {
  const chitList = generateChits_(chits);
  dispatch({type: SET_CHITS, payload: chitList});
};
