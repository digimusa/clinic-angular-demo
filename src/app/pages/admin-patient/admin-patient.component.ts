import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { ApmodalComponent } from './apmodal/apmodal.component';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css'],
})
export class AdminPatientComponent implements OnInit {
  user: User[] = [];

  constructor(private service: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.service.getAllPatients().subscribe((res: User[]) => {
      this.user = res;
    });
  }

  openModal() {
    this.router.navigate(['/apmodal']);
  }
}
