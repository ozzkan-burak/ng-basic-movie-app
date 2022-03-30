import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies/category/:id', component: MoviesComponent},
  {path: 'categories/create', component: CategoryCreateComponent},
  {path: 'movies/create', component: MovieCreateComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'auth', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
