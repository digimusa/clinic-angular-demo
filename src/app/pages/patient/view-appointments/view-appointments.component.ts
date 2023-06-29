import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Appointments } from 'src/app/models/appointments';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointments: Appointments[] = [];

  formGroup: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AppointmentService
  ) {}

  ngOnInit(): void {
    console.log(this.loadAppointments);
    this.loadAppointments();
  }

  loadAppointments() {
    this.service.getAllAppointments().subscribe((res: any) => {
      this.appointments = res;
      console.log('res: ', res);
    });
  }
}
