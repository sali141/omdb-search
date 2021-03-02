import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    errorMsg: string;
    isLoading: boolean;
    isDetailsLoading: boolean;
    isSearched: boolean;
    movies: any[];
    movieDetail: any;
    paginationConfig: any;

    constructor(
        private searchService: SearchService
    ) {}

    ngOnInit(): void {
        this.searchService.searchText.subscribe((data) => {
            this.isLoading = true; // show the loading untill the data recieved from API
            this.errorMsg = null;
            this.movieDetail = null;
            this.searchMovies(data);
        });

        this.searchService.movieDetailsId.subscribe((data) => {
            this.isDetailsLoading = true; // show the movie details loading untill the data is recieved
            this.getMovieDetailsById(data);
        });
    }

    searchMovies(searchText){
        // get search result from the API via search service
        this.searchService.fetchMovies(searchText)
            .subscribe((response: any) => {
                this.isLoading = false; // hide the loading
                this.isSearched = true;

                if (response.Error) {
                    this.errorMsg = response.Error;
                } else if (response.Search) {
                    this.movies = response.Search;

                    // set initial pagination configuration
                    this.paginationConfig = {
                        itemsPerPage: 6,
                        currentPage: 1,
                        totalItems: this.movies.length
                    };
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
        this.paginationConfig.currentPage = event;
    }
}
