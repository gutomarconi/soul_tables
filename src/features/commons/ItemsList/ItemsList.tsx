import React, { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { IItem } from '../../../types/types';
import { ButtonVariant } from '../../../components/Button';
import { ButtonStyled, Container, Quantity, QuantityWrapper } from './ItemsList.styled';

export const ItemsList: FC<{ item: IItem, onChange: (item: IItem, checked: boolean) => void, checked?: boolean }> = ({ item, onChange, checked }) => {
  return (
    <Container>
      <FormControlLabel
        sx={{ '& .MuiTypography-root': { minWidth: 205 } }}
        control={
          <Checkbox 
            checked={checked}  
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
              onChange({ ...item, quantity: checked ? 1 : 0 }, checked)
            }} 
          />} 
        label={item.label} 
      />
      <QuantityWrapper>
        <Quantity>{Math.floor(item.quantity).toPrecision(1)}</Quantity>
        <ButtonStyled variant={ButtonVariant.Primary} icon='Plus' disabled={!checked} onClick={() => onChange({ ...item, quantity: item.quantity++ }, true)} />
        <ButtonStyled variant={ButtonVariant.Primary} icon='Minus' disabled={!checked} onClick={() => onChange({ ...item, quantity: item.quantity-- }, item.quantity > 0)} />
      </QuantityWrapper>
    </Container>
  )
}