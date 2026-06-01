import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dog')
      .then(m => m.Dog),
    data: {
      title: 'Dashboard',
      lead: 'Manage your dashboard data information with ease'
    }
  }
];


