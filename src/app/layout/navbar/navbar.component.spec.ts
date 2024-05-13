import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
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
  let breakpointObserverSpy: jasmine.SpyObj<BreakpointObserver>;
  let breakpointObserverSubject: Subject<BreakpointState>;

  beforeEach(async () => {
    breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', [
      'observe',
    ]);
    breakpointObserverSubject = new Subject<BreakpointState>();
    breakpointObserverSpy.observe.and.returnValue(
      breakpointObserverSubject.asObservable()
    );

    await TestBed.configureTestingModule({
      imports: [NavbarComponent, BrowserAnimationsModule, RouterTestingModule],
      providers: [
        { provide: BreakpointObserver, useValue: breakpointObserverSpy },
      ],
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

  it('sizeDisplay to mobile', () => {
    breakpointObserverSubject.next({
      matches: true,
      breakpoints: {}
    });
    expect(component.sizeDisplay).toEqual('phone');
  });

  it('sizeDisplay to web', () => {
    breakpointObserverSubject.next({
      matches: false,
      breakpoints: {}
    });
    expect(component.sizeDisplay).toEqual('web');
  });

  it('activate dark mode', () => {
    component.toggleDarkTheme.setValue(true);
    expect(component['globalConfigService'].darkMode.value).toEqual('darkMode');
  });

  it('desactivate dark mode', () => {
    component.toggleDarkTheme.setValue(false);
    expect(component['globalConfigService'].darkMode.value).toEqual('');
  });
});
