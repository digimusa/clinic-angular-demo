import { Injectable } from '@angular/core';
import { Appointments } from '../models/appointments';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiURL = environment.apiUrl + '/appointment';
  constructor(private http: HttpClient) {}

  createAppointment(data: Appointments) {
    return this.http.post<Appointments>(
      this.apiURL + '/create-appointment',
      data
    );
  }

  getAllAppointmentsByPatientId(id: any) {
    return this.http.get(this.apiURL + '/appointments-for-patient/', id);
  }

  getAllAppointmentsByDoctorId(id: any) {
    return this.http.get(this.apiURL + '/appointments-for-patient/', id);
  }

  updateAppointmentById(id: string, data: any) {
    return this.http.put(this.apiURL + '/update-appointment/', id, data);
  }

  getAllAppointments() {
    return this.http.get<Appointments>(this.apiURL + '/get-all-appointments');
  }
}
