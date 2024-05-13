import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewProductSectionComponent } from './new-product-section.component';

describe('NewProductSectionComponent', () => {
  let component: NewProductSectionComponent;
  let fixture: ComponentFixture<NewProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewProductSectionComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
