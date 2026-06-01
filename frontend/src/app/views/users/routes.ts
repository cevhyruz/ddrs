import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./users')
      .then(m => m.Users),
    data: {
      title: 'Dashboard',
      lead: 'Manage your dashboard data information with ease'
    }
  }
];


