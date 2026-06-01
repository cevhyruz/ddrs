import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then(m => m.routes)
      },
      {
        path: '404',
        loadComponent: () => import('./views/page404/page404').then(m => m.Page404),
        data: {
          title: 'Page Not Found'
        }
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login').then(m => m.Login),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/register/register').then(m => m.Register),
    data: {
      title: 'Register User'
    }
  },
  { path: '**', redirectTo: '404' }
];
