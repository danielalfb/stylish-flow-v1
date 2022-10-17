import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SoldServiceCard from './SoldServiceCard';

export default function ServiceCards({ serviceType }) {
  if (serviceType.length < 1) {
    return (
      <Box>
        <Typography color="text" variant="h2">
          Não há serviços encontrados para esta categoria.
        </Typography>
      </Box>
    );
  }
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
      alignItems="stretch"
    >
      {serviceType.map((service, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <SoldServiceCard
            service={service}
            isPending={service.status === 'NOT_INITIALIZED'}
          />
        </Grid>
      ))}
    </Grid>
  );
}
