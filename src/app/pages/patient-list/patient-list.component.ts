import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];

  constructor(
    private patientService: PatientService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getAll().subscribe({
      next: (res) => (this.patients = res),
      error: () => this.toastr.error('Erro ao carregar pacientes'),
    });
  }

  deletePatient(id: string) {
    if (confirm('Deseja realmente excluir este paciente?')) {
      this.patientService.delete(id).subscribe({
        next: () => {
          this.toastr.success('Paciente excluído com sucesso');
          this.loadPatients(); // atualiza a lista
        },
        error: () => this.toastr.error('Erro ao excluir paciente'),
      });
    }
  }
}
