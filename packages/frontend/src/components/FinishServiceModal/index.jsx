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
import DoneIcon from '@mui/icons-material/Done';

export default function FinishServiceModal({ service }) {
  const { loadData } = useService();
  const [openModal, setOpenModal] = useState(false);

  const handleCancelService = async () => {
    try {
      await api.put(`/services/${service.id}`, {
        ...service,
        status: 'FINISHED'
      });
      setOpenModal(false);
      loadData();
      toast.success('Serviço finalizado com sucesso.');
    } catch (error) {
      console.log(error);
      toast.error('Falha na finalização do serviço.');
    }
  };

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        size="small"
        disableElevation
        onClick={() => setOpenModal(true)}
      >
        <DoneIcon fontSize="small" />
      </Button>
      <Dialog
        fullWidth
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
      >
        <DialogTitle color="primary">Finalizar serviço?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O resumo do serviço estará disponível na página inicial, sob a aba
            de Serviços Concluídos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
          <Button onClick={handleCancelService}>Sim </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
