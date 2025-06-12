import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="flex flex-col justify-center items-center h-screen text-center text-gray-700"
    >
      <h1 class="text-5xl font-bold mb-4">404</h1>
      <p class="text-xl mb-6">Página não encontrada.</p>
      <a routerLink="/" class="text-blue-600 hover:underline"
        >Voltar para o início</a
      >
    </div>
  `,
})
export class NotFoundComponent {}
