import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const paymentOptions = [
  'Cartão de Crédito',
  'Cartão de Débito',
  'Dinheiro',
  'Vale'
];

export default function SingleSelectPayment({ soldService, setSoldService }) {
  const handleChange = (e) => {
    setSoldService({ ...soldService, [e.target.name]: e.target.value });
  };
  return (
    <FormControl fullWidth size="small" required>
      <InputLabel sx={{ m: 0 }} id="demo-simple-select-label">
        Pagamento
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="payment"
        name="payment"
        value={soldService.payment}
        label="Pagamento"
        onChange={handleChange}
      >
        {paymentOptions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
