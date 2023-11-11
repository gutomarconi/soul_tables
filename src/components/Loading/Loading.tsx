import React, { FC } from 'react';
import { Container, Dot } from './Loading.styled';

export const Loading: FC = () => {
  return (
    <Container>
      <Dot />
      <Dot />
      <Dot />
    </Container>
  )
}