import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoratableColumnService {

  constructor() { }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event:ColumnSortedEvent){
    this.columnSortedSource.next(event);
  }
}

export class ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;

}