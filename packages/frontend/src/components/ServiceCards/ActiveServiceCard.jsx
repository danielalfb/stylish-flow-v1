import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textTransform } from '@mui/system';
import { Chip, Divider, Grid } from '@mui/material';
import EditServiceModal from '../EditServiceModal';
import CancelServiceModal from '../CancelServiceModal';

export default function ActiveServiceCard({ service }) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              sx={{ fontSize: 20, fontWeight: 600 }}
              color="text"
              gutterBottom
            >
              {service.client.plate}
            </Typography>
            <Typography sx={{ fontSize: 20 }} color="text" gutterBottom>
              {service.client.model}
            </Typography>
          </Box>
        </Grid>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            marginTop: 2
          }}
        >
          <Typography variant="h6">
            {service.tasks[service.tasks.length - 1].description}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            {service.tasks[service.tasks.length - 1].employee}
          </Typography>
          {service.services.map((item, index) => (
            <Typography sx={{ fontSize: 14 }} key={index}>
              {item}
            </Typography>
          ))}
        </Box>
      </CardContent>
      {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        {service.status !== 'CANCELED' && service.status !== 'FINISHED' && (
          <CancelServiceModal service={service} />
        )}
        {isPending && <EditServiceModal service={service} />}
      </CardActions> */}
    </Card>
  );
}
