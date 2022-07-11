import {SET_CHITS} from '../constants';

const initialState = {
  chit_list: [],
};

export const chitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHITS:
      return {...state, chit_list: action.payload};
    default:
      return state;
  }
};
