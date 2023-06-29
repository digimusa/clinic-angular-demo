import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
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
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.ngxService.start();
    this.isSubmitted = true;

    const user: User = {
      email: this.loginFormError['email'].value,
      password: this.loginFormError['password'].value,
    };

    if (user != null) {
      console.log('valied - ', user);
    } else {
      console.log('not valied');
    }

    this.authService.login(user).subscribe(
      (response: any) => {
        this.ngxService.stop();
        console.log('respon: ', response);
        this.responseMessage = response?.message;
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response?.token);
        localStorage.setItem('roles', JSON.stringify(response.user.roles));
        console.log('message: ', this.responseMessage);

        // console.log('this.authService.getUserRole(): ', this.authService.getUserRole());
        const role = response.user.roles[0].roleName;
        console.log('role-name: ', role);
        console.log(
          'this.authService.userValue: ',
          this.userService.isLoggedIn()
        );
        if (this.userService.isLoggedIn() && role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (this.userService.isLoggedIn() && role === 'DOCTOR') {
          this.router.navigate(['/doctor-dashboard']);
        } else if (this.userService.isLoggedIn() && role === 'RECEPTION') {
          this.router.navigate(['/receptionist-dashboard']);
        } else if (this.userService.isLoggedIn() && role === 'PATIENT') {
          this.router.navigate(['/patient-dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        this.ngxService.stop();
        console.log('error: ', error);
      }
    );
  }

  // errors
  get loginFormError() {
    return this.loginForm.controls;
  }
}
