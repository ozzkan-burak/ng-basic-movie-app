import { Movie } from "./movie";


export class MovieRepository {

  private movies: Movie[];

  constructor() {
    this.movies = [
      {id: "1", title: "Film 1", desc: "film 1 açıklama", imageUrl: "1.jpeg", isPopular: true},
      {id: "2", title: "Film 2", desc: "film 2 açıklama", imageUrl: "2.jpeg", isPopular: false},
      {id: "3", title: "Film 3", desc: "film 3 açıklama", imageUrl: "3.jpeg", isPopular: true},
      {id: "4", title: "Film 4", desc: "film 4 açıklama", imageUrl: "4.jpeg", isPopular: false},
    ]
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(i => i.isPopular);
  }

  getMovie(id: string): Movie {
    return this.movies.find(movie => movie.id === id);
  }

}
