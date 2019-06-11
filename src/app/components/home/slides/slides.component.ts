import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  @Input() products: Product[];
  @Input() categories: Category[];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

  getCategory(idCategory: number): string{
    let category: string = '';
    this.categories.forEach(c=>{
      if(c.id ===idCategory){
        category = c.name;
      }
    });

    return category;
  }

}
