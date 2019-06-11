import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
