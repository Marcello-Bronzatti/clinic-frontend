import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProfessionalService } from '../../services/professional.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-professional-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './professional-create.component.html',
})
export class ProfessionalCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private professionalService: ProfessionalService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      specialty: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.professionalService.create(this.form.value).subscribe({
        next: () => {
          this.toastr.success('Profissional cadastrado com sucesso');
          this.form.reset();
        },
        error: () => this.toastr.error('Erro ao cadastrar profissional'),
      });
    }
  }
}
