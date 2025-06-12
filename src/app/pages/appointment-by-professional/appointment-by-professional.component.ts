import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-appointment-by-professional',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './appointment-by-professional.component.html',
})
export class AppointmentByProfessionalComponent implements OnInit {
  professionalId!: string;
  appointments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.professionalId = this.route.snapshot.paramMap.get('id')!;
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService
      .getAllByProfessional(this.professionalId)
      .subscribe((res) => (this.appointments = res));
  }
}
