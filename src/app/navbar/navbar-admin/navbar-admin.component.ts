import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {

  constructor(
    private router: Router
  ) {}

  logOut():void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
