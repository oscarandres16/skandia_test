import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItem } from '../../interfaces/navbar.interface';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Home',
      iconUrl: '',
      route: '/home',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('router.navigate has been called', () => {
    spyOn(component['router'], 'navigate');
    component.navigateTo(menuItems[0]);
    expect(component['router'].navigate).toHaveBeenCalled();
  });
});
