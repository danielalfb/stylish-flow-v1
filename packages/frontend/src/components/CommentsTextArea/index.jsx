import { Box, TextField } from '@mui/material';

export default function CommentsTextArea({ comment, setComment }) {
  return (
    <Box sx={{ width: '100%', marginTop: 1 }}>
      <TextField
        autoFocus
        fullWidth
        multiline
        variant="outlined"
        margin="dense"
        id="phone"
        label="Observações"
        type="text"
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </Box>
  );
}
