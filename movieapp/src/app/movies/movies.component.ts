import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  title= "Film Listesi";
  popularTitle = "Popüler Filmler";
  alert= "Listede Film Bulunmuyor";
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }


}
