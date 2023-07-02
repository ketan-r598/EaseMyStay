import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent {

  constructor(
    private router:Router
  ) {

  }

  LogOut() {
    localStorage.clear();
    this.router.navigate(['/login']);    
  }
}
