import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiURL = environment.apiUrl + '/admin';

  constructor(private http: HttpClient) {}

  getAllDoctors() {
    return this.http.get<Doctor[]>(this.apiURL + '/viewDoctor');
  }

  getAllPatients() {
    return this.http.get<User[]>(this.apiURL + '/viewPatients');
  }

  getAllReceptionists() {
    return this.http.get<User[]>(this.apiURL + '/viewReceptionists');
  }

  //Check type
  getAllAppointments() {
    return this.http.get<any>(this.apiURL + '/viewAppointments');
  }

  getAllAdmins() {
    return this.http.get<User[]>(this.apiURL + '/viewAdmins');
  }

  addNewDoctor(data: Doctor) {
    return this.http.post<Doctor>(this.apiURL + '/addNewDoctor', data);
  }

  addNewReceptionist(data: User) {
    return this.http.post<User>(this.apiURL + '/addNewReceptionist', data);
  }
}
