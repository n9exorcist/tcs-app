import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalviewComponent } from './hospitalview/hospitalview.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalviewComponent,
    DepartmentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
