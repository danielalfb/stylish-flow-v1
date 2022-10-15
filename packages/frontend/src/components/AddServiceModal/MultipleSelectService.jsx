import { useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { serviceOptions } from '../../util/ServiceOptions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function MultipleSelectService({ services, setServices }) {
  const handleChange = (e) => {
    const {
      target: { value }
    } = e;
    setServices(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <FormControl sx={{ width: '100%', marginTop: 2 }} required>
        <InputLabel id="demo-multiple-chip-label">Serviços</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          label="Serviços"
          value={services}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Serviços" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {serviceOptions?.map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
