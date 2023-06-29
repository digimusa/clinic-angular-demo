import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.component.html',
  styleUrls: ['./admin-appointment.component.css'],
})
export class AdminAppointmentComponent implements OnInit {
  doctor: Doctor[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {}

  ngOnInit(): void {
    console.log(this.loadDoctors);
    this._addNewDoctorForm();
  }

  loadDoctors() {
    this.service.getAllDoctors().subscribe((res) => {
      this.doctor = res;
    });
  }

  addDoctorForm!: FormGroup;

  visible: boolean = false;

  position: string = 'top';

  customers = [
    {
      id: 1000,
      name: 'James Butt',
      country: {
        name: 'Algeria',
        code: 'dz',
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png',
      },
      balance: 70663,
    },
  ];

  private _addNewDoctorForm() {
    this.addDoctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
}
