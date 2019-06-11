import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product';
import { HttpResponse } from '@angular/common/http';

const url='https://jsonplaceholder.typicode.com/photos';

@Component({
  selector: 'app-specials-sb',
  templateUrl: './specials-sb.component.html',
  styleUrls: ['./specials-sb.component.css']
})
export class SpecialsSbComponent implements OnInit {

  @Input() products: Product[];

  constructor(private productService: ProductsService) {    
  }

  ngOnInit() {
  }  

}
