import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ // components
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
