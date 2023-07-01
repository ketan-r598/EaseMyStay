import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomerHomepageComponent } from './components/cutomer/customer-homepage/customer-homepage.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

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
  },

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
