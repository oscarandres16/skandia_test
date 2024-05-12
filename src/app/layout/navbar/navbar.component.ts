import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MenuItem } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public sidenavExpanded: boolean = false;
  public menuItems: MenuItem[] = [];
  public selectedMenuItem: MenuItem | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getMenuItems();
  }

  private getMenuItems(): void {
    this.menuItems = [
      {
        id: 1,
        title: 'Home',
        iconUrl: '../../../assets/imgs/svgs/home.svg',
        route: '/',
      },
      // {
      //   id: 2,
      //   title: 'About',
      //   iconUrl: 'info',
      //   route: '/about',
      // },
      // {
      //   id: 3,
      //   title: 'Contact',
      //   iconUrl: 'contact',
      //   route: '/contact',
      // },
    ];
    this.selectedMenuItem = this.menuItems[0];
  }

  public navigateTo(menuItem: MenuItem) {
    this.selectedMenuItem = menuItem;
    this.router.navigate([menuItem.route]);
  }
}
