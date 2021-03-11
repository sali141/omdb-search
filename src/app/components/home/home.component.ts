import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Search } from '../../interfaces/search.interface';
import { Movie } from '../../interfaces/movie.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    errorMsg: string;
    searchText: string;
    isInitialLoading: boolean;
    isDetailsLoading: boolean;
    isMoviedLoading: boolean;
    isSearched: boolean;
    movies: Movie[];
    movieDetail: Movie;
    paginationConfig: any;
    itemsPerPage = 10;

    constructor(
        private searchService: SearchService
    ) {}

    ngOnInit(): void {
        this.searchService.searchText.subscribe((data) => {
            this.isInitialLoading = true; // show the loading untill the data recieved from API
            this.errorMsg = null;
            this.movieDetail = null;
            this.searchText = data;
            this.searchMovies(1, true);
        });

        this.searchService.movieDetailsId.subscribe((data) => {
            this.isDetailsLoading = true; // show the movie details loading untill the data is recieved
            this.getMovieDetailsById(data);
        });
    }

    searchMovies(pageNo, initialSearch){
        // get search result from the API via search service
        this.isMoviedLoading = true;
        this.searchService.fetchMovies(this.searchText, pageNo)
            .subscribe((response: Search) => {
                this.isMoviedLoading = false; // hide the loading
                this.isSearched = true;

                if (response.Error) {
                    this.errorMsg = response.Error;
                    this.isInitialLoading = false;
                } else if (response.Search) {
                    this.movies = response.Search;

                    if (initialSearch) {
                        this.isInitialLoading = false; // hide the initial loading

                        // set initial pagination configuration
                        this.paginationConfig = {
                            itemsPerPage: this.itemsPerPage,
                            currentPage: pageNo,
                            totalItems: response.totalResults
                        };
                    }
                } else {
                    this.errorMsg = 'Unknown error occured';
                }
            },
            (error: any) => {
                this.errorMsg = 'Unknown error occured';
            }
        );
    }

    getMovieDetailsById(id) {
        // scroll to the top to show the details via search service
        window.scroll(0, 0);

        // fethch movie detail from API
        this.searchService.getMovieDetailsById(id)
            .subscribe((response: any) => {
                this.isDetailsLoading = false; // hide the loading
                this.movieDetail = response;
            },
            (error: any) => {
                this.errorMsg = 'Unknown error occured';
            }
        );
    }

    pageChanged(event){
        this.movieDetail = null;
        this.searchMovies(event , false);
        window.scroll(0, 0);
    }

    counter(i: number) {
        return new Array(i);
    }
}
