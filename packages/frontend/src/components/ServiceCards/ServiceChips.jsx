import { Box, Typography } from '@mui/material';

export default function ServiceChips({ service }) {
  return (
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
  );
}
