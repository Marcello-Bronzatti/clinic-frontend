import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-professional-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-list.component.html',
})
export class ProfessionalListComponent implements OnInit {
  professionals: any[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.professionalService.getAll().subscribe({
      next: (res) => (this.professionals = res),
      error: (err) => console.error('Erro ao carregar profissionais', err),
    });
  }
}
