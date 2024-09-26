import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../actions/reducers/authReducers/loginReducers';
import searchReducers from '../actions/reducers/searchReducers';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
