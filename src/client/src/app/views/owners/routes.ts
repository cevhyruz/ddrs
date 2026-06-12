import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./owners')
      .then(m => m.Owners),
    data: {
      title: 'Dashboard',
      lead: 'Manage your dashboard data information with ease'
    }
  }
];



