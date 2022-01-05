import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
  url = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  getMovies(categoryId: number): Observable<Movie[]> {

    let newUrl = this.url;

    console.log(categoryId);
    if(categoryId) {
      newUrl += `?categoryId=${categoryId}`;
    }

    return this.http.get<Movie[]>(newUrl).pipe(
      catchError(this.handleError)
    )
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/${movieId}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return Observable.throw(errorMessage);
  }
}
