import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './stateReducer';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
