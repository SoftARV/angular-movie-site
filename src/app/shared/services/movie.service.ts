import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { movies } from "../movie.mock-data";
import {
  TRAILER_API_KEY,
  TRAILER_API_URL,
  TRAILER_API_SEARCH,
  TRAILER_API_MOVIE,
  TRAILER_API_VIDEOS
} from "../constants";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private movies: any[] = movies;
  private filteredMovies: any[] = movies;

  constructor(private http: HttpClient) {}

  public getMovies(): any[] {
    return this.movies;
  }

  public getMovie(id: string): any {
    return this.movies.find(movie => movie.id == parseInt(id));
  }

  public getTopMovies(): any[] {
    let topMovies: any[];
    let movies: any[] = [];
    movies.push(...this.getMovies());

    topMovies = movies.sort((a, b) => {
      if (parseFloat(b.rate) > parseFloat(a.rate)) {
        return 1;
      } else if (parseFloat(b.rate) == parseFloat(a.rate)) {
        return 0;
      } else {
        return -1;
      }
    });

    topMovies.splice(5, topMovies.length - 1);
    return topMovies;
  }

  public filterMovies(searchTerm: string): any[] {
    return this.filteredMovies.filter(movie => {
      return movie.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  public filterMoviesByGenre(genre: string): any[] {
    if (typeof genre === "undefined") {
      return this.movies;
    }
    return this.movies.filter(movie => {
      return movie.genres.includes(genre);
    });
  }

  async getMovieTrailer(name: string): Promise<string> {
    const params: string = `?api_key=${TRAILER_API_KEY}&query=${encodeURI(
      name
    )}`;
    let movieSearch: MovieSearch = await this.http
      .get(TRAILER_API_URL + TRAILER_API_SEARCH + params)
      .toPromise();

    let movieId = movieSearch.results[0].id;
    let trailerSearch: MovieVideoById = await this.http
      .get(
        TRAILER_API_URL +
          `${TRAILER_API_MOVIE}/${movieId}${TRAILER_API_VIDEOS}?api_key=${TRAILER_API_KEY}`
      )
      .toPromise();

    return encodeURI(
      `https://www.youtube.com/embed/${trailerSearch.results[0].key}`
    );
  }
}
