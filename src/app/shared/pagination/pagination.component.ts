import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() config: any;
  itemsPerPageSelect: any[];
  @Output() valueChanged = new EventEmitter();

  constructor() {
    this.itemsPerPageSelect = [6, 8, 10];
  }

  ngOnInit(): void {
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.valueChanged.emit(true);
  }

  get startCurrPageNumber() {
    return ((this.config.currentPage - 1) * this.config.itemsPerPage  + 1);
  }

  get endCurrPageNumber() {
    return (
        (this.config.currentPage * this.config.itemsPerPage) > this.config.totalItems
      ) ? this.config.totalItems : (this.config.currentPage * this.config.itemsPerPage);
  }
}
