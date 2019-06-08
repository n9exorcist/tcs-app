import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalviewComponent } from './hospitalview/hospitalview.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';

const routes: Routes = [
  {path:'hospital', component: HospitalviewComponent},
  {path:'department', component: DepartmentviewComponent},
  {path:'', component: HospitalviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
