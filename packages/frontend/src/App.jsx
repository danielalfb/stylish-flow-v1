import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import MainLayout from './components/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import DeclaredRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <DeclaredRoutes />
          <ToastContainer
            autoClose={5000}
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
