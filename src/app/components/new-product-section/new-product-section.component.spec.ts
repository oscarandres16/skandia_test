import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSectionComponent } from './new-product-section.component';

describe('NewProductSectionComponent', () => {
  let component: NewProductSectionComponent;
  let fixture: ComponentFixture<NewProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
