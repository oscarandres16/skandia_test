import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NewProductCardInfo } from '../../interfaces/product.interface';

/**
 * Componente que muestra una tarjeta con la información de un producto nuevo.
 */
@Component({
  selector: 'app-card-with-image',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './card-with-image.component.html',
  styleUrl: './card-with-image.component.scss',
})
export class CardWithImageComponent implements OnInit {
  /**
   * Información del producto a mostrar.
   */
  @Input() public data: NewProductCardInfo = {} as NewProductCardInfo;
  /**
   * Indica si la tarjeta está seleccionada.
   */
  public selected: boolean = false;
  /**
   * Clases y URL de icono por tipo de producto.
   */
  private productTypeClass: {
    [key: string]: {
      card: string;
      iconUrl?: string;
    };
  } = {
    ahorro: { card: 'primary', iconUrl: '/assets/imgs/svgs/Happy.svg' },
    inversion: {
      card: 'secondary',
      iconUrl: '/assets/imgs/svgs/trofeo.svg',
    },
    credito: {
      card: 'tertiary',
      iconUrl: '/assets/imgs/svgs/hand3.svg',
    },
    new: { card: 'new' },
  };
  /**
   * Clase de la tarjeta.
   */
  public cardClass: string = '';

  /**
   * Constructor del componente.
   */
  constructor() {}

  /**
   * Inicializa el componente.
   */
  ngOnInit(): void {
    this.cardClass =
      this.productTypeClass[this.data.productType || 'new']?.card;
  }
}
