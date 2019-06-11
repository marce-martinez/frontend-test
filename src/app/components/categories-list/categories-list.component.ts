import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesService: CategoriesService) { 
    this.categories = this.categoriesService.getCategories();
  }

  ngOnInit() {
  }

}
