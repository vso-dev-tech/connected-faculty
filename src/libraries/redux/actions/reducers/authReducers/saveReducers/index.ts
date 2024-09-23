// authReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveLoginState } from 'library/interface';


const initialState: saveLoginState = {
  image: null,
  email: null,
  password: null,
};

const saveSilce = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveLogin(state, action: PayloadAction<string>) {
      state.image = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },
  },
});

export const { saveLogin } = saveSilce.actions;
export default saveSilce.reducer;
