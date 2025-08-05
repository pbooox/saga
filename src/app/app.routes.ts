import { Routes } from '@angular/router';
import {InicioComponent} from './pages/inicio/inicio.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {TramitesComponent} from './pages/tramites/tramites.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full'
  },
  {
    path: 'tramites',
    component: TramitesComponent,
    pathMatch: 'full'
  }
];
