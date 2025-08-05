import {Component, signal} from '@angular/core';
import {FooterComponent} from '../../components/web/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../../components/web/header/header.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {IndividualOnBoardingFormComponent} from './components/individual-on-boarding-form/individual-on-boarding-form.component';
import {
  JuridicoOnboardingFormComponent
} from './components/juridico-on-boarding-form/juridico-onboarding-form.component';

@Component({
  selector: 'app-registro',
  imports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    NgOptimizedImage,

    RouterLink,
    IndividualOnBoardingFormComponent,
    JuridicoOnboardingFormComponent
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  tipoUsuario = signal('individual');
  correo = signal('');
  clave = signal('');
  recordar = signal(false);
  verClave = signal(false);

  seleccionarTipoUsuario(tipo: 'individual' | 'juridica') {
    this.tipoUsuario.set(tipo);
    console.log('Cambiando tipo de usuario');
  }

  soporteTecnico() {
    console.log('Soporte técnico solicitado');
  }

  verManualUsuario() {
    console.log('Manual de usuario solicitado');
  }
}
