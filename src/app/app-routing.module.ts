import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './shared/change-password/change-password.component';
import { ProfileSettingsComponent } from './shared/profile-settings/profile-settings.component';

const routes: Routes = [
  // ADMIN - ROUTES
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./pages/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'admin-doctor',
    loadChildren: () =>
      import('./pages/doctor-dashboard/doctor-dashboard.module').then(
        (m) => m.DoctorDashboardModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'admin-patient',
    loadChildren: () =>
      import('./pages/admin-patient/admin-patient.module').then(
        (m) => m.AdminPatientModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'admin-reception',
    loadChildren: () =>
      import('./pages/admin-reception/admin-reception.module').then(
        (m) => m.AdminReceptionModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'admin-appointment',
    loadChildren: () =>
      import('./pages/admin-appointment/admin-appointment.module').then(
        (m) => m.AdminAppointmentModule
      ),
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },

  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'patient-dashboard',
    loadChildren: () =>
      import('./pages/patient/patient-dashboard/patient-dashboard.module').then(
        (m) => m.PatientDashboardModule
      ),
  },
  {
    path: 'view-appointments',
    loadChildren: () =>
      import('./pages/patient/view-appointments/view-appointments.module').then(
        (m) => m.ViewAppointmentsModule
      ),
  },
  {
    path: 'book-appointment',
    loadChildren: () =>
      import('./pages/patient/book-appointment/book-appointment.module').then(
        (m) => m.BookAppointmentModule
      ),
  },

  {
    path: 'profile-settings',
    component: ProfileSettingsComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },

  { path: 'doctor-dashboard', loadChildren: () => import('./pages/doctor/doctor-dashboard/doctor-dashboard.module').then(m => m.DoctorDashboardModule) },
  { path: 'doctor-appointments', loadChildren: () => import('./pages/doctor/doctor-appointments/doctor-appointments.module').then(m => m.DoctorAppointmentsModule) },
  { path: 'doctor-patients', loadChildren: () => import('./pages/doctor/doctor-patients/doctor-patients.module').then(m => m.DoctorPatientsModule) },
  { path: 'receptionist-dashboard', loadChildren: () => import('./pages/receptionist/receptionist-dashboard/receptionist-dashboard.module').then(m => m.ReceptionistDashboardModule) },
  { path: 'receptionist-appointments', loadChildren: () => import('./pages/receptionist/receptionist-appointments/receptionist-appointments.module').then(m => m.ReceptionistAppointmentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
