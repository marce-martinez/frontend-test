import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpResponse } from '@angular/common/http';
import { Product } from 'src/app/shared/models/product';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category';

const url='https://jsonplaceholder.typicode.com/photos';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {  

  idCategory: string;
  products: Product[];
  category: Category;

  constructor(private route: ActivatedRoute, private productService: ProductsService,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.idCategory =this.route.snapshot.paramMap.get('id');
    this.getCategoryById();
    this.getProductsByCategoryId()  ;
  }

  getCategoryById(){
    this.category = this.categoriesService.getCategoriesById(parseInt(this.idCategory));
  }

  getProductsByCategoryId(){
    this.productService.getProductsByAlbumId(url, this.idCategory).subscribe(
      (response: HttpResponse<any[]>) => {
        
        this.products = <any>response;      

        this.addPriceAndScore(this.products.length);
        
      }
    );
  }

  addPriceAndScore(productsLength:number){

    for(var i=0; i<productsLength; i++){
      let _price = Math.floor(Math.random() * 980000) + 20000;
      let _score = Math.floor(Math.random() * 5) + 1;
      this.products[i] = {
        ...this.products[i],
        price: _price,
        score: _score
      }
    }
    
  }

}
