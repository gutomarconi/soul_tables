import React, { FC } from 'react';
import { Container, Summary, Table } from './Card.styled';
import { useHistory } from 'react-router-dom';

export interface ICardProps {
  table: string;
  total: number;
  totalItems: number;
  id: number;
}

export const Card: FC<ICardProps> = ({ table, total, totalItems, id }) => {
  const { push } = useHistory();
  
  const handleCardClick = () => {
    push(`/order/${id}/edit`)
  };

  return (
    <Container onClick={handleCardClick}>
      <Table>{table}</Table>
      <Summary>
        <span>{`Total: R$ ${total}`}</span>
        <span>{`Total de items: ${totalItems}`}</span>
      </Summary>
    </Container>
  )
}