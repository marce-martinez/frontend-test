import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() products: Product[];
  @Input() categories: Category[];

  constructor() { 
  }

  ngOnInit() {
  }

  
  


}
