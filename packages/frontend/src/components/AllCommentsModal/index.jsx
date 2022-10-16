import { useState } from 'react';
import { useService } from '../../context/Services';
import {
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogContentText
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

export default function AllCommentsModal({ tasks }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="small"
        disableElevation
        onClick={() => setOpenModal(true)}
      >
        <ForumIcon fontSize="small" />
      </Button>
      <Dialog fullWidth open={openModal} maxWidth="sm">
        <DialogTitle color="primary">Observações</DialogTitle>
        {/* <DialogContent sx={{ paddingTop: '16px!important' }}>
          <Grid
            container
            justifyContent="space-between"
            sx={{ alignItems: 'center' }}
          ></Grid>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
