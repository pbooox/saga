import { Routes } from '@angular/router';
import {InicioPageComponent} from './pages/inicio/inicio-page.component';
import {LoginPageComponent} from './pages/login/login-page.component';
import {RegistroPageComponent} from './pages/registro/registro-page.component';
import {TramitesPageComponent} from './pages/tramites/tramites-page.component';
import {TramitesBetaPageComponent} from './pages/tramites-beta/tramites-beta-page.component';
import { UnauthenticatedGuard } from './core/auth/guards/unauthenticated.guard';
import { VerificacionTokenPageComponent } from './pages/verificacion-token/verificacion-token-page.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full',
    canMatch: [UnauthenticatedGuard]
  },
  {
    path: 'registro',
    component: RegistroPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'tramites',
    component: TramitesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'confirmar',
    component: VerificacionTokenPageComponent,
    pathMatch: 'full'
  },
];
