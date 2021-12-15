import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

declare let alertify: any;

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
  FilteredMovies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  filterText : string = "";

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
    this.FilteredMovies = this.movies
  }

  ngOnInit(): void {
  }

  onInputChange(){
    this.FilteredMovies = this.filterText ?
      this.movies.filter(movie => movie.title.toLowerCase().includes(this.filterText.toLowerCase()) || movie.desc.toLowerCase().includes(this.filterText.toLowerCase()))
      : this.movies;
  }

  addToList($event: any, movie: Movie){

    if($event.target.classList.contains('btn-primary')){
      $event.target.innerText = 'Listeden Çıkar';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-warning');

      alertify.success(`${movie.title} Listeye Eklendi`);
    } else {
      $event.target.innerText = 'Listeye ekle';
      $event.target.classList.remove('btn-warning');
      $event.target.classList.add('btn-primary');

      alertify.error(`${movie.title} Listeden Çıkarıldı`);
    }
  }

}
