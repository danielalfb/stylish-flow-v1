import { useState } from 'react';
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
import SingleSelectSeller from './SingleSelectSeller';
import SingleSelectPayment from './SingleSelectPayment';
import CommentsTextArea from '../CommentsTextArea';
import TotalPriceCard from './TotalPriceCard';
import { useEffect } from 'react';
import { serviceOptions } from '../../util/ServiceOptions';

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

  const handleChange = (e) => {
    setClient({ ...client, [e.target.id]: e.target.value });
  };

  const handleSubmitService = async () => {
    const reqBody = {
      ...soldService,
      client,
      services,
      price: totalPrice,
      comment
    };
    const { data } = await api.post('/services', reqBody);
    // console.log(reqBody);
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
          <Grid container spacing={2} rowSpacing={2}>
            <Grid container item xs={6}>
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
            <Grid container item xs={6}>
              <TextField
                autoFocus
                fullWidth
                variant="outlined"
                id="phone"
                label="Telefone"
                type="text"
                size="small"
                value={client.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid container item xs={6}>
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
            <Grid container item xs={6}>
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
            <Grid container item xs={6}>
              <SingleSelectSeller
                soldService={soldService}
                setSoldService={setSoldService}
              />
            </Grid>
            <Grid container item xs={6}>
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
          <CommentsTextArea comment={comment} setComment={setComment} />
          <TotalPriceCard value={totalPrice} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
          <Button onClick={handleSubmitService} disabled={totalPrice === 0}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
