import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertify: AlertifyService,
    ) { }



  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(category => {
      this.categories = category;
    })
  }

  createMovie(title: HTMLInputElement, description: HTMLTextAreaElement, imageUrl: HTMLInputElement, categoryId: any) {

    if(title.value === "" || description.value === "" || imageUrl.value === "" || categoryId.value === "-1") {
      this.alertify.error("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if(title.value.length < 3) {
      this.alertify.error("Film başlığı 3 karakterden az olamaz.");
      return;
    }

    if(description.value.length < 10 || description.value.length > 100) {
      this.alertify.error("film içeriği 10-100 karakter arasında olmalıdır.");
      return;
    }

    const extensions = ["jpg", "jpeg", "png"];
    const extension = imageUrl.value.split('.').pop();

  if(extensions.indexOf(extension) === -1){
    this.alertify.error("sadece 'jpeg', 'jpg' ve 'png' uzantılı resimler yükleyebilirsiniz.");
    return
  }

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
