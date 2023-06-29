import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  apiUrl = environment.apiUrl + '/doctor';
  apiUrlAppointment = environment.apiUrl + '/doctor';

  constructor(private http: HttpClient) {}

  getCurrentDoctor() {
    return this.http.get(this.apiUrl + '/get-doctor');
  }
}
