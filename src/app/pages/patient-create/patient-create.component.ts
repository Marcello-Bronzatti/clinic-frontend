import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-patient-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './patient-create.component.html',
})
export class PatientCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.patientService.create(this.form.value).subscribe({
        next: () => {
          alert('Paciente cadastrado com sucesso');
          this.router.navigate(['/pacientes']); // Redireciona
        },
        error: (err) => console.error('Erro ao cadastrar paciente', err),
      });
    }
  }
}
