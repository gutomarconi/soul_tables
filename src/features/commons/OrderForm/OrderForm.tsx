import { FormControl, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC } from 'react';
import { ItemsList } from '../ItemsList';
import { Container, GroupLabel, ItemsWrapper, ListWrapper, Table } from './OrderForm.styled';
import { Button, ButtonVariant } from '../../../components/Button';

const TablesOptions = [
  { label: 'Mesa 1', value: 'Mesa 1' },
  { label: 'Mesa 2', value: 'Mesa 2' },
  { label: 'Mesa 3', value: 'Mesa 3' },
  { label: 'Mesa 4', value: 'Mesa 4' },
  { label: 'Mesa 5', value: 'Mesa 5' },
  { label: 'Mesa 6', value: 'Mesa 6' },
];

const Food = [{ name: 'sandwich', value: 20 }, { name:'biscone', value: 10 }, { name: 'pao de queijo', value: 7 }, { name: 'croissant', value: 15 }];
const Drink = [{ name: 'espresso', value: 20 }, { name:'cappucino', value: 10 }, { name: 'kombucha', value: 7 }, { name: 'water', value: 15 }];
const Extra = [{ name: 'chantily', value: 5 }, { name: 'leite espeicial', value: 2.5 }];

const OptionGroups = [
  {
    label: 'Comidas',
    items: Food,
  },
  {
    label: 'Bebidas',
    items: Drink,
  },
  { 
    label: 'Adicionais',
    items: Extra
  }
]

export const OrderForm: FC<{ order?: any }> = ({ order }) => {
  const [table, setTable] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTable(event.target.value as string);
  };
  
  return (
    <Container>
      <Table>
        <FormControl fullWidth>
          <InputLabel id="table-select-label">Mesa</InputLabel>
          <Select
            labelId="table-select-label"
            id="mesa-select"
            value={table}
            label="Age"
            onChange={handleChange}
          >
            {TablesOptions.map(mesa => (
              <MenuItem key={mesa.label} value={mesa.value}>{mesa.label}</MenuItem>  
            ))}
          </Select>
        </FormControl>
      </Table>
      <ItemsWrapper>
        {OptionGroups.map(({ label, items }) => (
          <ListWrapper key={label}>
            <GroupLabel>{label}</GroupLabel>
            <FormGroup>
              {items.map(item => <ItemsList {...item} />) }
            </FormGroup>
          </ListWrapper>
        ))}
        <ListWrapper>
          <Button variant={ButtonVariant.Primary} active>Salvar</Button>
        </ListWrapper>
      </ItemsWrapper>
    </Container>

  )
}