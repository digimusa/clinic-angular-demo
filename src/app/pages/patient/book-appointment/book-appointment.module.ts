import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookAppointmentComponent } from './book-appointment.component';
import { BookAppointmentRoutingModule } from './book-appointment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookAppointmentComponent],
  imports: [
    CommonModule,
    BookAppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookAppointmentModule {}
