import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DeclaredRoutes from './routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <DeclaredRoutes />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
