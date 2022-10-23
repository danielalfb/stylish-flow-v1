import * as React from 'react';

import TextField from '@mui/material/TextField';
import { useService } from '../../context/Services';
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

export default function FilterByDate() {
  const [openModal, setOpenModal] = React.useState(false);
  const [sentDate, setSentDate] = React.useState(null);
  const { dateToFilter, setDateToFilter, loadHistoryData } = useService();

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleDelete = () => {
    setDateToFilter(null);
    setSentDate(null);
    setOpenModal(false);
  };

  const handleSubmitFilter = () => {
    loadHistoryData();
    setSentDate(dateToFilter);
    setOpenModal(false);
  };

  return (
    <>
      {!sentDate ? (
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => setOpenModal(true)}
          sx={{ fontSize: 12 }}
        >
          Filtro
        </Button>
      ) : (
        <Chip
          label={
            new Date(sentDate)
              .toLocaleString('pt-PT', { timeZone: 'UTC' })
              .split(',')[0]
          }
          onDelete={handleDelete}
          color="primary"
          sx={{ borderRadius: '4px' }}
        />
      )}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle color="primary">Filtrar por</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: '16px!important' }}>
            Selecione uma data para filtrar os serviços
          </DialogContentText>
          <TextField
            id="date"
            type="date"
            value={dateToFilter}
            onChange={(e) => setDateToFilter(e.target.value)}
            sx={{ width: '100%' }}
            InputLabelProps={{
              shrink: true
            }}
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit" color="secondary" onClick={handleSubmitFilter}>
            Filtrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
