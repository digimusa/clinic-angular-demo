import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointments } from 'src/app/models/appointments';
import { Doctor } from 'src/app/models/doctor';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.component.html',
  styleUrls: ['./admin-appointment.component.css'],
})
export class AdminAppointmentComponent implements OnInit {
  doctor: Doctor[] = [];

  appointments: Appointments[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminService
  ) {}

  ngOnInit(): void {
    this._addNewDoctorForm();
    this.loadAppointments();
  }

  addDoctorForm!: FormGroup;

  visible: boolean = false;

  position: string = 'top';

  private _addNewDoctorForm() {
    this.addDoctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loadAppointments() {
    this.service.getAllAppointments().subscribe((res: Appointments[]) => {
      this.appointments = res;

      console.log('Results ', res);
    });
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
}
