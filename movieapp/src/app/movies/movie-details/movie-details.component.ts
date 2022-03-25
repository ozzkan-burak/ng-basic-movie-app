import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  loading: boolean = false;

  constructor(private movieService: MovieService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.movieService.getMovieById(params["id"]).subscribe(movie => {
        this.movie = movie;
        this.loading = false;
      })
    })
  }
}
