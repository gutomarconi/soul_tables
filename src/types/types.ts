export enum TagIds {
  Food = 768744389,
  Drink = 768744459,
  Extra = 768744475,
}

export const PDV_MARKER = 'Espera PDV';

export const TABLES_IDENTIFIER = 'mesa';

export interface IOrder {
  table: ITable,
  items: IItem[]
}
export interface IPendingOrders {
  table: string,
  total: number,
  id: number,
}

export interface IItem {
  label: string,
  price: number,
  id: number,
  quantity: number;
}

export interface ITable {
  id: number,
  label: string,
}