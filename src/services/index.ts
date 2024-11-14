import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export function converter(base: string, currency: string) {
  return axios.get(`${URL}/pair/${base}/${currency}`);
}

export function getCurrencies() {
  return axios(`${URL}/codes`);
}

export function getLiveCurrencies(base: string) {
  return axios(`${URL}/latest/${base}`);
}
