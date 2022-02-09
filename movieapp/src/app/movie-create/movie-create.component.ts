import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ImageValidator } from '../validators/image.validators';


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];
  model: any = {
    categoryId: "-1"
  };

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

  movieForm = new FormGroup({

    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    imageUrl: new FormControl('', [Validators.required, ImageValidator.isValidExtention] ),
    categoryId: new FormControl('', [Validators.required]),

  });

  get title(){
    return this.movieForm.get('title');
  }

  get imageUrl(){
    return this.movieForm.get('imageUrl');
  }

  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: '-1'
    });
  }

  createMovie() {

    console.log(this.movieForm)

  //   if(this.model.title === "" || this.model.description === "" || this.model.imageUrl === "" || this.model.categoryId === "-1") {
  //     this.alertify.error("Lütfen tüm alanları doldurunuz.");
  //     return;
  //   }

  //   if(this.model.title.length < 3) {
  //     this.alertify.error("Film başlığı 3 karakterden az olamaz.");
  //     return;
  //   }

  //   if(this.model.description.length < 10 || this.model.description.length > 100) {
  //     this.alertify.error("film içeriği 10-100 karakter arasında olmalıdır.");
  //     return;
  //   }

  //   const extensions = ["jpg", "jpeg", "png"];
  //   const extension = this.model.imageUrl.split('.').pop();


  // if(extensions.indexOf(extension) === -1){
  //   this.alertify.error("sadece 'jpeg', 'jpg' ve 'png' uzantılı resimler yükleyebilirsiniz.");
  //   return
  // }



    const movie = {
      id:0,
      title: this.movieForm.value.title,
      desc: this.movieForm.value.description,
      imageUrl: this.movieForm.value.imageUrl,
      isPopular: false,
      categoryId: this.movieForm.value.categoryId,
      datePublished: new Date().getTime()
    };


    this.movieService.createMovie(movie).subscribe(movie => {
      this.router.navigate(['/movies']);
    })
  }
}
