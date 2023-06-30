import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Route, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css'],
})
export class PatientSidebarComponent implements OnInit {
  patient!: User;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private patientService: PatientService,
    private ngxService: NgxUiLoaderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.patientService.getSingleUser().subscribe((res: User) => {
      this.patient = res;
      this.patient.firstName = res.firstName;
      this.patient.lastName = res.lastName;
    });
  }
  firstName!: string;
  lastName!: string;
}
