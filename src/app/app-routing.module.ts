import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'Checkout',
    component:FormComponent
  },
   {
    path:"",
    component:LoginComponent
  },
  {
    path:'user',
    component:NavbarComponent,
    children:[
      {
        path:'products',
        component:ProductsComponent
      },
      {
        path:'add',
        component:AddproductsComponent
      },
      {
        path:'cart',
        component:CartComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
