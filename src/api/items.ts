import axios from "axios";
import { TagIds } from '../types/types';

export const fetchItems = async (idTag: TagIds) => {
  const token = process.env.API_TOKEN;
  const baseDomain = process.env.BACKEND_API_DOMAIN;
  const productApi = 'produtos.pesquisa.php';
  const url = `${baseDomain}${productApi}?formato=json&token${token}&idTag=${idTag}`;

  const { data } = await axios.post(url);

  console.log(data);

}