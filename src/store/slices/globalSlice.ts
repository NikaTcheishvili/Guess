import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './types';

const initialState: InitialState = {
  theme: 'dark',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTheme: (state, {payload}: {payload: InitialState['theme']}) => {
      state.theme = payload;
    },
  },
});

export default globalSlice.reducer;
export const {setTheme} = globalSlice.actions;
