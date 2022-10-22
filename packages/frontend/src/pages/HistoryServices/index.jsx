import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AddServiceModal from '../../components/AddServiceModal';
import { useService } from '../../context/Services';
import HistoryTable from '../../components/HistoryTable';
import FilterByDate from '../../components/HistoryTable/FilterByDate';

const HistoryServices = () => {
  const { loadHistoryData, loading, allServices } = useService();

  // useEffect(() => {
  //   loadHistoryData();
  // }, []);

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
        <FilterByDate />
      </Box>
      <Box>
        <HistoryTable rows={allServices} loading={loading} />
      </Box>
    </>
  );
};

export default HistoryServices;
