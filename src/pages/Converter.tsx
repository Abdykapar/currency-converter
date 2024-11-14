import CurrencyCodes from '../components/CurrencyCodes';
import ConverterForm from '../components/Form';
import Header from '../components/Header';

function Converter() {
  return (
    <div>
      <Header />
      <ConverterForm />
      <CurrencyCodes />
    </div>
  );
}

export default Converter;
