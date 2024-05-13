import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { GlobalConfigService } from './services/config.service';

/**
 * Componente principal de la aplicación.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /**
   * HostBinding para aplicar modo oscuro.
   */
  @HostBinding('class') className = '';

  /**
   * Constructor del componente.
   * @param homeService - Servicio de la página de inicio
   */
  constructor(private globalConfigService: GlobalConfigService) {}

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    this.globalConfigService.darkMode.subscribe((darkMode) => {
      this.className = darkMode;
    });
  }
}
