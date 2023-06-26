import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReceptionRoutingModule } from './admin-reception-routing.module';
import { AdminReceptionComponent } from './admin-reception.component';


@NgModule({
  declarations: [
    AdminReceptionComponent
  ],
  imports: [
    CommonModule,
    AdminReceptionRoutingModule
  ]
})
export class AdminReceptionModule { }
