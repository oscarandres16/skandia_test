import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Link, SocialMediaLink } from '../../interfaces/footer.interface';

/**
 * Componente que muestra el footer de la aplicación.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  /**
   * Lista de links del footer.
   */
  public links: Link[] = [];
  /**
   * Lista de links de redes sociales.
   */
  public socialMediaLinks: SocialMediaLink[] = [];

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    this.getLinks();
    this.getSocialMediaLinks();
  }

  /**
   * Obtiene los links del footer.
   */
  private getLinks(): void {
    this.links = [
      { name: 'Términos y Condiciones Canales de Servicio', url: '#' },
      { name: 'Defensoría del Consumidor Financiero', url: '#' },
      { name: 'Protección de Datos', url: '#' },
      {
        name: 'Definiciones Generales – Auto declaración FATCA y CRS',
        url: '#',
      },
      { name: 'Recomendaciones de Seguridad', url: '#' },
      { name: 'Ley de Transparencia Mapa del sitio', url: '#' },
    ];
  }

  /**
   * Obtiene los links de redes sociales.
   */
  private getSocialMediaLinks() {
    this.socialMediaLinks = [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/SkandiaCol',
        iconUrl: '../../../assets/imgs/svgs/facebookl.svg',
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCBkvnW9tFpaNZaNe8zbxPyg',
        iconUrl: '../../../assets/imgs/svgs/youtube.svg',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/SkandiaCol',
        iconUrl: '../../../assets/imgs/svgs/twitter.svg',
      },
    ];
  }
}
