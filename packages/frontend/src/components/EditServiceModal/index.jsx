import { useState, useEffect, useId } from 'react';
import {
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid
} from '@mui/material';
import CommentsTextArea from '../CommentsTextArea';
import SingleSelectEmployee from '../ServiceManagementInputs/SingleSelectEmployee';
import { toast } from 'react-toastify';
import { api } from '../../service/api';
import { v4 as uuid } from 'uuid';
import SingleInputLocation from '../ServiceManagementInputs/SingleInputLocation';
import SingleSelectTask from '../ServiceManagementInputs/SingleSelectTask';

export default function EditServiceModal({ service }) {
  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState({
    description: '',
    employee: '',
    comment: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleEditService = async () => {
    try {
      await api.put(`/services/${service.id}`, {
        ...service,
        status: 'ACTIVE',
        tasks: [task]
      });
      setOpenModal(false);
      toast.success('Serviço editado com sucesso.');
    } catch (error) {
      console.log(error);
      toast.error('Falha na edição do serviço.');
    }
  };

  return (
    <>
      <Button color="secondary" size="small" onClick={() => setOpenModal(true)}>
        Iniciar
      </Button>
      <Dialog
        fullWidth
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
      >
        <DialogTitle color="primary">Iniciar serviço</DialogTitle>
        <DialogContent sx={{ paddingTop: '16px!important' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            columns={{ xs: 1, sm: 3, md: 12 }}
          >
            <Grid item xs={2} sm={6} md={6}>
              <SingleSelectEmployee
                value={task.employee}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <SingleSelectTask
                value={task.description}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <CommentsTextArea value={task.comment} handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
          <Button onClick={handleEditService}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
