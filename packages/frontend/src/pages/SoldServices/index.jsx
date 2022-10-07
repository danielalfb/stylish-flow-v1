import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddServiceModal from '../../components/AddServiceModal';
import SoldServicesTabs from '../../components/SoldServicesTabs';

function SoldServices() {
  const [todaysDate, setTodaysDate] = useState(new Date());
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 4
        }}
      >
        <Typography variant="h1">
          Serviços vendidos em {todaysDate.getDate()}/
          {todaysDate.getMonth() + 1}/{todaysDate.getFullYear()}
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
