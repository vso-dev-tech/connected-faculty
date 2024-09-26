// authReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from 'library/interface';


const initialState: SearchState = {
  type: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
