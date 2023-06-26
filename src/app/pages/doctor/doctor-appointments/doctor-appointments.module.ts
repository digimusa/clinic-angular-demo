import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorAppointmentsRoutingModule } from './doctor-appointments-routing.module';
import { DoctorAppointmentsComponent } from './doctor-appointments.component';


@NgModule({
  declarations: [
    DoctorAppointmentsComponent
  ],
  imports: [
    CommonModule,
    DoctorAppointmentsRoutingModule
  ]
})
export class DoctorAppointmentsModule { }
