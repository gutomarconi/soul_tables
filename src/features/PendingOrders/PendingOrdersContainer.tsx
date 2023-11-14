import React, { FC, useEffect, useState } from 'react';
import { Container, TablesContainer } from './PendingOrdersContainer.styled';
import { Card } from './components/Card';
import { fetchOrders } from '../../api/orders';
import { IPendingOrders } from '../../types/types';
import { Button, ButtonVariant } from '../../components/Button';
import { useHistory } from 'react-router-dom';

export const PendingOrdersContainer: FC = () => {
  const { push } = useHistory();
  const [pendingOrders, setPendingOrders] = useState<IPendingOrders[]>([])
  useEffect(() => {
    (async () => {
      const orders = await fetchOrders();
      setPendingOrders(orders);
    })();
  }, []);

  return (
    <Container>
      <Button variant={ButtonVariant.Primary} icon='Plus' iconBefore onClick={() => push('/order/create') }>
        Nova Mesa
      </Button>
      <TablesContainer>
        {pendingOrders.map(table => (
          <Card key={table.table} {...table} />
        ))}
      </TablesContainer>
    </Container>
  )
}