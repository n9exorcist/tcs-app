import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SoratableColumnService } from './soratable-column.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-sortable]',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.css']
})
export class SortableComponent implements OnInit {

  constructor(private SoratableColumnService: SoratableColumnService ) { }

  @Input('sortable-column') columnName: string;
  @Input('sortable-direction') sortDirection: string = '';
  public columnSortedSubscription: Subscription;

  ngOnInit() {
    this.columnSortedSubscription = this.SoratableColumnService.columnSorted$.subscribe(event => {
      if(this.columnName != event.sortColumn){
        this.sortDirection = '';
      }
    })

  }

  @HostListener('click') sort() {
    this.sortDirection = this.sortDirection === 'asc'? 'desc' : 'asc';
    this.SoratableColumnService.columnSorted({sortColumn: this.columnName, sortDirection:this.sortDirection });
    console.log("Host Listener is working");
  }
}
