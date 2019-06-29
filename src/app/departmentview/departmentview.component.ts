import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-departmentview',
  templateUrl: './departmentview.component.html',
  styleUrls: ['./departmentview.component.css']
})
export class DepartmentviewComponent implements OnInit {

  hospitals;
  constructor( private hospitalService: HospitalService ) { }

  ngOnInit() {
    this.getDepartments();
   }

   getDepartments() {
    this.hospitals=this.hospitalService.getDepartments();
  }

}
