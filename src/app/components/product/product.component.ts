import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpResponse } from '@angular/common/http';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/services/categories.service';

const url = 'https://jsonplaceholder.typicode.com/photos';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  idProduct: string;
  product: Product;
  category: Category;

  constructor(private route: ActivatedRoute, private productService: ProductsService,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    this.getProductById();
  }

  getProductById() {
    this.productService.getProductsById(url, this.idProduct).subscribe(
      (response: HttpResponse<any>) => {
        this.product = <any>response;
        this.addPriceAndScore();
        this.getCategoryById();
      }
    );
  }

  addPriceAndScore() {
    let _price = Math.floor(Math.random() * 980000) + 20000;
    let _score = Math.floor(Math.random() * 5) + 1;

    this.product = {
      ...this.product,
      price: _price,
      score: _score
    }
  }

  getCategoryById(){
    this.category = this.categoriesService.getCategoriesById(parseInt(this.product.albumId.toString()));
  }

}
