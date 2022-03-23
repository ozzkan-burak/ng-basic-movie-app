import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Category } from "../models/category";

@Injectable()
export class CategoryService {
  //url = "http://localhost:3000/categories";
  url_firebase =  "https://angular-movie-app-ea50d-default-rtdb.europe-west1.firebasedatabase.app";


  constructor(private http: HttpClient) {}
  
  

  getCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(`${this.url_firebase}/movies.json`).pipe(

      map(response: any => {
        const categories: Category[] = [];

        for(const key in response) {
          if(response.hasOwnProperty(key)) {
            categories.push({...response[key], id: key});
          }
        }

        return categories
      }
    );
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url_firebase +'/categories.json', category);
  }

}
