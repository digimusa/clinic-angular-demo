import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  isSubmitted: boolean = false;
  responseMessage: any;
  role: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private ngxService: NgxUiLoaderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.registerFormInit();
  }

  registerFormInit() {
    this.signUpForm = this.fb.group({
      email: this.fb.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.compose([Validators.required])),
    });
  }

  proceedRegistration() {
    this.ngxService.start();
    this.isSubmitted = true;
    const user: User = {
      firstName: this.signUpFormError['firstName'].value,
      lastName: this.signUpFormError['lastName'].value,
      email: this.signUpFormError['email'].value,
      password: this.signUpFormError['password'].value,
    };
    this.authService.register(user).subscribe(
      (response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.notificationService.showSuccess(
          'Account registered successfully',
          'SUCCESS'
        );
        this.router.navigate(['/login/login']);
      },
      (error) => {
        this.ngxService.stop();
        console.log('error: ', error);
      }
    );
  }

  // errors
  get signUpFormError() {
    return this.signUpForm.controls;
  }
}
