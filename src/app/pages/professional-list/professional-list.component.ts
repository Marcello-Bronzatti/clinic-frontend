import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfessionalService } from '../../services/professional.service';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-professional-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './professional-list.component.html',
})
export class ProfessionalListComponent implements OnInit {
  professionals: any[] = [];

  constructor(
    private professionalService: ProfessionalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.professionalService.getAll().subscribe({
      next: (res) => (this.professionals = res),
      error: () => this.toastr.error('Erro ao carregar profissionais'),
    });
  }

  deleteProfessional(id: string) {
    if (confirm('Deseja realmente excluir este profissional?')) {
      this.professionalService.delete(id).subscribe({
        next: () => {
          this.toastr.success('Profissional excluído com sucesso');
          this.loadProfessionals();
        },
        error: () => this.toastr.error('Erro ao excluir profissional'),
      });
    }
  }
}
