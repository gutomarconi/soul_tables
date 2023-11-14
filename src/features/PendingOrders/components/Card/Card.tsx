import React, { FC } from 'react';
import { Container, Summary, Table } from './Card.styled';
import { useHistory } from 'react-router-dom';

export interface ICardProps {
  table: string;
  total: number;
  id: number;
}

export const Card: FC<ICardProps> = ({ table, total, id }) => {
  const { push } = useHistory();
  
  const handleCardClick = () => {
    push(`/order/${id}/edit`)
  };

  return (
    <Container onClick={handleCardClick}>
      <Table>{table}</Table>
      <Summary>
        <span>{`Total: R$ ${total}`}</span>
      </Summary>
    </Container>
  )
}