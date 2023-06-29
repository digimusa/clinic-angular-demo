import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css'],
})
export class AdminPatientComponent implements OnInit {
  user: User[] = [];

  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.service.getAllPatients().subscribe((res: User[]) => {
      this.user = res;
    });
  }
}
