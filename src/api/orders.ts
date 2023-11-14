import axios from "axios";
import { IOrder, IPendingOrders, PDV_MARKER } from '../types/types';

export const fetchOrders = async (): Promise<IPendingOrders[]> => {
  const baseDomain = process.env.BACKEND_API_DOMAIN || '';
  const productApi = 'pedidos.pesquisa.php';

  const { data } = await axios.post(baseDomain, {
    endpoint: productApi,
    params: `marcador=${PDV_MARKER}`
  });
  if (data.status === 'Erro') return [];
  return data.pedidos.map(({ pedido: { nome, id, valor } }: { pedido: { nome: string; id: number; valor: number; } }) => ({
    table: nome,
    id: id,
    total: valor,
  }));
}

export const getOrder = async (id: number): Promise<IOrder> => {
  const baseDomain = process.env.BACKEND_API_DOMAIN || '';
  const productApi = 'pdv.pedido.obter.php';

  const { data } = await axios.post(baseDomain, {
    endpoint: productApi,
    params: `id=${id}`
  });

  const { pedido: { contato, itens } } = data;

  const items = itens.map((item: any) => ({
    label: item.descricao,
    price: item.valor,
    id: item.idProduto,
    quantity: item.quantidade
  }))

  return {
    table: {
      id: contato.codigo,
      label: contato.nome, 
    },
    items
  };
}

export const createUpdateOrder = async (order: IOrder) => {
  const baseDomain = process.env.BACKEND_API_DOMAIN || '';
  const productApi = 'pedido.incluir.php';

  const items = order.items.map(item => ({
    item: {
      codigo: item.id,
      descricao: item.label,
      quantidade: item.quantity,
      valor_unitario: item.price
    }
  }));

  const orderObject = {
    pedido: {
      data_pedido: Date.now(),
      cliente: {
        codigo: order.table.id,
        nome: order.table.label,
      },
      itens: items,
      marcadores: [
        {
          marcador: {
            descricao: "Espera PDV"
          }
        }
      ], 
      situacao: "Aberto"
    }
  }

  const { data } = await axios.post(baseDomain, {
    endpoint: productApi,
    params: `pedido=${JSON.stringify(orderObject)}`
  });

  return data.status;
} 