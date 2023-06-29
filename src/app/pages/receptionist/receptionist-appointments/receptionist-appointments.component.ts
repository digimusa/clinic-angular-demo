import { Component } from '@angular/core';

@Component({
  selector: 'app-receptionist-appointments',
  templateUrl: './receptionist-appointments.component.html',
  styleUrls: ['./receptionist-appointments.component.css']
})
export class ReceptionistAppointmentsComponent {
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
