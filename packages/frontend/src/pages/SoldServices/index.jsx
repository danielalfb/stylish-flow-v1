import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AddServiceModal from '../../components/AddServiceModal';
import SoldServicesTabs from '../../components/SoldServicesTabs';
import { api } from '../../service/api';
import { useService } from '../../context/Services';

function SoldServices() {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const { loadData } = useService();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 4
        }}
      >
        <Typography color="primary" variant="h1">
          Hoje, {todaysDate.getDate()}/{todaysDate.getMonth() + 1}/
          {todaysDate.getFullYear()}
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
