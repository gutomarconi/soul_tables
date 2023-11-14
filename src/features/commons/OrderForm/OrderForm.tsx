import { FormControl, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { ItemsList } from '../ItemsList';
import { Container, GroupLabel, ItemsWrapper, ListWrapper, Table } from './OrderForm.styled';
import { Button, ButtonVariant } from '../../../components/Button';
import { createUpdateOrder, fetchItems, fetchTables } from '../../../api';
import { IItem, IOrder, ITable, TagIds } from '../../../types/types';
import { useHistory } from 'react-router-dom';
import { ButtonStyled } from '../ItemsList/ItemsList.styled';

interface IItemsList {
  foods: IItem[],
  drinks: IItem[],
  extras: IItem[],
  tables: ITable[],
}

const EmptyOrder = {
  items: [],
  table: {
    id: 0,
    label: '',
  }
};

export const OrderForm: FC<{ order?: IOrder }> = ({ order = EmptyOrder}) => {
  const { push } = useHistory();
  const [currentOrder, setCurrentOrder] = useState<IOrder>(order);
  const [itemsList, setItemsList] = useState<IItemsList>({
    foods: [],
    drinks: [],
    extras: [],
    tables: []
  });

  useEffect(() => setCurrentOrder(order) , [order])

  const handleTableChange = (event: SelectChangeEvent<ITable>) => {
    setCurrentOrder(v => ({
      ...v,
      table: { ...event.target.value as ITable }
    }))
  };

  const handleItemsChange = (item: IItem, checked: boolean) => {
    var newItems = [...currentOrder.items];
    if (checked) newItems.push(item)
    else newItems = newItems.filter(({ id }) => item.id !== id);
    setCurrentOrder(v => ({
      ...v,
      items:[ ...newItems]
    }))
  }

  const handleSave = async () => {
    const response = await createUpdateOrder(currentOrder);
    if (response === 'OK') push('/');
  }

  useEffect(() => {
    (async () => {
      const [foods, drinks, extras, tables] = await Promise.all([
        fetchItems(TagIds.Food),
        fetchItems(TagIds.Drink),
        fetchItems(TagIds.Extra),
        fetchTables()
      ]);
      setItemsList({
        foods,
        drinks,
        extras,
        tables
      })
    })();
  }, []);

  const { foods, drinks, extras, tables } = itemsList;
  const OptionGroups = [
    { label: 'Comidas', items: foods },
    { label: 'Bebidas', items: drinks },
    { label: 'Adicionais', items: extras }
  ]

  const { items: currentItems, table } = currentOrder;
  const isOrderValid = currentItems.length > 0 && !!table.id;
  
  return (
    <Container>
      <Button 
        variant={ButtonVariant.Primary} 
        active 
        disabled={!isOrderValid}
        onClick={handleSave}
      >
        Salvar
      </Button>
      <ButtonStyled
        variant={ButtonVariant.Primary} 
        onClick={() => push('/')}
      >
        Voltar
      </ButtonStyled>
      <Table>
        <FormControl fullWidth>
          <InputLabel id="table-select-label">Mesa</InputLabel>
          <Select<ITable>
            labelId="table-select-label"
            id="mesa-select"
            value={table}
            renderValue={(value) => value.label}
            label="Age"
            onChange={handleTableChange}
          >
            {tables.map(table => (
              //@ts-ignore
              <MenuItem key={table.label} value={table}>{table.label}</MenuItem>  
            ))}
          </Select>
        </FormControl>
      </Table>
      <ItemsWrapper>
        {OptionGroups.map(({ label, items }) => (
          <ListWrapper key={label}>
            <GroupLabel>{label}</GroupLabel>
            <FormGroup>
              {items.map(item => {
                const currentItem = currentItems.find(currentItem => currentItem.id === item.id);
                return <ItemsList item={!!currentItem ? currentItem : item} onChange={(item, checked) => handleItemsChange(item, checked)} checked={!!currentItem} />
              })}
            </FormGroup>
          </ListWrapper>
        ))}
      </ItemsWrapper>
    </Container>
  )
}