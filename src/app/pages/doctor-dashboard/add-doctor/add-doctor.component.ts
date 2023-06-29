import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Doctor } from 'src/app/models/doctor';
import { NotificationService } from 'src/app/services/notification.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent implements OnInit {
  addDoctorForm!: FormGroup;
  isSubmitted: boolean = false;
  responseMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private authService: AdminService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.addDoctorFormInit();
  }

  addDoctorFormInit() {
    this.addDoctorForm = this.fb.group({
      email: this.fb.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.compose([Validators.required])),
    });
  }

  proceedAddDoctor() {
    this.ngxService.start();
    this.isSubmitted = true;
    const doctor: Doctor = {
      firstName: this.addDoctorFormError['firstName'].value,
      lastName: this.addDoctorFormError['lastName'].value,
      email: this.addDoctorFormError['email'].value,
      password: this.addDoctorFormError['password'].value,
    };
    this.authService.addNewDoctor(doctor).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.notificationService.showSuccess(
          'Doctor added successfully',
          'SUCCESS'
        );
        this.addDoctorForm.value.clear;
        this.router.navigate(['/admin-doctor']);
      },
      (error: any) => {
        this.ngxService.stop();
        console.log('error: ', error);
      }
    );
  }

  //errors
  get addDoctorFormError() {
    return this.addDoctorForm.controls;
  }
}
