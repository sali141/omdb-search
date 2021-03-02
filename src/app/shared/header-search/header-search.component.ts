import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-header-search',
    templateUrl: './header-search.component.html',
    styleUrls: ['./header-search.component.scss'],
})

export class HeaderSearchComponent implements OnInit {
    searchText: string;

    constructor(
        private searchService: SearchService
        )
    {}

    ngOnInit(): void {}

    searchMovies() {
        if (this.searchText) {
            this.searchService.searchText.next(this.searchText);
        }
    }
}
