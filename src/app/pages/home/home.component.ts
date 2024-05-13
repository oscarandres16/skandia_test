import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../interfaces/product.interface';
import { HomeService } from '../../services/home.service';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    fluidSpeed: true,
    autoWidth: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
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
      800: {
        items: 2.2,
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

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    const newProduct: Product = {
      nameProduct: '',
      numberProduct: '',
      balanceProduct: '',
      detaildProduct: '',
      productType: 'new',
    };
    this.homeService
      .getProducts()
      ?.subscribe((products: { listCard: Product[] }) => {
        this.products = products.listCard;
        this.products.push(newProduct);
      });
  }

  cardChange($event: any, index: number) {
    this.products[index].selected = $event;
  }

  isAsociarButtonDisabled(): boolean {
    return this.products.filter((product) => product.selected).length === 0;
  }
}
