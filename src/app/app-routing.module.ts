import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { HomepageComponent } from './components/homepage/homepage.component';

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

  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  }

  {
    path: "customer/home",
    component : CustomerHomepageComponent
  },

  {
    path: "admin/home",
    component: AdminHomepageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
