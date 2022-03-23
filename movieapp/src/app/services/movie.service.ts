import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, delay, map } from "rxjs/operators";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
  url = "http://localhost:3000/movies";
  url_firebase =  "https://angular-movie-app-ea50d-default-rtdb.europe-west1.firebasedatabase.app";

  constructor(private http: HttpClient) {}

  getMovies(categoryId: number): Observable<Movie[]> {

    return this.http.get<Movie[]>(`${this.url_firebase}/movies.json`).pipe(
      map(response => {

        const movies: Movie[] = [];

        for(const key in response) {
          if(categoryId) {
            if(categoryId === response[key].categoryId) {
              movies.push({...response[key], id: key});
            }
          } else {
            movies.push({...response[key], id: key});
          }
        }

        return movies;
      }),
      catchError(this.handleError),
      delay(1000)
    )
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url_firebase}/movies/${movieId}.json`).pipe(
      catchError(this.handleError),
      delay(1000)
    )
  }

  createMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }
    return this.http.post<Movie>(this.url_firebase + "/movies.json", movie, httpOptions).pipe(
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
