import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { PatientService } from '../../services/patient.service';
import { ProfessionalService } from '../../services/professional.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-appointment-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './appointment-create.component.html',
})
export class AppointmentCreateComponent implements OnInit {
  form: FormGroup;
  patients: any[] = [];
  professionals: any[] = [];
  availableTimes: string[] = [];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private professionalService: ProfessionalService,
    private router: Router
  ) {
    this.form = this.fb.group({
      patientId: ['', Validators.required],
      professionalId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadPatients();
    this.loadProfessionals();
  }

  loadPatients() {
    this.patientService.getAll().subscribe((res) => (this.patients = res));
  }

  loadProfessionals() {
    this.professionalService
      .getAll()
      .subscribe((res) => (this.professionals = res));
  }

  onDateOrProfessionalChange() {
    const professionalId = this.form.get('professionalId')?.value;
    const date = this.form.get('date')?.value;
    if (professionalId && date) {
      this.appointmentService
        .getAvailableTimes(professionalId, date)
        .subscribe((times) => (this.availableTimes = times));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const { patientId, professionalId, date, time } = this.form.value;
      const scheduledAt = `${date}T${time}:00`;

      this.appointmentService
        .create({ patientId, professionalId, scheduledAt })
        .subscribe({
          next: () => {
            alert('Consulta agendada com sucesso');
            this.router.navigate(['/consultas']); // Redireciona
          },
          error: (err) => console.error('Erro ao agendar', err),
        });
    }
  }
}
