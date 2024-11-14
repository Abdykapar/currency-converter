import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getCurrencies } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrency } from '../store/stateReducer';
import useCurrenciesHook from '../hooks/useCurrenciesHook';

function BaseCurrency() {
  const baseCurrency = useSelector(
    (state: RootState) => state.currency.baseCurrency
  );
  const dispatch = useDispatch();
  const [currencies] = useCurrenciesHook();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setCurrency(event.target.value));
  };

  return (
    <FormControl size='small' sx={{ mb: 2, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-disabled-label'>Currency</InputLabel>
      <Select
        labelId='demo-simple-select-disabled-label'
        id='demo-simple-select-disabled'
        value={baseCurrency}
        label='Currency'
        onChange={handleChange}
      >
        {currencies.map((i) => (
          <MenuItem value={i.key}>{i.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default BaseCurrency;
