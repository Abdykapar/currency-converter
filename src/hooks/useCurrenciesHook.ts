import { useEffect, useState } from 'react';
import { getCurrencies } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrencies } from '../store/stateReducer';
import { Options } from '../types';

function useCurrenciesHook() {
  const currencies = useSelector(
    (state: RootState) => state.currency.currencies
  );
  const dispatch = useDispatch();

  function fetch() {
    getCurrencies().then(({ data }) => {
      const supportedCodes: [string, string][] = data.supported_codes;
      const options: Options[] = supportedCodes.map(([key, value]) => ({
        key,
        value,
      }));
      dispatch(setCurrencies(options));
    });
  }

  useEffect(() => {
    if (!currencies.length) {
      fetch();
    }
  }, []);

  return [currencies];
}

export default useCurrenciesHook;
