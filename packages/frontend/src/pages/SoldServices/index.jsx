import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AddServiceModal from '../../components/AddServiceModal';
import SoldServicesTabs from '../../components/SoldServicesTabs';
import { api } from '../../service/api';

function SoldServices() {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [soldServices, setSoldServices] = useState([]);

  const loadData = async () => {
    const { data } = await api.get('/services');
    console.log(data);
    setSoldServices(data);
  };

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
        <Typography variant="h1">
          Serviços vendidos em {todaysDate.getDate()}/
          {todaysDate.getMonth() + 1}/{todaysDate.getFullYear()}
        </Typography>
        <AddServiceModal />
      </Box>
      <Box>
        <SoldServicesTabs soldServices={soldServices} />
      </Box>
    </>
  );
}

export default SoldServices;
