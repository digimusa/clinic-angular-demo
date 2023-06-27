import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent {
  customers = [
    {
      id: 1000,
      name: 'James Butt',
      appointmentDate: '27-06-2023',
      appointmentTime: '10:00am',
      status: 'Pending',
      verified: true
    }
  ]
}
