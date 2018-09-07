import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import { MovieItemComponent } from "./shared/components/movie-item/movie-item.component";
import { MovieService } from "./shared/services/movie.service";
import { SafePipe } from "./shared/pipes/safe.pipe";
import { CapLetterPipe } from "./shared/pipes/cap-letter.pipe";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieListComponent,
    ToolbarComponent,
    MovieItemComponent,
    SafePipe,
    CapLetterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
