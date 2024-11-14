// Render Prop
import { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { converter } from '../services';

const ConverterForm = () => {
  const [result, setResult] = useState('');
  const validate = (values: { converterField: string }) => {
    const errors: { converterField?: string } = {};

    if (!values.converterField) {
      errors.converterField = 'Required';
    } else if (
      !/^(\d+(\.\d+)?)\s+(\w+)\s+in\s+(\w+)$/.test(values.converterField)
    ) {
      errors.converterField = 'Invalid text';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: { converterField: '' },
    validate,
    onSubmit: (values) => {
      const [amount, base, , currency] = values.converterField
        .split(' ')
        .filter((i) => i);
      converter(base, currency)
        .then(({ data }) => {
          const conversion = (Number(amount) * data.conversion_rate).toFixed(4);
          setResult(`${values.converterField} is ${conversion}`);
        })
        .catch((err) => {
          setResult('Please use codes below');
        });
    },
  });

  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Typography variant='subtitle2' gutterBottom>
        Type your text here.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', m: '1rem 0' }}>
          <TextField
            size='small'
            name='converterField'
            placeholder='15 usd in eur'
            value={formik.values.converterField}
            onChange={formik.handleChange}
            error={!!formik.errors.converterField}
            helperText={formik.errors.converterField}
          />
          <Button type='submit'>Submit</Button>
        </Box>
      </form>

      <Box>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          Result
        </Typography>

        <Typography variant='body2'>{result}</Typography>
      </Box>
    </Card>
  );
};

export default ConverterForm;
