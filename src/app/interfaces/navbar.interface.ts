/**
 * Item del menú
 */
export interface MenuItem {
  /**
   * Identificador del item
   */
  id: number;
  /**
   * Título del item
   */
  title: string;
  /**
   * URL del icono
   */
  iconUrl: string;
  /**
   * Ruta del item
   */
  route: string;
}
