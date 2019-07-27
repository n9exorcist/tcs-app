import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoratableColumnService {

  constructor() { }

  // Subject allows you to both publish and subscribe
  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event:ColumnSortedEvent){
    // The subject next method is used to send messages to an observable which are then sent to all angular components that are subscribers (a.k.a. observers) of that observable.
    this.columnSortedSource.next(event);
    console.log("1. The subject next method is used to send messages to an observable");
  }
}

export class ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;

}