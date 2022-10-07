import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export default function TotalPriceCard({ value }) {
  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Card
        sx={{ height: '100%', backgroundColor: ' #F8F8F8' }}
        variant="outlined"
      >
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingBottom: 0
          }}
        >
          <Typography color="text">Valor Cobrado</Typography>
          <Typography color="primary" variant="h5" component="div">
            {value} €
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
