import { useState } from 'react';
import {
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Box
} from '@mui/material';
import MultipleSelectService from './MultipleSelectService';

const DefaultTasks = () => {
  return [
    {
      id: 1,
      status: 'NOT_INITIATED',
      service: 'Aguardando',
      location: 0
    },
    {
      id: 2,
      status: 'NOT_INITIATED',
      service: 'Lavagem',
      location: 0
    },
    {
      id: 3,
      status: 'NOT_INITIATED',
      service: 'Acabamento',
      location: 0
    },
    {
      id: 4,
      status: 'NOT_INITIATED',
      service: 'Especial',
      location: 0
    }
  ];
};

export default function AddServiceModal() {
  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState({
    clientName: '',
    phone: '',
    plate: '',
    model: ''
  });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        CADASTRAR SERVIÇO
      </Button>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="md"
      >
        <DialogTitle color="primary">Novo serviço</DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              fullWidth
              autoFocus
              variant="outlined"
              margin="dense"
              id="client"
              label="Cliente"
              type="text"
              value={client.name}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              fullWidth
              variant="outlined"
              margin="dense"
              id="phone"
              label="Telefone"
              type="text"
              value={client.phone}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              fullWidth
              variant="outlined"
              margin="dense"
              id="plate"
              label="Placa"
              type="text"
              value={client.plate}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              fullWidth
              variant="outlined"
              margin="dense"
              id="model"
              label="Modelo"
              type="text"
              value={client.model}
              onChange={handleChange}
            />
          </Box>
          <MultipleSelectService />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
          <Button onClick={() => setOpenModal(false)}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
