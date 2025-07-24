import { Routes } from '@angular/router';
import {Landing} from './pages/landing/landing';
import {Login} from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
    pathMatch: 'full'
  }
];
