import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAppointmentRoutingModule } from './admin-appointment-routing.module';
import { AdminAppointmentComponent } from './admin-appointment.component';


@NgModule({
  declarations: [
    AdminAppointmentComponent
  ],
  imports: [
    CommonModule,
    AdminAppointmentRoutingModule
  ]
})
export class AdminAppointmentModule { }
