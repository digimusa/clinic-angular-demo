import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userdata: any;
  constructor(
    private builder: FormBuilder,
    //private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.service.IsloggedIn()) {
      this.router.navigate(['']);
    }
  }

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.loginform.valid) {
      this.service.getBycode(this.loginform.value.username).subscribe(
        (res: any) => {
          this.userdata = res;
          console.log(this.userdata);
          if (this.userdata.password === this.loginform.value.password) {
            if (this.userdata.isactive) {
              //sessionStorage.setItem('username', this.userdata.id);
              //sessionStorage.setItem('userrole', this.userdata.role);
              window.alert("login success");
              //this.router.navigate(['']);
            } else {
              window.alert("Please contact admin', 'In Active User");
              //this.toastr.error('Please contact admin', 'In Active User');
            }
          } else {
            window.alert("Invalid Credentials");
            //this.toastr.error('Invalid Credentials');
          }
        },
        (error: Response) => {
          if (error.status === 404) 
          window.alert("Username Not Found");
          //this.toastr.warning('Username Not Found');
          else {
            // We wanna display generic error message and log the error
            alert('An Unexpected Error Occured.');
            console.log(error);
          }
        }
      );
    } else {
      window.alert("Please enter valid data");
      //this.toastr.warning('Please enter valid data');
    }
  }
}
