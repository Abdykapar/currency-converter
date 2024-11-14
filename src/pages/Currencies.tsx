import { Box, Card, CardContent } from '@mui/material';
import BaseCurrency from '../components/BaseCurrency';
import Header from '../components/Header';
import CurrencyTable from '../components/CurrencyTable';

function Currencies() {
  return (
    <div>
      <Header />

      <Box sx={{ maxWidth: '90%', margin: '2rem auto', minHeight: '80vh' }}>
        <BaseCurrency />

        <CurrencyTable />
      </Box>
    </div>
  );
}

export default Currencies;
