import { createBrowserRouter } from 'react-router-dom';
import Converter from './pages/Converter';
import Currencies from './pages/Currencies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Converter />,
  },
  {
    path: '/currencies',
    element: <Currencies />,
  },
]);

export default router;
