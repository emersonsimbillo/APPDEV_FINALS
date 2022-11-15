import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { ProductsListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const products_listRoutes: Routes = [
    { path: 'product-list', redirectTo: 'product-list'},
    { path: 'product-details/:id', redirectTo: '/product-details/:id'},
    { path: 'product-list', component: ProductsListComponent},
    { path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(products_listRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class Product_listRoutingModule {} 