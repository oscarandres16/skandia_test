import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { NewProductCardInfo, Product } from '../interfaces/product.interface';

/**
 * Servicio que maneja la lógica de la página de inicio.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * Tipos de productos.
   */
  private productsTypes: string[] = ['ahorro', 'inversion', 'credito'];

  /**
   * Constructor del servicio.
   * @param {HttpClient} http - Servicio de HTTP
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene los productos.
   * @returns {Observable<{ listCard: Product[] }>} - Lista de productos
   */
  public getProducts(): Observable<{ listCard: Product[] }> {
    return this.http
      .get<{ listCard: Product[] }>('/test-front-end-skandia/cards')
      .pipe(
        tap((products) => {
          if (products?.listCard?.length === 0) {
            return;
          } else {
            products.listCard.map((product) => {
              product.productType = this.productsTypes[
                Math.floor(Math.random() * this.productsTypes.length)
              ] as 'ahorro' | 'inversion' | 'credito' | undefined;
            });
          }
        })
      );
  }

  /**
   * Obtiene los productos nuevos.
   */
  public getNewProducts(): Observable<NewProductCardInfo[]> {
    const fakeNewProducts: NewProductCardInfo[] = [
      {
        code: 'AHORRO123',
        productTypeLabel: 'Ahorro e inversión',
        image: '/assets/imgs/pngs/new-product-banner.png',
        description:
          'Fondo de inversión Colectiva, <strong> la acción para potenciar tu capital y hacer real tu objetivo! </strong>',
        redirection: {
          text: 'Conoce más',
          url: 'https://www.skandia.co/skandia-colombia',
        },
        helpTexts: [
          {
            helpIcon: '/assets/imgs/pngs/world.png',
            helpText:
              'Rentabilidades mínimas del <strong>3% anuales</strong>',
          },
          {
            helpIcon: '/assets/imgs/pngs/profile.png',
            helpText:
              '<strong>4000 clientes</strong> confían en este producto',
          },
        ],
        productType: 'ahorro',
      },
      {
        code: 'CREDITO123',
        productTypeLabel: 'Crédito de vivienda',
        image: '/assets/imgs/pngs/new-product-banner.png',
        description:
          '¡Un crédito libre de inversión, <strong> usalo para hacer real eso que tanto quieres! </strong>',
        redirection: {
          text: 'Conoce más',
          url: 'https://www.skandia.co/skandia-colombia',
        },
        helpTexts: [
          {
            helpIcon: '/assets/imgs/pngs/world.png',
            helpText:
              'Rentabilidades mínimas del <strong>3% anuales</strong>',
          },
          {
            helpIcon: '/assets/imgs/pngs/profile.png',
            helpText:
              '<strong>4000 clientes</strong> confían en este producto',
          },
        ],
        productType: 'inversion',
      },
    ];
    return of(fakeNewProducts);
  }
}
