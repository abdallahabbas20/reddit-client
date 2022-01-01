import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectSearchValue } from '../searchBar/searchBarSlice';
import { useSelector } from 'react-redux';

const initialState = {
    redditResponse: {},
    status: 'idle'
};


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const redditAsync = createAsyncThunk(
    'largePost/fetchReddit',
    async (searchTerm='') => {
      if (searchTerm === '') {
        const response = await fetch(`https://www.reddit.com/r/popular.json`);
        // The value we return becomes the `fulfilled` action payload
        const jsonResponse = await response.json()
        return jsonResponse;
      }
      const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
      
      // The value we return becomes the `fulfilled` action payload
      const jsonResponse = await response.json()
      return jsonResponse;
    }
  );


export const largePostSlice = createSlice({
  name: 'largePost',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(redditAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(redditAsync.fulfilled, (state, action) => {
        state.status = 'complete';
        state.redditResponse = action.payload;
      });
  },


  
});




export const selectRedditInfo = (state) => state.largePost.redditResponse;
export const selectStatus = (state) => state.largePost.status;

export default largePostSlice.reducer;
