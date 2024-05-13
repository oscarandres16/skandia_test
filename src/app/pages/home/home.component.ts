import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CardComponent } from '../../components/card/card.component';
import { NewProductSectionComponent } from '../../components/new-product-section/new-product-section.component';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

/**
 * Componente que muestra la página de inicio de la aplicación.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CurrencyPipe,
    CardComponent,
    NewProductSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  /**
   * Lista de productos.
   */
  public products: Product[] = [];
  /**
   * Opciones personalizadas del carrusel.
   */
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    fluidSpeed: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 0.75,
      },
      350: {
        items: 1,
      },
      400: {
        items: 1.1,
      },
      600: {
        items: 1.5,
      },
      700: {
        items: 1.8,
      },
      750: {
        items: 2,
      },
      800: {
        items: 2.2,
      },
      900: {
        items: 2.5,
      },
      1000: {
        items: 2.8,
      },
      1200: {
        items: 3.2,
      },
      1400: {
        items: 3.8,
      },
      1600: {
        items: 4.5,
      },
      1800: {
        items: 5,
      },
    },
    nav: true,
    navText: ['<', '>'],
  };
  /**
   * Indica si se muestra el producto nuevo.
   */
  public showNewProduct: boolean = false;

  /**
   * Constructor del componente.
   * @param {ProductsService} productsService - Servicio de productos.
   */
  constructor(private productsService: ProductsService) {}

  /**
   * Inicialización del componente.
   */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Obtiene los productos.
   */
  private getProducts(): void {
    this.products = [];
    const newProduct: Product = {
      nameProduct: '',
      numberProduct: '',
      balanceProduct: '',
      detaildProduct: '',
      productType: 'new',
    };
    this.productsService
      .getProducts()
      ?.subscribe((products: { listCard: Product[] }) => {
        this.products = products.listCard;
        this.products.push(newProduct);
      });
  }

  /**
   * Selecciona o deselecciona el producto.
   * @param {boolean} $event - Evento de cambio de tarjeta.
   * @param {number} index - Índice de la tarjeta.
   */
  public cardChange($event: boolean, index: number): void {
    this.products[index].selected = $event;
    if(this.products[index].productType === 'new') {
      this.showNewProduct = !this.showNewProduct;
    }
  }

  /**
   * Método llamado para validar si el botón de asociar está deshabilitado.
   * @returns {boolean} - Indica si el botón de asociar está deshabilitado.
   */
  public isAsociarButtonDisabled(): boolean {
    return this.products.filter((product) => product.selected).length === 0;
  }
}
