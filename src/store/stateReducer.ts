import { createSlice } from '@reduxjs/toolkit';
import { Options } from '../types';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    currencies: [] as Options[],
  },
  reducers: {
    setCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export const { setCurrency, setCurrencies } = currencySlice.actions;

export default currencySlice.reducer;
