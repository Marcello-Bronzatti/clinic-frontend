import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../services/appointment.service';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAll().subscribe({
      next: (res) => {
        //console.log(res); // verificar os agendamentos
        this.appointments = res;
      },
      error: (err) => {
        console.error('Erro ao carregar consultas', err);
      },
    });
  }

  cancelAppointment(id: string) {
    if (confirm('Deseja realmente cancelar esta consulta?')) {
      this.appointmentService.cancel(id).subscribe({
        next: () => {
          this.toastr.success('Consulta cancelada com sucesso');
          this.loadAppointments();
        },
        error: (err) => {
          console.error('Erro ao cancelar consulta', err);
          this.toastr.error('Erro ao cancelar consulta');
        },
      });
    }
  }
}
