import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private productsTypes: string[] = ['ahorro', 'inversion', 'credito'];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ listCard: Product[] }> {
    return this.http
      .get<{ listCard: Product[] }>(
        'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards'
      )
      .pipe(
        tap((products) => {
          if (products?.listCard?.length === 0) {
            console.log('No products found');
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
