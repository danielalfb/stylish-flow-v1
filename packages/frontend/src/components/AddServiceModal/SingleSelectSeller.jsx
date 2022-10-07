import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const servicesOptions = ['Jessica', 'Diogo', 'Caio', 'Matheus'];

export default function SingleSelectSeller({ soldService, setSoldService }) {
  const handleChange = (e) => {
    setSoldService({ ...soldService, [e.target.name]: e.target.value });
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Vendedor(a)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="seller"
        name="seller"
        value={soldService.seller}
        label="Vendedor(a)"
        onChange={handleChange}
      >
        {servicesOptions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
