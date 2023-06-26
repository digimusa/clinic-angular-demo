import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPatientRoutingModule } from './admin-patient-routing.module';
import { AdminPatientComponent } from './admin-patient.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const UX = [TableModule, ButtonModule, DialogModule];

@NgModule({
  declarations: [AdminPatientComponent],
  imports: [
    CommonModule,
    AdminPatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...UX,
  ],
})
export class AdminPatientModule {}
