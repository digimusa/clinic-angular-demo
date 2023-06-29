import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-receptionist',
  templateUrl: './add-receptionist.component.html',
  styleUrls: ['./add-receptionist.component.css'],
})
export class AddReceptionistComponent implements OnInit {
  addReceptionistForm!: FormGroup;
  isSubmitted: boolean = false;
  responseMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private adminService: AdminService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.addReceptionistFormInit();
  }

  addReceptionistFormInit() {
    this.addReceptionistForm = this.fb.group({
      email: this.fb.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.compose([Validators.required])),
    });
  }

  proceedAddReceptionist() {
    this.ngxService.start();
    this.isSubmitted = true;
    const user: User = {
      firstName: this.addDoctorFormError['firstName'].value,
      lastName: this.addDoctorFormError['lastName'].value,
      email: this.addDoctorFormError['email'].value,
      password: this.addDoctorFormError['password'].value,
    };
    this.adminService.addNewReceptionist(user).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.notificationService.showSuccess(
          'Doctor added successfully',
          'SUCCESS'
        );
        this.addReceptionistForm.value.clear;
        this.router.navigate(['/admin-reception']);
      },
      (error: any) => {
        this.ngxService.stop();
        console.log('error: ', error);
      }
    );
  }

  //errors
  get addDoctorFormError() {
    return this.addReceptionistForm.controls;
  }
}
