import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { er } from '@fullcalendar/core/internal-common';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Appointments } from 'src/app/models/appointments';
import { AppointmentService } from 'src/app/services/appointment.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent implements OnInit {
  bookAppointmentForm!: FormGroup;
  isSubmitted: boolean = false;
  responseMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private appService: AppointmentService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.bookAppointmentInit();
  }

  bookAppointmentInit() {
    this.bookAppointmentForm = this.fb.group({
      bookingdate: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  bookApp() {
    this.ngxService.start();
    this.isSubmitted = true;
    const appointment: Appointments = {
      appointmentBookingDate:
        this.bookAppointmentFormError['bookingdate'].value,
      problem: this.bookAppointmentFormError['details'].value,
      patient_id: 1,
    };
    this.appService.createAppointment(appointment).subscribe(
      (res: any) => {
        this.ngxService.stop();
        this.responseMessage = res?.message;
        this.notificationService.showSuccess(
          'Appointment succesfully booked!',
          'SUCCESS'
        );
      },
      (error) => {
        this.ngxService.stop();
        console.log('error: ', error);
      }
    );
  }

  // errors
  get bookAppointmentFormError() {
    return this.bookAppointmentForm.controls;
  }
}
