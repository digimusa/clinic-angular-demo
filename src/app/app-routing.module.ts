import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    path: 'profile-settings',
    loadChildren: () =>
      import('./pages/patient/profile-settings/profile-settings.module').then(
        (m) => m.ProfileSettingsModule
      ),
  },

  { path: 'doctor-dashboard', loadChildren: () => import('./pages/doctor/doctor-dashboard/doctor-dashboard.module').then(m => m.DoctorDashboardModule) },
  { path: 'doctor-appointments', loadChildren: () => import('./pages/doctor/doctor-appointments/doctor-appointments.module').then(m => m.DoctorAppointmentsModule) },
  { path: 'doctor-patients', loadChildren: () => import('./pages/doctor/doctor-patients/doctor-patients.module').then(m => m.DoctorPatientsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
