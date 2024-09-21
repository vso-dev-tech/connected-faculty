// authReducer.ts
import { SearchState } from '@libraries/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
