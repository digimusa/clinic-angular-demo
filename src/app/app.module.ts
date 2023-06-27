import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layouts/admin/footer/footer.component';
import { HeaderComponent } from './layouts/admin/header/header.component';
import { SidebarComponent } from './layouts/admin/sidebar/sidebar.component';
import { MainComponent } from './layouts/admin/main/main.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './guards/auth.interceptor';
import { PatientLayoutComponent } from './layouts/patient/patient-layout/patient-layout.component';
import { PatientHeaderComponent } from './layouts/patient/patient-header/patient-header.component';
import { PatientSidebarComponent } from './layouts/patient/patient-sidebar/patient-sidebar.component';
import { DoctorHeaderComponent } from './layouts/doctor/doctor-header/doctor-header.component';
import { DoctorSidebarComponent } from './layouts/doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctorLayoutComponent } from './layouts/doctor/doctor-layout/doctor-layout.component';
import { ChangePasswordComponent } from './shared/change-password/change-password.component';
import { ProfileSettingsComponent } from './shared/profile-settings/profile-settings.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  bgsColor: '#00008B',
  fgsColor: '#21b6a8',
  fgsType: SPINNER.chasingDots,
  fgsSize: 100,
  hasProgressBar: false,
  // "bgsColor": "red",
  // "bgsOpacity": 0.5,
  // "bgsPosition": "bottom-right",
  // "bgsSize": 60,
  // "bgsType": "chasing-dots",
  // "blur": 6,
  // "delay": 0,
  // "fastFadeOut": true,
  // "fgsColor": "#21b6a8",
  // "fgsPosition": "center-center",
  // "fgsSize": 90,
  // "fgsType": "chasing-dots",
  // "gap": 24,
  // "logoPosition": "center-center",
  // "logoSize": 120,
  // "logoUrl": "",
  // "masterLoaderId": "master",
  // "overlayBorderRadius": "0",
  // "overlayColor": "rgba(40, 40, 40, 0.8)",
  // "pbColor": "#21b6a8",
  // "pbDirection": "ltr",
  // "pbThickness": 3,
  // "hasProgressBar": true,
  // "text": "",
  // "textColor": "#FFFFFF",
  // "textPosition": "center-center",
  // "maxTime": -1,
  // "minTime": 300
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    PatientLayoutComponent,
    PatientHeaderComponent,
    PatientSidebarComponent,
    DoctorHeaderComponent,
    DoctorSidebarComponent,
    DoctorLayoutComponent,
    ChangePasswordComponent,
    ProfileSettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot(),
    AuthModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
