import { useEffect, useState } from 'react';
import { getLiveCurrencies } from '../services';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Options } from '../types';

function useCurrenciesByBaseHook() {
  const baseCurrency = useSelector(
    (state: RootState) => state.currency.baseCurrency
  );
  const [data, setData] = useState<Options[]>([]);

  function fetch() {
    getLiveCurrencies(baseCurrency).then(({ data }) => {
      const options = Object.entries(
        data.conversion_rates as { [key: string]: string }
      ).map(([key, value]) => ({
        key,
        value,
      }));
      setData(options);
    });
  }

  useEffect(() => {
    if (baseCurrency) fetch();
  }, [baseCurrency]);

  return [data];
}

export default useCurrenciesByBaseHook;
