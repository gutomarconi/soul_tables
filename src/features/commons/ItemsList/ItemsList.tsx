import React, { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

export const ItemsList: FC<{ name: string; value: number; }> = ({ name }) => {
  return (
    <FormControlLabel control={<Checkbox />} label={name} />
  )
}