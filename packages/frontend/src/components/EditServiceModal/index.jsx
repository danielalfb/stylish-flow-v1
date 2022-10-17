import { useState } from 'react';
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
import SingleSelectTask from '../ServiceManagementInputs/SingleSelectTask';
import { useService } from '../../context/Services';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const initialValue = {
  description: '',
  employee: '',
  comment: '',
  updatedAt: new Date()
};

export default function EditServiceModal({ service, isActive }) {
  const { loadData } = useService();
  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState(initialValue);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setTask(initialValue);
    setOpenModal(false);
  };

  const handleEditService = async () => {
    try {
      await api.put(`/services/${service.id}`, {
        ...service,
        status: 'ACTIVE',
        tasks: [...service.tasks, task]
      });
      setOpenModal(false);
      loadData();
      setTask(initialValue);
      toast.success('Serviço editado com sucesso.');
    } catch (error) {
      console.log(error);
      toast.error('Falha na edição do serviço.');
    }
  };

  return (
    <>
      {isActive ? (
        <Button
          color="primary"
          variant="contained"
          size="small"
          disableElevation
          onClick={() => setOpenModal(true)}
        >
          <SkipNextIcon fontSize="small" />
        </Button>
      ) : (
        <Button
          color="secondary"
          size="small"
          onClick={() => setOpenModal(true)}
        >
          Iniciar
        </Button>
      )}
      {openModal && (
        <Dialog fullWidth open={openModal} maxWidth="sm">
          <DialogTitle color="primary">
            {isActive ? 'Atualizar serviço' : 'Iniciar serviço'}
          </DialogTitle>
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
            <CommentsTextArea
              value={task.comment}
              handleChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button
              disabled={task.description === '' || task.employee === ''}
              onClick={handleEditService}
            >
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
