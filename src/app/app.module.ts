import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarHomepageComponent } from './navbar/navbar-homepage/navbar-homepage.component';
import { NavbarCustomerComponent } from './navbar/navbar-customer/navbar-customer.component';
import { NavbarAdminComponent } from './navbar/navbar-admin/navbar-admin.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { AdminUpdatepageComponent } from './components/admin/admin-updatepage/admin-updatepage.component';
import { AdminDetailpageComponent } from './components/admin/admin-detailpage/admin-detailpage.component';
import { AdminAddpageComponent } from './components/admin/admin-addpage/admin-addpage.component';
import { CustomerHomepageComponent } from './components/cutomer/customer-homepage/customer-homepage.component'
import { CustomerBookingpageComponent } from './components/cutomer/customer-bookingpage/customer-bookingpage.component';
import { CustomerPaymentpageComponent } from './components/cutomer/customer-paymentpage/customer-paymentpage.component';
import { CustomerProfilepageComponent } from './components/cutomer/customer-profilepage/customer-profilepage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    NavbarHomepageComponent,
    NavbarCustomerComponent,
    NavbarAdminComponent,
    RegisterLoginComponent,
    AdminHomepageComponent,
    AdminUpdatepageComponent,
    AdminDetailpageComponent,
    AdminAddpageComponent,
    CustomerHomepageComponent,
    CustomerBookingpageComponent,
    CustomerPaymentpageComponent,
    CustomerProfilepageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
