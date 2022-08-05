import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path : 'products',component:ProductComponent},
  {path : 'product-add-forms1',component:ProductAddForms1Component, canActivate:[LoginGuard]},
  //eğer forms1 i açmak istiyorsan loginGuard true olmalı ki gitsin.
  {path :'',redirectTo:'products' , pathMatch:'full'},
  {path :"products/category/:categoryId", component:ProductComponent},//categorilerime tıkladığımda kayıtlı ürünlerin getirilmesini sağlıyor.
  {path :"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
