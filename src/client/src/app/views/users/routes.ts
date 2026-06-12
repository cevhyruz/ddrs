import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./users').then(m => m.Users),
        data: {
          breadcrumb: 'User Accounts'
        }
      }
    ]
  }
];


