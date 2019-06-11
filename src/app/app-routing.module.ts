import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'categories/:id', component: CategoriesComponent},
  {path:'product/:id', component: ProductComponent},
  {path:'categories-list', component: CategoriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
