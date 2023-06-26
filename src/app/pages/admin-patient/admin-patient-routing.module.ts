import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPatientComponent } from './admin-patient.component';

const routes: Routes = [{ path: '', component: AdminPatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPatientRoutingModule { }
