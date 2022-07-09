// import {
//   GET_ANIME_GENRE_LIST,
//   BASE_URL,
//   SET_ANIME_GENRE_LOADING,
//   SET_ANIME_GENRE_ERROR,
//   GET_GENRE_ANIME_LIST,
//   SET_GENRE_ANIME_LOADING,
//   GENRE_ANIME_RESET_PAGE,
//   GENRE_ANIME_NEXT_PAGE,
//   GENRE_ANIME_RESET,
//   SET_GENRE_ANIME_ERROR,
//   GENRE_ANIME_CLEAR,
// } from '../constants';
// import {showToast} from '../utils';

import {ADD_USER, ADD_CURRENT_USER} from '../constants';

export const addUser = userData => async dispatch => {
  dispatch({type: ADD_USER, payload: userData});
};

export const addCurrentUser = userData => dispatch => {
  dispatch({type: ADD_CURRENT_USER, payload: userData});
};
