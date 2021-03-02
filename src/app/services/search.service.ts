import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

    fetchMovies(title: string) {
        return this.http.get(`${environment.apiUrl}?s=${title}&type=movie&apikey=${environment.apiKey}`);
    }

    getMovieDetailsById(id: string) {
        return this.http.get(`${environment.apiUrl}?i=${id}&type=movie&apikey=${environment.apiKey}`);
    }
}
