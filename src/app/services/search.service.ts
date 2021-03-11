import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Search } from '../interfaces/search.interface';
import { Movie } from '../interfaces/movie.interface';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class SearchService {
    searchText: Subject<string>;
    movieDetailsId: Subject<string>;

    constructor(
        private http: HttpClient

    ) {
        this.searchText = new Subject();
        this.movieDetailsId = new Subject();
    }

    fetchMovies(title: string) : Observable<Search> {
        const apiUrl = `${environment.apiUrl}?s=${title}&type=movie&apikey=${environment.apiKey}`;
        return this.http.get<Search>(apiUrl).pipe(map(res => res));
    }

    getMovieDetailsById(id: string) : Observable<Movie>{
        const apiUrl = `${environment.apiUrl}?i=${id}&type=movie&apikey=${environment.apiKey}`;
        return this.http.get<Movie>(apiUrl).pipe(map(res => res));
    }
}
