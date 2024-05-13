import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Componente que muestra la página de error 404.
 */
@Component({
  selector: 'app-not-found-404',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found-404.component.html',
  styleUrl: './not-found-404.component.scss',
})
export class NotFound404Component {}
