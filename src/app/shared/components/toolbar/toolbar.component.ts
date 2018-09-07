import { Component, OnInit, OnDestroy } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { map, debounceTime } from "rxjs/operators";
import { MovieService } from "../../services/movie.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
  animations: [
    trigger("searchReveal", [
      transition(":enter", [
        style({ height: "0%" }),
        animate("400ms", style({ height: "100%" }))
      ]),
      transition(":leave", [
        style({ height: "100%" }),
        animate("400ms", style({ height: "0%" }))
      ])
    ])
  ]
})
export class ToolbarComponent implements OnInit, OnDestroy {
  public searchControl: FormControl = new FormControl("");
  public searchResult: any[] = [];
  public searchActive: boolean = false;
  public searchSubcribe: Subscription;

  constructor(private movie: MovieService, private router: Router) {}

  ngOnInit() {
    this.initSearch();
  }

  ngOnDestroy() {
    if (this.searchSubcribe) {
      this.searchSubcribe.unsubscribe();
    }
  }

  initSearch() {
    this.searchSubcribe = this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        map(res => {
          this.searchMovies(res);
        })
      )
      .subscribe();
  }

  searchMovies(searchTerm: string) {
    searchTerm.length === 0
      ? (this.searchActive = false)
      : (this.searchActive = true);
    this.searchResult = this.movie.filterMovies(searchTerm);
  }

  goToMovie(movie) {
    this.router.navigate(["movie", movie.id]);
  }

  goBack() {
    this.router.navigate(["home"]);
  }
}
