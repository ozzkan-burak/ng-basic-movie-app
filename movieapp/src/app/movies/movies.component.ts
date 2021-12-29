import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';



@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  title= "Film Listesi";
  popularTitle = "Popüler Filmler";
  alert= "Listede Film Bulunmuyor";
  movies: Movie[] = [];
  FilteredMovies: Movie[] = [];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  filterText : string = "";
  error: any

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoot: ActivatedRoute,
    ) {
    // this.popularMovies = this.movieRepository.getPopularMovies();

  }

  ngOnInit(): void {
    this.activatedRoot.params.subscribe(params => {

      this.movieService.getMovies(params["id"]).subscribe(data => {
        this.movies = data;
        this.FilteredMovies = this.movies;
      }, error => this.error = error);
    })
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

      this.alertify.success(`${movie.title} Listeye Eklendi`);
    } else {
      $event.target.innerText = 'Listeye ekle';
      $event.target.classList.remove('btn-warning');
      $event.target.classList.add('btn-primary');

      this.alertify.error(`${movie.title} Listeden Çıkarıldı`);
    }
  }

}
