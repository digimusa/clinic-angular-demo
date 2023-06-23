import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, HomeComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [HomeComponent],
})
export class AdminModule {}
