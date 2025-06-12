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
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './professional-create.component.html',
})
export class ProfessionalCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private professionalService: ProfessionalService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      specialty: ['', Validators.required],
      crm: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.professionalService.create(this.form.value).subscribe({
        next: () => {
          this.toastr.success('Profissional cadastrado com sucesso');
          this.form.reset();
          this.router.navigate(['/profissionais']);
        },
        error: () => this.toastr.error('Erro ao cadastrar profissional'),
      });
    }
  }
}
