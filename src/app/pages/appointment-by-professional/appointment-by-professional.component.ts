import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  professionalName: string = '';
  appointments: any[] = [];
  toastr: any;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const professionalId = this.route.snapshot.paramMap.get('id');
    if (professionalId) {
      this.appointmentService.getAllByProfessional(professionalId).subscribe({
        next: (res) => {
          this.appointments = res;
          if (res.length > 0) {
            this.professionalName = res[0].professionalName;
          }
        },
        error: () => {
          this.toastr.error('Erro ao carregar consultas.');
        },
      });
    }
  }

  loadAppointments() {
    this.appointmentService
      .getAllByProfessional(this.professionalId)
      .subscribe((res) => (this.appointments = res));
  }

  goBack(): void {
    this.router.navigate(['/profissionais']);
  }
}
