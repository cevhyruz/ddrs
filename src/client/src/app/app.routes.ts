import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadComponent: () => import ('./pages/landing/landing').then(m => m.Landing),
  },
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    // data: {
    //   title: 'Home',
    //   breadcrumb: 'layout'
    // },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then(m => m.routes),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/routes').then(m => m.routes),
      },
      {
        path: 'owners',
        loadChildren: () => import('./views/owners/routes').then(m => m.routes)
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
