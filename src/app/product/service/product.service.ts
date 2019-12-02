import { Injectable, Inject } from '@angular/core';
import { Product } from '../product'; // product nesnesini kullanacagımız için servise dahil ediyoruz
import { Http, Response } from '@angular/http'; // http servisine ulaşmak için yaptığımız import, http istek yapabilmemiz için, response gelen yanıta karsılık gelecek nesne için
import { Observable } from 'rxjs'; // observable yani asenkron bir şekilde servis data’sına ulaşmamızı sağlar 
import { map, catchError, tap } from "rxjs/operators"; 


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:Http, @Inject('apiAdress') private apiAdress) { }

  getProducts(seoUrl:string):Observable<Product[]>{
    if (seoUrl) {
      return this.http.get(this.apiAdress + "/products/" + seoUrl)
      .pipe(map(Response => Response.json()))
    } else {
      return this.http.get(this.apiAdress + "/products/")
      .pipe(map(Response => Response.json()))
    }
  }
}

