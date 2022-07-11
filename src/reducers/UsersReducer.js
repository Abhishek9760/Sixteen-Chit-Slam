import {ADD_AVATAR, ADD_CURRENT_USER, ADD_USER} from '../constants';

const initialState = {
  user_list: [],
  users_connected: 0,
  current_user: {},
  avatar: '',
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(state, 'add-user');
      let newUserList = [...state.user_list];
      newUserList.push(action.payload);
      return {
        ...state,
        user_list: newUserList,
      };
    case ADD_CURRENT_USER:
      // console.log(state, action, 'current');
      let newUserList2 = [...state.user_list];
      newUserList2.push(action.payload);
      return {
        ...state,
        current_user: action.payload,
        user_list: newUserList2,
      };
    case ADD_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
};
