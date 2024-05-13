/**
 * Producto financiero
 */
export interface Product {
  /**
   * Nombre del producto
   */
  nameProduct: string;
  /**
   * Número de producto
   */
  numberProduct: string;
  /**
   * Saldo del producto
   */
  balanceProduct: string;
  /**
   * Detalle del producto
   */
  detaildProduct: string;
  /**
   * Indica si el producto está seleccionado
   */
  selected?: boolean;
  /**
   * Tipo de producto
   */
  productType?: 'ahorro' | 'inversion' | 'credito' | 'new';
}
