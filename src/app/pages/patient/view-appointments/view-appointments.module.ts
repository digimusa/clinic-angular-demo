import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAppointmentsRoutingModule } from './view-appointments-routing.module';
import { ViewAppointmentsComponent } from './view-appointments.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
const UX = [TableModule, ButtonModule, DialogModule];

@NgModule({
  declarations: [ViewAppointmentsComponent],
  imports: [
    CommonModule,
    ViewAppointmentsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ...UX,
  ],
})
export class ViewAppointmentsModule {}
