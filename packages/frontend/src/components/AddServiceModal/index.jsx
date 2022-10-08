import { useState, useEffect, useId } from 'react';
import {
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Grid
} from '@mui/material';
import MultipleSelectService from './MultipleSelectService';
import SingleSelectPayment from './SingleSelectPayment';
import CommentsTextArea from '../CommentsTextArea';
import TotalPriceCard from './TotalPriceCard';
import { serviceOptions } from '../../util/ServiceOptions';
import { toast } from 'react-toastify';
import { api } from '../../service/api';
import { v4 as uuid } from 'uuid';
import SingleSelectEmployee from '../ServiceManagementInputs/SingleSelectEmployee';
import { useService } from '../../context/Services';

export default function AddServiceModal() {
  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState({
    clientName: '',
    phone: '',
    plate: '',
    model: ''
  });
  const [soldService, setSoldService] = useState({
    seller: '',
    payment: ''
  });
  const [services, setServices] = useState([]);
  const [comment, setComment] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const { loadData } = useService();

  const handleChange = (e) => {
    setClient({ ...client, [e.target.id]: e.target.value });
  };

  const handleSubmitService = async () => {
    try {
      const reqBody = {
        id: uuid(),
        ...soldService,
        client,
        comment,
        price: totalPrice,
        services,
        status: 'NOT_INITIALIZED',
        tasks: [],
        createdAt: new Date()
      };
      await api.post('/services', reqBody);
      setOpenModal(false);
      toast.success('Serviço criado com sucesso.');
      loadData();
    } catch (error) {
      console.log(error);
      toast.error('Falha na criação do serviço.');
    }
  };

  useEffect(() => {
    if (services.length > 0) {
      const selectedService = serviceOptions
        .filter((service) => services.includes(service.description))
        .map((item) => item.price)
        .reduce((acc, crr) => acc + crr);
      setTotalPrice(selectedService);
    } else {
      return setTotalPrice(0);
    }
  }, [services]);

  const handleChangeSeller = (e) => {
    setSoldService({ ...soldService, [e.target.name]: e.target.value });
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        Cadastrar Serviço
      </Button>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="md"
      >
        <DialogTitle color="primary">Novo serviço</DialogTitle>
        <DialogContent sx={{ paddingTop: '16px!important' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 1, sm: 3, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <TextField
                fullWidth
                autoFocus
                variant="outlined"
                id="clientName"
                label="Cliente"
                type="text"
                size="small"
                value={client.clientName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                id="phone"
                label="Telefone"
                type="tel"
                size="small"
                value={client.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                id="plate"
                label="Placa"
                type="text"
                size="small"
                value={client.plate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                id="model"
                label="Modelo"
                type="text"
                size="small"
                value={client.model}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <SingleSelectEmployee
                value={soldService.seller}
                handleChange={handleChangeSeller}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <SingleSelectPayment
                soldService={soldService}
                setSoldService={setSoldService}
              />
            </Grid>
          </Grid>
          <MultipleSelectService
            services={services}
            setServices={setServices}
          />
          <CommentsTextArea
            value={comment}
            handleChange={handleCommentChange}
          />
          <TotalPriceCard value={totalPrice} />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
          <Button
            color="secondary"
            onClick={handleSubmitService}
            disabled={totalPrice === 0}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
