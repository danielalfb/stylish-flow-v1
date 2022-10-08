import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { employeeOptions } from '../../util/ServiceOptions';
import { TextField } from '@mui/material';

export default function SingleInputLocation({ value, handleChange }) {
  return (
    <FormControl fullWidth size="small">
      <TextField
        fullWidth
        autoFocus
        variant="outlined"
        id="location"
        label="Vaga"
        type="number"
        size="small"
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
}
