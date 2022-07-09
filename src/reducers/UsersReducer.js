import {ADD_CURRENT_USER, ADD_USER} from '../constants';

const initialState = {
  user_list: [],
  users_connected: 0,
  current_user: {},
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, user_list: [...state.user_list, action.payload]};
    case ADD_CURRENT_USER:
      return {...state, current_user: action.payload};
    default:
      return state;
  }
};
