import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {usersReducer, chitsReducer} from '../reducers';
// import {animeListReducer} from '../reducers/animeListReducer';
// import {animeDetailsReducer} from '../reducers/animeDetailsReducer';
// import {selectedAnimeReducer} from '../reducers/selectedAnimeReducer';
// import {animeGenreReducer} from '../reducers/animeGenreReducer';
// import {animeGenreListReducer} from '../reducers/animeGenreListReducer';
// import {playerReducer} from '../reducers/playerReducer';
// import {searchReducer} from '../reducers/searchReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {favouritesReducer} from '../reducers/favouritesReducer';
// import {appThemeReducer} from '../reducers/appThemeReducer';
// import {userChatReducer} from '../reducers/userChatReducer';
// import {appInfoReducer} from '../reducers/appInfoReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  chits: chitsReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['favouritesAnime', 'appTheme', 'userChat', 'appInfo'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  // let persistor = persistStore(store);
  return {store};
};
