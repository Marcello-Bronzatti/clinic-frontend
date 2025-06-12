import { Routes } from '@angular/router';
import { PatientCreateComponent } from './pages/patient-create/patient-create.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { ProfessionalCreateComponent } from './pages/professional-create/professional-create.component';
import { ProfessionalListComponent } from './pages/professional-list/professional-list.component';

import { AuthGuard } from './guards/auth.guard.spec';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AppointmentCreateComponent } from './pages/appointment-create/appointment-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'consultas', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'pacientes/novo',
    component: PatientCreateComponent,
    canActivate: [AuthGuard], // Bloqueia acesso ao usuário se não tiver autenticado
  },
  {
    path: 'pacientes',
    component: PatientListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'consultas',
    component: AppointmentListComponent,
    canActivate: [AuthGuard], // Bloqueia acesso ao usuário se não tiver autenticado
  },
  {
    path: 'consultas/nova',
    component: AppointmentCreateComponent,
    canActivate: [AuthGuard], // Bloqueia acesso ao usuário se não tiver autenticado
  },
  {
    path: 'profissionais/novo',
    component: ProfessionalCreateComponent,
    canActivate: [AuthGuard], // Bloqueia acesso ao usuário se não tiver autenticado
  },
  {
    path: 'profissionais',
    component: ProfessionalListComponent,
    canActivate: [AuthGuard], // Bloqueia acesso ao usuário se não tiver autenticado
  },
  { path: '**', component: NotFoundComponent }, // deve ser sempre a última
];
