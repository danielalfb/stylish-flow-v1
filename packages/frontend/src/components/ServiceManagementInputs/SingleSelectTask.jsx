import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { defaultTasks } from '../../util/ServiceOptions';

export default function SingleSelectTask({ value, handleChange }) {
  return (
    <FormControl fullWidth size="small" required>
      <InputLabel id="demo-simple-select-label">Tarefa</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="description"
        name="description"
        value={value}
        label="Tarefa"
        onChange={handleChange}
      >
        {defaultTasks.map((task) => (
          <MenuItem key={task.id} value={task.description}>
            {task.description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
