import React, { FC } from 'react';
import { Container } from './PendingOrdersContainer.styled';
import { Card } from './components/Card';

const mockedTables = [
  {
    table: 'Mesa 1',
    total: 59,
    totalItems: 3,
    id: 1,
  },
  {
    table: 'Mesa 2',
    total: 70,
    totalItems: 4,
    id: 2,
  },
  {
    table: 'Mesa 3',
    total: 25,
    totalItems: 1,
    id: 3,
  },
  {
    table: 'Mesa 4',
    total: 150,
    totalItems: 8,
    id: 4,
  },
  {
    table: 'Mesa 5',
    total: 800,
    totalItems: 5,
    id: 5,
  },
  {
    table: 'Mesa 6',
    total: 7.50,
    totalItems: 1,
    id: 6,
  },

]

export const PendingOrdersContainer: FC = () => {

  return (
    <Container>
      {mockedTables.map(table => (
        <Card key={table.table} {...table} />
      ))}
    </Container>
  )
}