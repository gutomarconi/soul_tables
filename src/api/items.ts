import axios from "axios";
import { IItem, TagIds } from '../types/types';

export const fetchItems = async (idTag: TagIds): Promise<IItem[]> => {
  const baseDomain = process.env.BACKEND_API_DOMAIN || '';
  const productApi = 'produtos.pesquisa.php';

  const { data } = await axios.post(baseDomain, {
    endpoint: productApi,
    params: `idTag=${idTag}`
  });

  return data.produtos.map(({ produto: { id, nome, preco }}: { produto: { id: number, nome: string, preco: number }}) => ({
    id,
    price: preco,
    label: nome,
    quantity: 0,
  }));
}
