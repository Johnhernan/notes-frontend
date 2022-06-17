
import { ThemeProvider } from '@mui/material';

import './index.css';
import AppTheme from './theme/theme';
import MainRoutes from './routes';

const App = () => {
  return (
  <ThemeProvider theme={AppTheme}>
    <MainRoutes/>
  </ThemeProvider>);
}

export default App;