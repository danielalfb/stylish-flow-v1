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
import { toast } from 'react-toastify';
import { api } from '../../service/api';

export default function CancelServiceModal({ service }) {
  const { loadData } = useService();
  const [openModal, setOpenModal] = useState(false);

  const handleCancelService = async () => {
    try {
      await api.put(`/services/${service.id}`, {
        ...service,
        status: 'CANCELED'
      });
      setOpenModal(false);
      loadData();
      toast.success('Serviço cancelado com sucesso.');
    } catch (error) {
      console.log(error);
      toast.error('Falha no cancelamento do serviço.');
    }
  };

  return (
    <>
      <Button color="secondary" size="small" onClick={() => setOpenModal(true)}>
        CANCELAR serviço
      </Button>
      <Dialog
        fullWidth
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
      >
        <DialogTitle color="primary">Deseja cancelar serviço?</DialogTitle>
        <DialogContent sx={{ paddingTop: '16px!important' }}>
          <DialogContentText id="alert-dialog-description">
            Esta ação é irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Fechar</Button>
          <Button onClick={handleCancelService}>SIM, cancelar </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
