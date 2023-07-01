import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { AdminAddpageComponent } from './components/admin/admin-addpage/admin-addpage.component';
import { AdminDetailpageComponent } from './components/admin/admin-detailpage/admin-detailpage.component';
import { AdminUpdatepageComponent } from './components/admin/admin-updatepage/admin-updatepage.component';
import { CustomerBookingpageComponent } from './components/cutomer/customer-bookingpage/customer-bookingpage.component';
import { CustomerHomepageComponent } from './components/cutomer/customer-homepage/customer-homepage.component';
import { CustomerProfilepageComponent } from './components/cutomer/customer-profilepage/customer-profilepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "registerLogin",
    component: RegisterLoginComponent
  },
  
  {
    path: "register",
    component: RegisterComponent
  },
  
  {
    path: "login",
    component: LoginComponent
  },
  
  {
    path: "",
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path: "home",
    component: HomepageComponent
    // redirectTo:'admin/home',
    // pathMatch:'full'
  },
  {
    path:"admin/home",
    component:AdminHomepageComponent
  },
  {
    path:"admin/addhotel",
    component:AdminAddpageComponent
  },
  {
    path:"admin/edithotel",
    component:AdminUpdatepageComponent
  },
  {
    path:"admin/hoteldetail",
    component:AdminDetailpageComponent
  },
  {
    path:"customer/home",
    component:CustomerHomepageComponent
  },
  {
    path:"customer/booking",
    component:CustomerBookingpageComponent
  },
  {
    path:"customer/editprofile",
    component:CustomerProfilepageComponent
  },
  {
    path:"customer/payment",
    component:CustomerHomepageComponent
  },
  // {
  //   path:"forbidden",
  //   component:
  // },
  // {
  //   path:"error",
  //   component:
  // }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
