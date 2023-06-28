import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {

  constructor(
    private router: Router,
    
  ){}

  // getUserByRole(role: string = '') {
  //   if (!role || role.length == 0) {
  //     this.router.navigate(['./user']);
  //   } else {
  //     this.router.navigate([`./User/${role}`]);
  //   }
  // }
}
