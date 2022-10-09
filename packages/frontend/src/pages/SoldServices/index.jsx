import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AddServiceModal from '../../components/AddServiceModal';
import SoldServicesTabs from '../../components/SoldServicesTabs';
import { useService } from '../../context/Services';

function SoldServices() {
  const { loadData, todaysDate } = useService();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 4
        }}
      >
        <Typography color="primary" variant="h1">
          {new Date(todaysDate).toLocaleString('pt-PT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Typography>
        <AddServiceModal />
      </Box>
      <Box>
        <SoldServicesTabs />
      </Box>
    </>
  );
}

export default SoldServices;
