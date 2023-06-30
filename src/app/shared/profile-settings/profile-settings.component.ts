import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Route, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  profileForm!: FormGroup;
  isSubmitted: boolean = false;
  responseMessage: any;
  role: any;
  patient!: User;

  email!: string;
  firstName!: string;
  lastName!: string;
  contactNo!: string;
  address!: string;

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
      this.patient.email = res.email;
      this.patient.firstName = res.firstName;
      this.patient.lastName = res.lastName;
      this.patient.contactNo = res.contactNo;
      this.patient.address = res.address;
    });
  }

  profileFormInit() {
    this.profileForm = this.fb.group({
      email: this.fb.control(this.email, Validators.required),
      firstName: this.fb.control(this.firstName, Validators.required),
      lastName: this.fb.control(this.lastName, Validators.required),
      contactNo: this.fb.control(this.contactNo, Validators.required),
      address: this.fb.control(this.address, Validators.required),
    });
  }

  saveProfile() {
    this.ngxService.start();
    this.isSubmitted = true;
    const user: User = {
      email: this.profileFormError['email'].value,
      firstName: this.profileFormError['firstName'].value,
      lastName: this.profileFormError['lastName'].value,
      contactNo: this.profileFormError['contactNo'].value,
      address: this.profileFormError['address'].value,
    };
  }

  profileSetValue() {}

  //errors
  get profileFormError() {
    return this.profileForm.controls;
  }
}
