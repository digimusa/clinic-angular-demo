import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReceptionComponent } from './admin-reception.component';

const routes: Routes = [{ path: '', component: AdminReceptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminReceptionRoutingModule { }
