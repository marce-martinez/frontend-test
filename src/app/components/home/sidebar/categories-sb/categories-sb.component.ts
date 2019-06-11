import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories-sb',
  templateUrl: './categories-sb.component.html',
  styleUrls: ['./categories-sb.component.css']
})
export class CategoriesSbComponent implements OnInit {

  @Input() categories: Category[];

  constructor(private categoriesService: CategoriesService) {  
  }

  ngOnInit() {
  }


}
