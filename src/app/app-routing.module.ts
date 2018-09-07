import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieGuard } from "./shared/guards/movie.guard";
import { NotFoundComponent } from "./not-found/not-found.component";

let routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movies", component: MovieListComponent },
  {
    path: "movie/:id",
    component: MovieDetailComponent,
    canActivate: [MovieGuard],
    runGuardsAndResolvers: "paramsChange"
  },
  { path: "not-found", component: NotFoundComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
