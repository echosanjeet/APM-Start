import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../products/product';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  pageTitle: string = "Product Detail";
  constructor() { }

  ngOnInit() {
  }

}
