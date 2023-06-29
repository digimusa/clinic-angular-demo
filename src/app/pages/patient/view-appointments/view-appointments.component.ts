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

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css'],
})
export class ViewAppointmentsComponent implements OnInit {
  appointments: Doctor[] = [];

  cities: City[] = [];

  formGroup: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {}

  ngOnInit(): void {
    console.log(this.loadAppointments);
    this.loadAppointments();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null),
    });
  }

  loadAppointments() {
    this.service.getAllDoctors().subscribe((res: Doctor[]) => {
      this.appointments = res;
      console.log('res: ', res);
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

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
}
