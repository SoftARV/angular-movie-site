import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { MovieService } from "../shared/services/movie.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  public movieData: any;
  public trailerLink: string = null;
  private navSubcription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private movie: MovieService,
    private router: Router
  ) {
    this.initMovie();
    this.navigationReload();
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.navSubcription) {
      this.navSubcription.unsubscribe();
    }
  }

  initMovie() {
    let id = this.route.snapshot.paramMap.get("id");
    this.movieData = this.movie.getMovie(id);
    this.getMovieTrailer();
  }

  async navigationReload() {
    let event = await this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.initMovie();
      }
    });
  }

  async getMovieTrailer() {
    this.trailerLink = await this.movie.getMovieTrailer(this.movieData.name);
  }

  goBack() {
    this.router.navigate(["movies"]);
  }
}
