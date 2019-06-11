import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(url: string){
    return this.http.get(url);
  }

  getProductsByAlbumId(url: string, albumId:string){
    const params= new HttpParams().set('albumId', albumId)
    return this.http.get(url, {params});
  }

  getProductsById(url: string, id:string){    
    return this.http.get(url + `/${id}`);
  }


}
