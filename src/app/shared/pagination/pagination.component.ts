import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() config: any;
  itemsPerPageSelect: any[];

  constructor() {
    this.itemsPerPageSelect = [6, 8, 10];
  }

  ngOnInit(): void {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  get startCurrPageNumber() {
    return ((this.config.currentPage - 1) * this.config.itemsPerPage  + 1);
  }

  get endCurrPageNumber() {
    return (
        (this.config.currentPage * this.config.itemsPerPage) > this.config.totalItems
      ) ? this.config.totalItems : (this.config.currentPage * this.config.itemsPerPage);
  }

  updateItemsPerPage(numItems) {
    this.config.itemsPerPage = numItems;
    this.config.currentPage = 1;
  }

}
