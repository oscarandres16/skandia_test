import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productsService: jasmine.SpyObj<ProductsService>;
  const response: { listCard: Product[] } = {
    listCard: [
      {
        nameProduct: 'MFUND',
        numberProduct: '789654123',
        balanceProduct: '4000000',
        detaildProduct: 'Ya tienes un 15% de tu objetivo ',
      },
      {
        nameProduct: 'CREA',
        numberProduct: '156123456',
        balanceProduct: '40000000',
        detaildProduct: 'Ya tienes un 80% de tu objetivo ',
      },
      {
        nameProduct: 'FICS',
        numberProduct: '11213',
        balanceProduct: '15000',
        detaildProduct: 'Ya tienes un 18% de tu objetivo ',
      },
      {
        nameProduct: 'BOLT',
        numberProduct: '122220',
        balanceProduct: '50000',
        detaildProduct: 'Ya tienes un 1% de tu objetivo ',
      },
    ],
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ProductsService', ['getProducts']);

    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [{ provide: ProductsService, useValue: spy }],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts', () => {
    productsService.getProducts.and.returnValue(of(response));
    component['getProducts']();
    expect(productsService.getProducts).toHaveBeenCalled();
  });

  it('card was selected', () => {
    productsService.getProducts.and.returnValue(of(response));
    component['getProducts']();
    component.cardChange(true, 0);
    expect(component.products[0].selected).toBeTruthy();
  });

  it('associat button is disabled', () => {
    productsService.getProducts.and.returnValue(of(response));
    component['getProducts']();
    expect(component.isAsociarButtonDisabled()).toBeFalse();
  });
});
