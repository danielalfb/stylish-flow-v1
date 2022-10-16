import { useState } from 'react';
import { useService } from '../../context/Services';
import {
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogContentText,
  Box,
  Grid,
  Divider
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';

export default function AllCommentsModal({ tasks }) {
  const [openModal, setOpenModal] = useState(false);
  const [emptyComments, setEmptyComments] = useState(false);
  const itemsStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  };

  useEffect(() => {
    setEmptyComments(Object.values(tasks).every((task) => task.comment === ''));
  }, []);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="small"
        disableElevation
        onClick={() => setOpenModal(true)}
        disabled={emptyComments}
      >
        <ForumIcon fontSize="small" />
      </Button>
      <Dialog fullWidth open={openModal} maxWidth="sm">
        <DialogTitle color="primary">Observações durante o serviço</DialogTitle>
        <DialogContent sx={{ paddingTop: '16px!important' }}>
          {tasks?.map((task, i) => {
            return (
              <>
                <Box key={i} sx={{ marginBottom: 2 }}>
                  <Grid
                    container
                    justifyContent="space-between"
                    sx={{ alignItems: 'center' }}
                  >
                    <Typography sx={{ ...itemsStyles, fontSize: '0.9rem' }}>
                      <PersonIcon fontSize="inherit" color="secondary" />
                      {task.employee}
                    </Typography>
                    <Typography sx={{ ...itemsStyles, fontSize: '0.7rem' }}>
                      {new Date(task.updatedAt).toUTCString()}
                    </Typography>
                  </Grid>
                  <Divider />
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
                    {task.comment}
                  </Typography>
                </Box>
              </>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
