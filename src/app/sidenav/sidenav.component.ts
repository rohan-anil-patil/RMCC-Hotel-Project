import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isMenuOpen: boolean = false;
  isOnAdminPage: boolean = false;
  isSidebarOpen: boolean = true;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.isOnAdminPage = this.currentRoute.startsWith('/admin');
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    const btnIcon = document.getElementById('btn');
    if (this.isSidebarOpen) {
      btnIcon?.classList.replace('bx-menu', 'bx-menu-alt-right');
    } else {
      btnIcon?.classList.replace('bx-menu-alt-right', 'bx-menu');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
