import axios from "axios";
import { ITable } from '../types/types';

export const fetchTables = async (): Promise<ITable[]> => {
  const baseDomain = process.env.BACKEND_API_DOMAIN || '';
  const productApi = 'contatos.pesquisa.php';

  const { data } = await axios.post(baseDomain, {
    endpoint: productApi,
    params: 'pesquisa=mesa'
  });

  return data.contatos.map(({ contato: { id, nome }}: { contato: { id: number, nome: string }}) => ({
    id,
    label: nome,
  }));
}
