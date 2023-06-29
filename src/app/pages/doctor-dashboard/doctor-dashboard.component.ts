import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { AdminService } from 'src/app/services/admin.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {

  addDoctorForm!: FormGroup;

  visible: boolean = false;

  position: string = 'top'; 

  doctor: Doctor[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminService
  ) {}

  ngOnInit(): void {
    this.loadDoctors();
    this._addNewDoctorForm();
  }

  loadDoctors() {
    this.service.getAllDoctors().subscribe((res: Doctor[]) => {
      this.doctor = res;
    });
  }

  private _addNewDoctorForm() {
    this.addDoctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  addDoctor() {
    this.router.navigate(['/admin-doctor/add-doctor']);
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
}
