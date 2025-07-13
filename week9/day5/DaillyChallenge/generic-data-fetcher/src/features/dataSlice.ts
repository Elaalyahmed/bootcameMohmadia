import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataState } from '../types/types';

const initialState: DataState = {};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchStart(state, action: PayloadAction<{ key: string }>) {
      const { key } = action.payload;
      state[key] = { 
        ...state[key], 
        loading: true, 
        error: null 
      };
    },
    fetchSuccess<T>(state: DataState, action: PayloadAction<{ key: string; data: T }>) {
      const { key, data } = action.payload;
      state[key] = { 
        data, 
        loading: false, 
        error: null 
      };
    },
    fetchError(state, action: PayloadAction<{ key: string; error: string }>) {
      const { key, error } = action.payload;
      state[key] = { 
        ...state[key], 
        loading: false, 
        error 
      };
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = dataSlice.actions;
export default dataSlice.reducer;