import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.homeService
      .getProducts()
      .subscribe((products: { listCard: Product[] }) => {
        this.products = products.listCard;
      });
  }
}
