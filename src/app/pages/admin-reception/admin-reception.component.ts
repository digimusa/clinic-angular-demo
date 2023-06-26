import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-reception',
  templateUrl: './admin-reception.component.html',
  styleUrls: ['./admin-reception.component.css'],
})
export class AdminReceptionComponent {
  addReceptionistForm!: FormGroup;

  visible: boolean = false;

  position: string = 'top';

  customers = [
    {
      id: 1000,
      name: 'James Butt',
      country: {
        name: 'Algeria',
        code: 'dz',
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png',
      },
      balance: 70663,
    },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this._addNewReceptionistForm();
  }

  private _addNewReceptionistForm() {
    this.addReceptionistForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
