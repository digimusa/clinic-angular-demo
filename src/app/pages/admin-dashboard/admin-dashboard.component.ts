import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from 'fullcalendar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/user';
import { Doctor } from 'src/app/models/doctor';
import { Appointments } from 'src/app/models/appointments';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  modalRef?: BsModalRef;
  title: any;
  presentDays: number = 0;
  absentDays: number = 0;

  //totals
  totDoctors: number = 0;
  totAppointments: number = 0;
  totReceptionists: number = 0;
  totPatients: number = 0;

  events: any = [
    { title: 'Present', date: '2023-06-30', color: '#0000FF' },
    { title: 'Absent', date: '2023-06-27', color: '#0000FF' },
    { title: 'Present', date: '2023-06-25', color: '#FF0000' },
    { title: 'Meeting', start: new Date() },
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    // weekends: false,
    events: this.events,
    eventClick: this.handleDateClick.bind(this),
  };
  config = {
    animated: true,
  };
  @ViewChild('template') template!: string;
  start: any;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private service: AdminService
  ) {}
  ngOnInit(): void {
    this.events.forEach((e: { [x: string]: string }) => {
      if (e['title'] == 'Present') {
        this.presentDays++;
      } else {
        this.absentDays++;
      }
    });
    this.getTotDoctors();
    this.getTotPatients();
    this.getTotAppointments();
    this.getTotReceptionists();
  }
  handleDateClick(arg: any) {
    this.title = arg.event._def.title;
    this.start = arg.event.start;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  getTotDoctors() {
    this.service.getAllDoctors().subscribe((res: Doctor[]) => {
      this.totDoctors = res.length;
    });
  }

  getTotPatients() {
    this.service.getAllPatients().subscribe((res: User[]) => {
      this.totPatients = res.length;
    });
  }

  getTotReceptionists() {
    this.service.getAllReceptionists().subscribe((res: User[]) => {
      this.totReceptionists = res.length;
    });
  }

  getTotAppointments() {
    this.service.getAllAppointments().subscribe((res: Appointments[]) => {
      this.totAppointments = res.length;
    });
  }
}
