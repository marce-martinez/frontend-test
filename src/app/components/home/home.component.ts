import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpResponse } from '@angular/common/http';

const url='https://jsonplaceholder.typicode.com/photos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  products: Product[] = [];

  constructor(private categoriesService: CategoriesService, private productService: ProductsService) { 
    this.categories = categoriesService.getCategories();
    this.getProductsChooseThree();
  }

  ngOnInit() {
  }

  getProductsChooseThree(){
    this.productService.getProducts(url).subscribe(
      (response: HttpResponse<any[]>) => {
        let resp: Product[];
        let tempProducts: Product[] = [];
        resp = <any>response;
        
        resp.forEach(p=>{
          if(p.albumId >= 1 && p.albumId <= 6){
            tempProducts.push(p);
          }
        });

        let randomNumbers = this.getThreeRandomNumbers(tempProducts.length);
        

        for(var i=0; i<3 ; i++){
          this.products.push(tempProducts[randomNumbers[i]]);
        }

        this.addPriceAndScore();
        
      }
    );
  }

  getThreeRandomNumbers(arrayLength:number):number[]{
    let randomNumbers:number[]=[];

    for(var i=0; i<3 ; i++){
      randomNumbers.push(Math.floor(Math.random() * arrayLength));
    }

    return randomNumbers;
  }

  addPriceAndScore(){
    for(var i=0; i<3; i++){
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
