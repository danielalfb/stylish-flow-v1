import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    white: {
      main: '#fff'
    },
    background: {
      main: 'F8F8F8'
    },
    primary: {
      main: '#003352'
    },
    secondary: {
      main: '#089DA3'
    },
    text: {
      main: '#6B7280'
    }
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      color: '#6B7280',
      fontWeight: 400
    },
    h5: {
      fontWeight: 600
    }
  }
});
