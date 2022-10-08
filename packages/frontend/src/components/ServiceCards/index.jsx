import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import SoldServiceCard from './SoldServiceCard';

export default function ServiceCards({ serviceType }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
      alignItems="stretch"
    >
      {serviceType.map((service, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <SoldServiceCard service={service} />
        </Grid>
      ))}
    </Grid>
  );
}
