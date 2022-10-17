import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AddServiceModal from '../../components/AddServiceModal';
import { useService } from '../../context/Services';

const HistoryServices = () => {
  const { loadHistoryData, loading, allServices } = useService();

  useEffect(() => {
    loadHistoryData();
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
          Histórico de Serviços
        </Typography>
        <AddServiceModal />
      </Box>
    </>
  );
};

export default HistoryServices;
