import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const UX = [TableModule, ButtonModule, DialogModule];
@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    ...UX,
  ],
})
export class AdminDashboardModule {}
