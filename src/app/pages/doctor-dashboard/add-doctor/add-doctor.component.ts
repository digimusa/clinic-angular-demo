import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  addDoctorForm!: FormGroup;
  isSubmitted: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngxService: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this._addNewDoctorForm();
  }

  private _addNewDoctorForm() {
    this.addDoctorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.ngxService.start()
    this.isSubmitted = true;
    this.ngxService.stop();
  }

}
