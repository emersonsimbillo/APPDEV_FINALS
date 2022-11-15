import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProductsListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { Product_listRoutingModule } from "./grocery-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Product_listRoutingModule
    ],
    declarations: [
        ProductsListComponent,
        ProductDetailsComponent
    ]
})
export class ProductModule {} 

/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from '../navigation/navigation.component';
import { ProductsListComponent } from '../Product/product-list/product-list.component';
import { ProductDetailsComponent } from '../Product/product-details/product-details.component';
import { SellerPageComponent } from '../seller-page/seller-page.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AccountsListComponent } from '../accounts-list/accounts-list.component';



const routes: Routes = [
  {path: 'navigation', component: NavigationComponent},
  {path: 'products_lists', component: ProductsListComponent},
  {path: 'product_details', component: ProductDetailsComponent},
  {path: 'seller_page', component: SellerPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account-list', component: AccountsListComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { } */








