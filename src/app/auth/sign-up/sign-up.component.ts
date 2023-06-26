import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  input = document.getElementById('password') as HTMLInputElement | null;

  password = this.input?.value;

  constructor(
    private builder: FormBuilder,
    //private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  registerform = this.builder.group({
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
  });

  proceedRegistration() {
    if (this.registerform.valid) {
      this.service.register(this.registerform.value).subscribe(
        (res) => {
          window.alert('Contact Admin For Access ' + ' Sign Up Successful!');
          /*this.toastr.success(
              'Contact Admin For Access',
              'Sign Up Successful!'
            );*/
          //this.router.navigate(['sign-in']);
        },
        (error: Response) => {
          if (error.status === 500) window.alert('username already exists');
          //this.toastr.warning('username already exists');
          else {
            // We wanna display generic error message and log the error
            alert('An Unexpected Error Occured.');
            console.log(error);
          }
        }
      );
    } else {
      window.alert('Please enter valid data');
      //this.toastr.warning('Please enter valid data');
    }
  }
}
