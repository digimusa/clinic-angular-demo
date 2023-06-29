import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-reception',
  templateUrl: './admin-reception.component.html',
  styleUrls: ['./admin-reception.component.css'],
})
export class AdminReceptionComponent {
  reception: User[] = [];
  addReceptionistForm!: FormGroup;

  visible: boolean = false;

  position: string = 'top';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminService
  ) {}

  ngOnInit(): void {
    this._addNewReceptionistForm();
    this.loadReceptionists();
  }

  private _addNewReceptionistForm() {
    this.addReceptionistForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loadReceptionists() {
    this.service.getAllReceptionists().subscribe((res: User[]) => {
      this.reception = res;
    });
  }

  addReceptionist() {
    this.router.navigate(['/admin-reception/add-receptionist']);
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
}
