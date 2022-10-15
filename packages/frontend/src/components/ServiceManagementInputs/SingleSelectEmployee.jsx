import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { employeeOptions } from '../../util/ServiceOptions';

export default function SingleSelectEmployee({ value, handleChange, error }) {
  return (
    <FormControl fullWidth size="small" required>
      <InputLabel id="demo-simple-select-label">Colaborador(a)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="seller"
        name="employee"
        value={value}
        defaultValue=""
        label="Colaborador(a)"
        onChange={handleChange}
      >
        {employeeOptions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
