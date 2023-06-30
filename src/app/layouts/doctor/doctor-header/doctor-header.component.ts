import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css'],
})
export class DoctorHeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private ngxService: NgxUiLoaderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.ngxService.start();
    this.authService.logout();
    this.notificationService.showSuccess('Logout successfully', 'SUCCESS');
    this.ngxService.stop();
  }
}
