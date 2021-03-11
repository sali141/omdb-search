import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  numPages: number;
  pageNumbers: any[] = [];

  @Input() config: any;
  @Output() valueChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.numPages = this.config.totalItems / this.config.itemsPerPage;

    for (let i = 0; i < this.numPages; i++) {
        this.pageNumbers.push(i + 1);
        console.log(i );
    }
  }

  pageChanged(pageNo) {
    this.config.currentPage = pageNo;
    this.valueChanged.emit(pageNo);
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
