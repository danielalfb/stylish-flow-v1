import { Box, TextField } from '@mui/material';

export default function CommentsTextArea({ value, handleChange }) {
  return (
    <Box sx={{ width: '100%', marginTop: 1 }}>
      <TextField
        autoFocus
        fullWidth
        multiline
        variant="outlined"
        margin="dense"
        id="comment"
        name="comment"
        label="Observações"
        type="text"
        rows={4}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}
