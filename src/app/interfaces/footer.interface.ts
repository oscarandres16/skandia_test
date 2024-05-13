/**
 * Link de acceso rápido
 */
export interface Link {
  /**
   * Nombre del link
   */
  name: string;
  /**
   * URL del link
   */
  url: string;
}

/**
 * Información de redes sociales
 */
export interface SocialMediaLink {
  /**
   * Nombre de la red social
   */
  name: string;
  /**
   * URL de la red social
   */
  url: string;
  /**
   * URL del icono de la red social
   */
  iconUrl: string;
}
