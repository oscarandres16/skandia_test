import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return products with modified product types', () => {
    const mockProductsResponse = {
      listCard: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' }
      ]
    };

    // Configura la respuesta simulada de la llamada HTTP
    service.getProducts().subscribe(products => {
      expect(products.listCard.length).toBe(2);
      expect(products.listCard[0].productType).toBeDefined();
      expect(products.listCard[1].productType).toBeDefined();
    });

    const req = httpMock.expectOne('/test-front-end-skandia/cards');
    expect(req.request.method).toBe('GET');
    req.flush(mockProductsResponse);
  });

  it('should handle empty products list', () => {
    const mockEmptyProductsResponse = {
      listCard: []
    };

    // Configura la respuesta simulada de la llamada HTTP
    service.getProducts().subscribe(products => {
      expect(products.listCard.length).toBe(0);
    });

    const req = httpMock.expectOne('/test-front-end-skandia/cards');
    expect(req.request.method).toBe('GET');
    req.flush(mockEmptyProductsResponse);
  });
});
