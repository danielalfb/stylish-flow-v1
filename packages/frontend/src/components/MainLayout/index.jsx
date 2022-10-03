import React from 'react';
import Header from '../Header';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ padding: '2rem' }}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
