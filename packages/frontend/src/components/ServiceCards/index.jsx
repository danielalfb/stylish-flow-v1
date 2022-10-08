import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import SoldServiceCard from './SoldServiceCard';

export default function ServiceCards({ serviceType }) {
  return (
    // <Box
    //   sx={{
    //     width: '100%',
    //     display: 'flex',
    //     alignItems: 'center',
    //     flexWrap: 'wrap'
    //   }}
    // >
    //   {serviceType.map((service, index) => {
    //     return <SoldServiceCard service={service} />;
    //   })}
    // </Box>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      {serviceType.map((service, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <SoldServiceCard service={service} />
        </Grid>
      ))}
    </Grid>
  );
}
