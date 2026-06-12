import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard')
      .then(m => m.Dashboard),
    data: {
      title: 'Dashboard',
      lead: 'Manage your dashboard data information with ease',
      breadcrumb: 'route'

    }
  }
];

