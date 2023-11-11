import React, { FC } from 'react';
import { Button, ButtonVariant } from '../Button';
import { TIcons } from '../Icon';
import { Container } from './TopBar.styled';
import { useHistory } from 'react-router-dom';

export const TopBar: FC = () => {
  const { push } = useHistory()
  return (
    <Container>
      <Button variant={ButtonVariant.Primary} icon='Plus' iconBefore onClick={() => push('/order/create') }>
        Nova Mesa
      </Button>
    </Container>
  )
}