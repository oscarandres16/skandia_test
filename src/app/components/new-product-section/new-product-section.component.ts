import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NewProductCardInfo } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { CardWithImageComponent } from '../card-with-image/card-with-image.component';

@Component({
  selector: 'app-new-product-section',
  standalone: true,
  imports: [CommonModule, CarouselModule, CardWithImageComponent],
  templateUrl: './new-product-section.component.html',
  styleUrl: './new-product-section.component.scss',
})
export class NewProductSectionComponent implements OnInit {
  /**
   * Opciones personalizadas del carrusel.
   */
  public customOptions: OwlOptions = {
    loop: true,
    dots: false,
    // fluidSpeed: true,
    // autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1800: {
        items: 1,
      },
    },
    nav: true,
    navText: ['<', '>'],
  };
  public newProducts: NewProductCardInfo[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getNewProducts();
  }

  private getNewProducts(): void {
    this.newProducts = [];
    this.productsService.getNewProducts().subscribe((newProducts) => {
      this.newProducts = newProducts;
    });
  }
}
