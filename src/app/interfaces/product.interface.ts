export interface Product {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
  selected?: boolean;
  productType?: 'ahorro' | 'inversion' | 'credito' | 'new';
}
