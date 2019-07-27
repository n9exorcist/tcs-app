import { Directive, OnInit, Output, EventEmitter } from '@angular/core';
import { SoratableColumnService } from './soratable-column.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[sortable-table]'
})
export class SortableColumnDirective implements OnInit  {

  constructor(private  sortableColumnService:  SoratableColumnService) { }

  @Output() sorted= new EventEmitter();

  private columnsortedSubscription: Subscription;

  ngOnInit(){
    this.columnsortedSubscription = this.sortableColumnService.columnSorted$.subscribe(event => {
      this.sorted.emit(event);
    })
  }
}
