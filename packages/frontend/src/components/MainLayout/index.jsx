import Header from '../Header';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ padding: '1rem' }}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
