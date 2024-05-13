import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change event is emitted', () => {
    spyOn(component.change, 'emit');
    component.form.controls['checked'].setValue(true);
    expect(component.change.emit).toHaveBeenCalled();
  });

  it('showNewProductSection method', () => {
    spyOn(component.change, 'emit');
    component.showNewProductSection();
    expect(component.change.emit).toHaveBeenCalled();
  });
});
