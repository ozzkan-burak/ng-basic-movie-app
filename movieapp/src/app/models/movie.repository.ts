import { Movie } from "./movie";


export class MovieRepository {

  private movies: Movie[];

  constructor() {
    this.movies = [
      {id: "1", title: "Film 1", desc: "film 1 açıklama", imageUrl: "1.jpeg"},
      {id: "2", title: "Film 2", desc: "film 2 açıklama", imageUrl: "2.jpeg"},
      {id: "3", title: "Film 3", desc: "film 3 açıklama", imageUrl: "3.jpeg"},
      {id: "4", title: "Film 4", desc: "film 4 açıklama", imageUrl: "4.jpeg"},
    ]
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: string): Movie {
    return this.movies.find(movie => movie.id === id);
  }

}
