import { Component, OnInit } from '@angular/core';
import { Appointments } from 'src/app/models/appointments';
import { Doctor } from 'src/app/models/doctor';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css'],
})
export class DoctorAppointmentsComponent implements OnInit {
  appointments!: Appointments[];
  doctor!: Doctor;

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.getCurrentDoctor();
  }

  getCurrentDoctor() {
    this.doctorService.getCurrentDoctor().subscribe((doctor: Doctor) => {
      this.doctor = doctor.userId;
      this.getAppointmentsForDoctor();
    });
  }

  getAppointmentsForDoctor() {
    this.appointmentService
      .getAppointmentsForDoctor(this.doctor)
      .subscribe((res: any) => {
        console.log('res-res: ', res);
        this.appointments = res;
        console.log('this.appointments: ', this.appointments);
      });
  }
}
