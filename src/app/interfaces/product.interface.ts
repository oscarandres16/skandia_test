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

/**
 * Información de la tarjeta de un nuevo producto
 */
export interface NewProductCardInfo {
  /**
   * Code
   */
  code: string;
  /**
   * Imagen del producto
   */
  image: string;
  /**
   * Etiqueta del tipo de producto
   */
  productTypeLabel: string;
  /**
   * Descripción del producto
   */
  description: string;
  /**
   * Botón de acción
   */
  redirection: Redirection;
  /**
   * Texto de ayuda
   */
  helpTexts: HelpText[];
  /**
   * Indica si el producto es favorito
   */
  favorite?: boolean;
  /**
   * Tipo de producto
   */
  productType?: 'ahorro' | 'inversion' | 'credito' | 'new';
}

/**
 * Redirección
 */
export interface Redirection {
  /**
   * Texto del botón
   */
  text: string;
  /**
   * URL de redirección
   */
  url: string;
}

/**
 * Texto de ayuda
 */
export interface HelpText {
  /**
   * Texto de ayuda
   */
  helpText: string;
  /**
   * Icono de ayuda
   */
  helpIcon: string;
}
