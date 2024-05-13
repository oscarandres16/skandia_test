import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

/**
 * Servicio que maneja la lógica de la página de inicio.
 */
@Injectable({
  providedIn: 'root',
})
export class HomeService {
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
}
