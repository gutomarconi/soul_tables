import axios from "axios";
import { PDV_MARKER } from '../types/types';

export const fetchOrders = async () => {
  const token = process.env.API_TOKEN;
  const baseDomain = process.env.BACKEND_API_DOMAIN;
  const productApi = 'pedidos.pesquisa.php';
  const url = `${baseDomain}${productApi}?formato=json&token=${token}&marcador=${PDV_MARKER}`;

  const { data } = await axios.post(url);

  console.log(data);

}

export const getOrder = async (id: number) => {
  const token = process.env.API_TOKEN;
  const baseDomain = process.env.BACKEND_API_DOMAIN;
  const productApi = 'pdv.pedido.obter.php';
  const url = `${baseDomain}${productApi}?formato=json&token=${token}&id=${id}`;

  const { data } = await axios.post(url);

  console.log(data);
}
