import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {
  Typography,
  CardContent,
  CardActions,
  Chip,
  Divider,
  Grid,
  Button,
  IconButton
} from '@mui/material';
import EditServiceModal from '../EditServiceModal';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import FinishServiceModal from '../FinishServiceModal';

export default function ActiveServiceCard({ service }) {
  const itemsStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  };

  return (
    <>
      <Card sx={{ width: '100%', height: '100%' }}>
        <CardContent>
          <Grid
            container
            justifyContent="space-between"
            sx={{ alignItems: 'center' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                sx={{ fontSize: '1rem', fontWeight: 600 }}
                color="text"
                gutterBottom
              >
                {service.client.plate}
              </Typography>
              <Typography sx={{ fontSize: '1rem' }} color="text" gutterBottom>
                {service.client.model}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: '6px 0'
              }}
            >
              <Button
                color="primary"
                variant="contained"
                size="small"
                disableElevation
              >
                <ForumIcon fontSize="small" />
              </Button>
              {service.tasks[service.tasks.length - 1].description ===
              'Aguardando Entrega' ? (
                <FinishServiceModal service={service} />
              ) : (
                <EditServiceModal service={service} isActive />
              )}
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
            <Typography
              variant="h6"
              sx={{
                ...itemsStyles,
                fontSize: '1.1rem',
                bottom: 0
              }}
            >
              <FormatListBulletedIcon fontSize="inherit" color="secondary" />
              {service.tasks[service.tasks.length - 1].description}
            </Typography>
            <Typography sx={{ ...itemsStyles, fontSize: '0.9rem' }}>
              <PersonIcon fontSize="inherit" color="text" />
              {service.tasks[service.tasks.length - 1].employee}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem',
                marginTop: 1,
                padding: 1,
                backgroundColor: '#f8f8f8',
                borderRadius: 1,
                border: '1px solid #eee'
              }}
            >
              {service.comment}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                marginTop: 2
              }}
            >
              {service.services.map((item, index) => (
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    padding: '4px 8px',
                    backgroundColor: '#6B7280',
                    borderRadius: 6,
                    color: '#fff'
                  }}
                  key={index}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
