import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], filterText: string): Movie[] {
    filterText = filterText.toLowerCase();

    return movies.filter(movie => movie.title.toLowerCase().includes(filterText) || movie.desc.toLowerCase().includes(filterText));
    //return movies
  }

}
