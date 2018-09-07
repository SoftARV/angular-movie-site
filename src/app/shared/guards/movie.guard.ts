import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { MovieService } from "../services/movie.service";

@Injectable({
  providedIn: "root"
})
export class MovieGuard implements CanActivate {
  constructor(private router: Router, private movie: MovieService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let id = next.paramMap.get("id");
    if (typeof this.movie.getMovie(id) === "undefined") {
      this.router.navigate(["not-found"]);
      return false;
    }

    return true;
  }
}
