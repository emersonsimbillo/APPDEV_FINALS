import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { HomepageComponent } from './homepage/homepage.component';

import { SelectivePreloadingStrategyService } from "./selective-preloading-strategy.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/product-list', pathMatch: 'full'},

  {path: 'navigation', component: NavigationComponent},
  {path: 'products_lists', component: ProductsListComponent},
  {path: 'product_details', component: ProductDetailsComponent},
  {path: 'seller_page', component: SellerPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home_page', component: HomepageComponent},
  {path: 'account-list', component: AccountsListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }







/*import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './Product/product-list/product-list.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';



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
export class AppRoutingModule { }  */