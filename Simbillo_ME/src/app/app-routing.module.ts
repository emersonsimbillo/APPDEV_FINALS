import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerPageComponent } from './seller-page/seller-page.component';

const routes: Routes = [
  {path: 'navigation', component: NavigationComponent},
  {path: 'products_lists', component: ProductsListComponent},
  {path: 'product_details', component: ProductDetailsComponent},
  {path: 'seller_page', component: SellerPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }