import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalviewComponent } from './hospitalview/hospitalview.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';
import { HttpClientModule } from '@angular/common/http';
import { SortableColumnDirective } from './sortable/sortable-column.directive';
import { SortableComponent } from './sortable/sortable.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalviewComponent,
    DepartmentviewComponent,
    SortableColumnDirective,
    SortableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //No need to add services here, as we have added providedIn in each service file.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
