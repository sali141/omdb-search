import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
    selector: 'app-movie-list-item',
    templateUrl: './movie-list-item.component.html',
    styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent implements OnInit {
    @Input() movie: any;
    @Input() isListItem: boolean;

    constructor(
        private searchService: SearchService
    ) {}

    ngOnInit(): void {}

    onDetailsClick(id) {
        if (id) {
            this.searchService.movieDetailsId.next(id);
        }
    }
}

