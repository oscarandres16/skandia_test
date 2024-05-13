import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../interfaces/product.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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
  private currentSlide: number = 0;

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
      .subscribe((products: { listCard: Product[] }) => {
        this.products = products.listCard;
        this.products.push(newProduct);
      });
  }

  prevSlide() {
    const cardsContainer = document.querySelector(
      '#cards-container'
    ) as HTMLElement;
    if (cardsContainer) {
      if (this.currentSlide === 0) return;
      cardsContainer.style.transform += `translateX(310px)`;
      this.currentSlide--;
    }
  }

  nextSlide() {
    const cardsContainer = document.querySelector(
      '#cards-container'
    ) as HTMLElement;
    if (cardsContainer) {
      // if (this.currentSlide === this.products.length - 4) return;
      cardsContainer.style.transform += `translateX(-310px)`;
      this.currentSlide++;
    }
  }

  disableNextSlide(): boolean {
    return this.currentSlide === this.products.length - 3;
  }
}
