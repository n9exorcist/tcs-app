import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../app/departments';
import { Hospitals } from '../app/hospitals';
import { DEPARTMENTS } from '../app/departments-data';
import { HOSPITALS } from '../app/hospitals-data';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  constructor(
    private http: HttpClient
  ) { }

  getDepartments(): Departments[] {
    return DEPARTMENTS;
  }

  getHospitals(): Hospitals[] {
    return HOSPITALS;
  }





}
