import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { SoratableColumnService } from './soratable-column.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-sortable]',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.css']
})
export class SortableComponent implements OnInit, OnDestroy {

  constructor(private SoratableColumnService: SoratableColumnService ) { }

  @Input('sortable-column') columnName: string;
  @Input('sortable-direction') sortDirection: string = '';
  // Component that Receives Messages
  public columnSortedSubscription: Subscription;

  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    // The observable subscribe method is used by angular components to subscribe to messages that are sent to an observable.
    this.columnSortedSubscription = this.SoratableColumnService.columnSorted$.subscribe(event => {
      // reset this column's sort direction to hide the sort icons
      console.log("event", event);
      if(this.columnName != event.sortColumn){
        console.log("subscribe to sort changes so we can react when other columns are sorted");
        this.sortDirection = '';
      }
    })

  }

  @HostListener('click') sort() {
    this.sortDirection = this.sortDirection === 'asc'? 'desc' : 'asc';
    this.SoratableColumnService.columnSorted({sortColumn: this.columnName, sortDirection:this.sortDirection });
    console.log("2. Host Listener is working");
  }

  ngOnDestroy(){
    this.columnSortedSubscription.unsubscribe();
    console.log("3. Destroyed");
  }
}
