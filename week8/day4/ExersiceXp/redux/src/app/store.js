// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/userSlice';
import { thunk } from 'redux-thunk';  // ✅ Correct - named import
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});