import { Component, OnInit } from "@angular/core";
import { genreType } from "../shared/movie.model";
import { MovieService } from "../shared/services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  public movies: any[];
  public genreType: Object = genreType;
  public genreSelected: string;

  constructor(private movie: MovieService) {
    this.movies = this.movie.getMovies();
  }

  ngOnInit() {}

  filterByGenre() {
    this.movies = this.movie.filterMoviesByGenre(this.genreSelected);
  }
}
