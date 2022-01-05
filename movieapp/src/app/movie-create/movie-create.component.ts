import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) {

   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(category => {
      this.categories = category;
    })
  }
  createMovie(title: HTMLInputElement, description: HTMLTextAreaElement, imageUrl: HTMLInputElement, categoryId: any){
    console.log(title.value, description.value, imageUrl.value, categoryId.value);
  }
}
