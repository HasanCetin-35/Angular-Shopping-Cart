import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
 
  constructor( private http: HttpClient) { }
  path = "http://localhost:3000/categories";
  getCategories():Observable<Category[]>{//burada observable subscribe methodunu  component için kullandık
    return this.http.get<Category[]>(this.path);
  }
}
