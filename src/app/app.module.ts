import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SocialComponent } from './core/header/social/social.component';
import { InfoComponent } from './core/header/info/info.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesService } from './shared/services/categories.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { CommonModule } from '@angular/common';
import { CategoriesSbComponent } from './components/home/sidebar/categories-sb/categories-sb.component';
import { SpecialsSbComponent } from './components/home/sidebar/specials-sb/specials-sb.component';
import { ProductsService } from './shared/services/products.service';
import { BestSellerSbComponent } from './components/home/sidebar/best-seller-sb/best-seller-sb.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { SlidesComponent } from './components/home/slides/slides.component';
import { ProductComponent } from './components/product/product.component';
import { LatestProductsComponent } from './components/home/latest-products/latest-products.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    InfoComponent,
    SidebarComponent,
    HomeComponent,
    CategoriesComponent,
    CategoriesSbComponent,
    SpecialsSbComponent,
    BestSellerSbComponent,
    MenuComponent,
    SlidesComponent,
    ProductComponent,
    LatestProductsComponent,
    CategoriesListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
