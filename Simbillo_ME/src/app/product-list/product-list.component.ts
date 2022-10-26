import { Component, Input, OnInit } from '@angular/core';

import { Grocery } from '../grocery';
import { GROCERY } from '../grocery-list';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit {

  groceries = GROCERY;
  @Input() grocery?: Grocery;
  selectedGrocery?: Grocery;
  
  onSelect(grocery: Grocery): void {
    this.selectedGrocery = grocery;
  }

  constructor() { }

  ngOnInit(): void {
  }

} 