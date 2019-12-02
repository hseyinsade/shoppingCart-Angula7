import { Injectable, Inject } from '@angular/core';
import { Category } from '../category';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:Http , @Inject('apiAdress')private apiAdress) { }
 
  getCategories():Observable<Category[]>{
    return this.http.get(this.apiAdress + "/categories").pipe(map(Response => Response.json()))
  }
}
