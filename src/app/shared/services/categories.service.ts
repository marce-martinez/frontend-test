import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: Category[] = [
    {
      id: 1,
      name: 'TV & Video'
    },
    {
      id: 2,
      name: 'Móviles'
    },
    {
      id: 3,
      name: 'Computadores'
    },
    {
      id: 4,
      name: 'Cámaras & Videocámaras'
    },
    {
      id: 5,
      name: 'Electrodomésticos'
    },
    {
      id: 6,
      name: 'Artículos para el hogar'
    }
  ];

  getCategories(){
    return this.categories;
  }

  getCategoriesById(id: number){
    let category: Category;
    this.categories.forEach(cat=>{
      if(cat.id === id){
        category= cat;
      }
    })
    return category;
  }
  
}
