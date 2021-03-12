import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OMDBSearch } from '../interfaces/search.interface';
import { OMDBMovie } from '../interfaces/movie.interface';
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

    fetchMovies(title: string, pageNo: number): Observable<OMDBSearch> {
        const apiUrl = `${environment.apiUrl}?s=${title}&type=movie&page=${pageNo}&apikey=${environment.apiKey}`;
        return this.http.get<OMDBSearch>(apiUrl).pipe(map(res => res));
    }

    getMovieDetailsById(id: string): Observable<OMDBMovie>{
        const apiUrl = `${environment.apiUrl}?i=${id}&type=movie&apikey=${environment.apiKey}`;
        return this.http.get<OMDBMovie>(apiUrl).pipe(map(res => res));
    }
}
