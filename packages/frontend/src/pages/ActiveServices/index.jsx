import React, { useEffect } from 'react';
import { useService } from '../../context/Services';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import ActiveServiceCard from '../../components/ServiceCards/ActiveServiceCard';

function ActiveServices() {
  const { loadData, activeServices } = useService();

  useEffect(() => {
    loadData();
  }, []);

  if (activeServices && activeServices.length < 1) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 5
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: { xs: 350, md: 500 }
          }}
          src="../../public/empty.svg"
        />
        <Typography color="text" variant="h6">
          Não há serviços ativos.
        </Typography>
      </Box>
    );
  }

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
