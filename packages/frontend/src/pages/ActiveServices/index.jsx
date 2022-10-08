import React, { useEffect } from 'react';
import { useService } from '../../context/Services';
import { Box, Grid } from '@mui/material';
import ActiveServiceCard from '../../components/ServiceCards/ActiveServiceCard';

function ActiveServices() {
  const { loadData, activeServices } = useService();

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        alignItems="stretch"
      >
        {activeServices.map((service, index) => (
          <Grid item xs={2} sm={4} md={6} key={index}>
            <ActiveServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ActiveServices;
