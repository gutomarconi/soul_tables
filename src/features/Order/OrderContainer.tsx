import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../api';
import { IOrder } from '../../types/types';
import { OrderForm } from '../commons/OrderForm';

export const OrderContainer: FC = () => {
  const [order, setOrder] = useState<IOrder>()
  const param = useParams<{ id: string }>();
  useEffect(() => {
    (async () => {
      const order = await getOrder(Number(param.id));
      setOrder(order);
    })();
  }, []);

  return (
    <div>
      <OrderForm order={order} />
    </div>
  )
}

