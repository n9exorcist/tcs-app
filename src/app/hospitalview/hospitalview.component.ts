import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { Hospitals } from '../hospitals';

@Component({
  selector: 'app-hospitalview',
  templateUrl: './hospitalview.component.html',
  styleUrls: ['./hospitalview.component.css']
})
export class HospitalviewComponent implements OnInit {
  hospitals;
  constructor( private hospitalService: HospitalService ) { }

  ngOnInit() {
    this.showHospitals();
   }

  onSorted($event){
   console.log("clcik", $event); 
  }

  showHospitals() {
    this.hospitals=this.hospitalService.getHospitals();
  }

}
