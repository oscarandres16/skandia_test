import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from '../../interfaces/navbar.interface';
import { GlobalConfigService } from '../../services/config.service';

/**
 * Componente que muestra la barra de navegación de la aplicación.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    RouterModule,
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
   * Indica si se activa el tema oscuro.
   */
  public toggleDarkTheme: UntypedFormControl = new UntypedFormControl(false);
  /**
   * Tamaño de la pantalla.
   */
  public sizeDisplay: 'phone' | 'web' = 'web';

  /**
   * Constructor del componente.
   * @param {Router} router - Servicio de enrutamiento
   * @param {GlobalConfigService} globalConfigService - Servicio de configuración global
   * @param {BreakpointObserver} breakpointObserver - Observador de cambios en el tamaño de la pantalla
   */
  constructor(
    private router: Router,
    private globalConfigService: GlobalConfigService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.mediaQuery();
  }

  /**
   * Verifica el tamaño de la pantalla.
   */
  mediaQuery() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        this.sizeDisplay = result.matches ? 'phone' : 'web';
      });
  }

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    this.getMenuItems();
    this.toggleDarkTheme.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.globalConfigService.darkMode.next(darkMode ? darkClassName : '');
    });
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
        route: '/home',
      },
      {
        id: 2,
        title: 'Contratos',
        iconUrl: '/assets/imgs/svgs/hoja1.svg',
        route: '/contratos',
      },
      {
        id: 3,
        title: 'Acciones',
        iconUrl: '/assets/imgs/svgs/Tool.svg',
        route: '/acciones',
      },
      {
        id: 4,
        title: 'Objetivos',
        iconUrl: '/assets/imgs/svgs/star.svg',
        route: '/objetivos',
      },
      {
        id: 5,
        title: 'Herramientas',
        iconUrl: '/assets/imgs/svgs/money.svg',
        route: '/herramientas',
      },
      {
        id: 6,
        title: 'Servicio al cliente',
        iconUrl: '/assets/imgs/svgs/talk2.svg',
        route: '/servicio-al-cliente',
      },
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
