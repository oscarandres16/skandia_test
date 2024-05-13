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
        title: 'Home',
        iconUrl: '../../../assets/imgs/svgs/home.svg',
        route: '/',
      },
      // {
      //   id: 2,
      //   title: 'About',
      //   iconUrl: 'info',
      //   route: '/about',
      // },
      // {
      //   id: 3,
      //   title: 'Contact',
      //   iconUrl: 'contact',
      //   route: '/contact',
      // },
    ];
    this.selectedMenuItem = this.menuItems[0];
  }

  /**
   * Navega a la ruta del item del menú.
   * @param {MenuItem} menuItem - Item del menú
   */
  public navigateTo(menuItem: MenuItem) {
    this.selectedMenuItem = menuItem;
    this.router.navigate([menuItem.route]);
  }
}
