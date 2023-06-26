import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-receptionist',
  templateUrl: './add-receptionist.component.html',
  styleUrls: ['./add-receptionist.component.css']
})
export class AddReceptionistComponent implements OnInit {
  addReceptionistForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngxService: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this._addNewReceptionistForm();
  }

  private _addNewReceptionistForm() {
    this.addReceptionistForm = this.fb.group({
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
