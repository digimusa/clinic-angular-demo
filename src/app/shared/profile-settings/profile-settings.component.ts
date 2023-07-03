import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Route, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient';

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
  patient!: Patient;
  userId: any;

  temPatient!: User;
  email!: string;
  firstName!: string;
  lastName!: string;
  contactNo!: string;
  address!: string;
  bloodGroup!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private patientService: PatientService,
    private ngxService: NgxUiLoaderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.editProfileFormInit();
  }

  editProfileFormInit() {
    this.profileForm = this.fb.group({
      email: this.fb.control(this.email, Validators.required),
      firstName: this.fb.control(this.firstName, Validators.required),
      lastName: this.fb.control(this.lastName, Validators.required),
      contactNo: this.fb.control(this.contactNo, Validators.required),
      address: this.fb.control(this.address, Validators.required),
      bloodGroup: this.fb.control(this.bloodGroup, Validators.required),
    });
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.patientService.getSingleUser().subscribe((res: Patient) => {
      this.userId = res.userId;
      this.profileFormError['email'].setValue(res.email);
      this.profileFormError['firstName'].setValue(res.firstName);
      this.profileFormError['lastName'].setValue(res.lastName);
      this.profileFormError['contactNo'].setValue(res.contactNo);
      this.profileFormError['address'].setValue(res.address);
      this.profileFormError['bloodGroup'].setValue(res.bloodGroup);
    });
  }

  saveProfile() {
    this.ngxService.start();
    this.isSubmitted = true;

    const patient: Patient = {
      email: this.profileFormError['email'].value,
      firstName: this.profileFormError['firstName'].value,
      lastName: this.profileFormError['lastName'].value,
      contactNo: this.profileFormError['contactNo'].value,
      address: this.profileFormError['address'].value,
      bloodGroup: this.profileFormError['bloodGroup'].value,
    };

    this.patientService.updateProfile(this.userId, patient).subscribe(
      (res: any) => {
        console.log('res-: ', res.data);
        this.ngxService.stop();
        this.responseMessage = res?.message;
        this.notificationService.showSuccess(this.responseMessage, 'SUCCESS');
        this.notificationService.showSuccess(
          'User updated successfully',
          'SUCCESS'
        );
      },
      (error) => {
        this.ngxService.stop();
        if (error.status == 200) {
          this.notificationService.showSuccess(
            'User updated successfully',
            'SUCCESS'
          );
          return;
        } else {
          this.responseMessage = this.notificationService.showError(
            'Something went wrong',
            'BAD REQUEST'
          );
        }
      }
    );
  }

  // profileFormInit() {
  //   this.profileForm = this.fb.group({
  //     email: this.fb.control(this.email, Validators.required),
  //     firstName: this.fb.control(this.firstName, Validators.required),
  //     lastName: this.fb.control(this.lastName, Validators.required),
  //     contactNo: this.fb.control(this.contactNo, Validators.required),
  //     address: this.fb.control(this.address, Validators.required),
  //   });
  //   console.log('contact: ', this.contactNo);
  // }

  // saveProfile() {
  //   if (this.profileForm.valid) {
  //     let choice = confirm('Are you sure you want to update profile?');
  //     if (choice) {
  //       this.patientService.getSingleUser().subscribe((resID) => {
  //         this.patientService
  //           .updateProfile(resID.id, this.profileForm.value)
  //           .subscribe(
  //             (res) => {
  //               this.notificationService.showSuccess(
  //                 'Updated Succesfully',
  //                 'SUCCESS'
  //               );
  //             },
  //             (error: Response) => {
  //               if (error.status === 404) {
  //                 this.notificationService.showError(
  //                   'Something went wrong',
  //                   'ERROR'
  //                 );
  //               } else {
  //                 this.notificationService.showError('Service Down!', 'ERROR');
  //                 console.log(error);
  //               }
  //             }
  //           );
  //       });
  //     }
  //   }

  // this.ngxService.start();
  // this.isSubmitted = true;
  // const user: User = {
  //   email: this.profileFormError['email'].value,
  //   firstName: this.profileFormError['firstName'].value,
  //   lastName: this.profileFormError['lastName'].value,
  //   contactNo: this.profileFormError['contactNo'].value,
  //   address: this.profileFormError['address'].value,
  // };
  // this.patientService.updateProfile(user).subscribe(
  //   (response: any) => {
  //     this.ngxService.stop();
  //     this.responseMessage = response?.message;
  //     this.notificationService.showSuccess(
  //       'Profile Updated successfully',
  //       'SUCCESS'
  //     );
  //   },
  //   (error) => {
  //     this.ngxService.stop();
  //     this.notificationService.showSuccess('Profile Not Updated', 'FAIL');
  //     console.log('error: ', error);
  //   }
  // );
  // }

  // profileSetValue() {}

  //errors
  get profileFormError() {
    return this.profileForm.controls;
  }
}
