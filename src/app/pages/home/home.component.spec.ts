import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { HomeService } from '../../services/home.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: jasmine.SpyObj<HomeService>;
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
    const spy = jasmine.createSpyObj('HomeService', ['getProducts']);
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [{ provide: HomeService, useValue: spy }],
    }).compileComponents();

    homeService = TestBed.inject(HomeService) as jasmine.SpyObj<HomeService>;

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts', () => {
    homeService.getProducts.and.returnValue(of(response));
    component['getProducts']();
    expect(homeService.getProducts).toHaveBeenCalled();
  });

  it('card was selected', () => {
    homeService.getProducts.and.returnValue(of(response));
    component['getProducts']();
    component.cardChange(true, 0);
    expect(component.products[0].selected).toBeTruthy();
  });

  it('associat button is disabled', () => {
    homeService.getProducts.and.returnValue(of(response));
    component['getProducts']();
    expect(component.isAsociarButtonDisabled()).toBeFalsy();
  });
});
