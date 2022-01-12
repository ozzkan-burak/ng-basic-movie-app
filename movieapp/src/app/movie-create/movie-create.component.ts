import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router) { }



  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(category => {
      this.categories = category;
    })
  }

  createMovie(title: HTMLInputElement, description: HTMLTextAreaElement, imageUrl: HTMLInputElement, categoryId: any) {
    const movie = {
      id:0,
      title: title.value,
      desc: description.value,
      imageUrl: imageUrl.value,
      isPopular: false,
      categoryId: categoryId.value,
      datePublished: new Date().getTime()
    };
    this.movieService.createMovie(movie).subscribe(movie => {
      console.log(movie);
      this.router.navigate(['/movies/', movie.id]);
    })
  }
}
