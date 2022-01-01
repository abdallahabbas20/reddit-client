import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    submittedValue: "",
    value: ""
};


export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      submitSearch: (state, action) => {
          state.submittedValue = action.payload;
      },
      updateValue: (state, action) => {
          state.value = action.payload
      }
    
  },

  
});


export const selectValue = (state) => state.searchBar.value;
export const selectSearchValue = (state) => state.searchBar.submittedValue;


export const {submitSearch, updateValue} = searchBarSlice.actions;
export default searchBarSlice.reducer;
