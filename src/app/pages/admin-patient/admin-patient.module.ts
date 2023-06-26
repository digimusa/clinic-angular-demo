import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPatientRoutingModule } from './admin-patient-routing.module';
import { AdminPatientComponent } from './admin-patient.component';


@NgModule({
  declarations: [
    AdminPatientComponent
  ],
  imports: [
    CommonModule,
    AdminPatientRoutingModule
  ]
})
export class AdminPatientModule { }
