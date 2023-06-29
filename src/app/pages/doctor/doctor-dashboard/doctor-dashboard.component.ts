import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Appointments } from 'src/app/models/appointments';
import { Doctor } from 'src/app/models/doctor';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {
  getAppointments!: Appointments[];
  doctor!: any;

  constructor(
    private modalService: BsModalService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    // this.getCurrentDoctor();
    // this.getAppointmentsForDoctor();
  }

  // getCurrentDoctor() {
  //   this.doctorService.getCurrentDoctor().subscribe((doctor: Doctor) => {
  //     console.log('doctor dash: ', doctor.userId);
  //     console.log('doctor - id or email: ', doctor.email);
  //     this.doctor = doctor.email;
  //     console.log('this.doctor: ', this.doctor);
  //   });
  // }

  // getAppointmentsForDoctor() {
  //   console.log('doctor - id or email: ', this.doctor.email);
  //   // this.appointmentService.getAppointmentsForDoctor();
  // }
}
