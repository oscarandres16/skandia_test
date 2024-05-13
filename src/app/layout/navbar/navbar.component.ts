import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MenuItem } from '../../interfaces/navbar.interface';

/**
 * Componente que muestra la barra de navegación de la aplicación.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  /**
   * Indica si el menú lateral está expandido.
   */
  public sidenavExpanded: boolean = false;
  /**
   * Items del menú.
   */
  public menuItems: MenuItem[] = [];
  /**
   * Item seleccionado del menú.
   */
  public selectedMenuItem: MenuItem | null = null;

  /**
   * Constructor del componente.
   * @param {Router} router - Servicio de enrutamiento
   */
  constructor(private router: Router) {}

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    this.getMenuItems();
  }

  /**
   * Obtiene los items del menú.
   */
  private getMenuItems(): void {
    this.menuItems = [
      {
        id: 1,
        title: 'Inicio',
        iconUrl: '/assets/imgs/svgs/home.svg',
        route: '/',
      },
      {
        id: 2,
        title: 'Contratos',
        iconUrl: '/assets/imgs/svgs/hoja1.svg',
        route: '#',
      },
      {
        id: 3,
        title: 'Acciones',
        iconUrl: '/assets/imgs/svgs/Tool.svg',
        route: '#',
      },
      {
        id:4,
        title: 'Objetivos',
        iconUrl: '/assets/imgs/svgs/star.svg',
        route: '#',
      },
      {
        id: 5,
        title: 'Herramientas',
        iconUrl: '/assets/imgs/svgs/money.svg',
        route: '#',
      },
      {
        id: 6,
        title: 'Servicio al cliente',
        iconUrl: '/assets/imgs/svgs/talk2.svg',
        route: '#',
      }
    ];
    this.selectedMenuItem = this.menuItems[0];
  }

  /**
   * Navega a la ruta del item del menú.
   * @param {MenuItem} menuItem - Item del menú
   */
  public navigateTo(menuItem: MenuItem) {
    this.selectedMenuItem = menuItem;
    this.sidenavExpanded = false;
    this.router.navigate([menuItem.route]);
  }
}
