import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import largePostReducer from '../features/Post/largePostSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    largePost: largePostReducer,
    searchBar: searchBarReducer
  },
});
