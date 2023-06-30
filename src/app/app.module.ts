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
    AdminAddpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
