import React, { FC, useEffect } from 'react';
import { fetchItems } from '../../api/items';
import { TagIds } from '../../types/types';
import { OrderForm } from '../commons/OrderForm';

export const NewOrderContainer: FC = () => {
  // useEffect(() => {
  //   (async () => {
  //     await fetchItems(TagIds.Food);
  //   })();
  // }, []);

  return (
    <div>
      <OrderForm />
    </div>
  )
}