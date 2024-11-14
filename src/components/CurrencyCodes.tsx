import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useCurrenciesHook from '../hooks/useCurrenciesHook';
import { Box, Typography } from '@mui/material';

export default function CurrencyCodes() {
  const [data] = useCurrenciesHook();

  return (
    <TableContainer component={Paper}>
      <Box sx={{ m: 1 }}>
        <Typography variant='subtitle2' sx={{ m: 2 }}>
          All currency codes
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Codes</TableCell>
              <TableCell align='right'>Names</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.key}
                </TableCell>
                <TableCell align='right'>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}
