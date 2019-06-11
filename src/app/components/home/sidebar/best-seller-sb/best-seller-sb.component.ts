import { Component, OnInit, Input, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-best-seller-sb',
  templateUrl: './best-seller-sb.component.html',
  styleUrls: ['./best-seller-sb.component.css']
})
export class BestSellerSbComponent implements AfterContentChecked {

  @Input() products: Product[];
  product: Product;

  constructor() {
  }

  ngAfterContentChecked(): void {
    this.product = this.products[1];
  }


}
