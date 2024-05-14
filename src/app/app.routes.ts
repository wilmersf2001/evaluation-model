import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EvaluateMonitoringComponent } from './pages/evaluate-monitoring/evaluate-monitoring.component';
import { SelectedSchoolComponent } from './pages/evaluate-monitoring/selected-school/selected-school.component';
import { EvaluateSchoolComponent } from './pages/evaluate-monitoring/evaluate-school/evaluate-school.component';
import { EvaluateCertificationComponent } from './pages/evaluate-certification/evaluate-certification.component';

export const routes: Routes = [
  { path: 'login', title: 'Iniciar Sesión', component: LoginComponent },
  {
    path: 'home',
    title: 'Inicio',
    component: HomeComponent,
    children: [
      { path: 'profile', title: 'Perfil', component: ProfileComponent },
      {
        path: 'assessment',
        title: 'Evaluar Seguimiento',
        component: EvaluateMonitoringComponent,
        children: [
          {
            path: 'evaluate-monitoring',
            title: 'Seleccionar Escuela',
            component: SelectedSchoolComponent,
          },
          {
            path: 'evaluate-monitoring/:date/:idstaff',
            title: 'Evaluar Escuela',
            component: EvaluateSchoolComponent,
          },
          { path: '', pathMatch: 'full', redirectTo: 'evaluate-monitoring' },
          { path: '**', pathMatch: 'full', redirectTo: 'evaluate-monitoring' },
        ],
      },
      {
        path: 'evaluate-certification',
        title: 'Evaluar Certificación',
        component: EvaluateCertificationComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'profile' },
      { path: '**', pathMatch: 'full', redirectTo: 'profile' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
