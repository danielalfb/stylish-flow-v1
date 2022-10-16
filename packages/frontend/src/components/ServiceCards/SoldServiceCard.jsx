import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import EditServiceModal from '../EditServiceModal';
import CancelServiceModal from '../CancelServiceModal';

export default function SoldServiceCard({ service, isPending }) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
        >
          <Box
            sx={{ display: 'flex', alignItems: 'center', fontSize: 16, gap: 1 }}
          >
            <Typography sx={{ fontWeight: 600 }} color="text" gutterBottom>
              {service.client.plate}
            </Typography>
            <Typography color="text" gutterBottom>
              {service.client.model}
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: 10, height: '100%' }}
            color="text.secondary"
            gutterBottom
          >
            {new Date(service.createdAt).toUTCString()}
          </Typography>
        </Grid>

        <Typography
          sx={{ mb: 1.5, textTransform: 'uppercase' }}
          color="text.secondary"
        >
          {service.client.clientName}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1
          }}
        >
          {service.services.map((item, index) => (
            <Chip key={index} label={item} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        {service.status !== 'CANCELED' && service.status !== 'FINISHED' && (
          <CancelServiceModal service={service} />
        )}
        {isPending && <EditServiceModal service={service} />}
      </CardActions>
    </Card>
  );
}
