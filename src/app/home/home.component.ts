import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { genreType } from "../shared/movie.model";
import { MovieService } from "../shared/services/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public movies: any[];
  public genreType: Object = genreType;

  constructor(private router: Router, private movie: MovieService) {
    this.movies = this.movie.getTopMovies();
  }

  ngOnInit() {}

  goToMovies() {
    this.router.navigate(["movies"]);
  }
}
