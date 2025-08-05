import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-juridico-on-boarding-form',
  imports: [
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './juridico-onboarding-form.component.html',
  styleUrl: './juridico-onboarding-form.component.scss'
})
export class JuridicoOnboardingFormComponent {
  razonSocial = signal('');
  nit = signal('');
  giroEmpresa = signal('');
  representanteLegal = signal('');
  cuiRepresentante = signal('');
  nombresRepresentanteLegal = signal('');
  apellidosRepresentante = signal('');
  correo = signal('');
  telefono = signal('');
  clave = signal('');
  confirmarClave = signal('');
  verClave = signal(false);
  verConfirmarClave = signal(false);

  alternarVisibilidadClave() {
    this.verClave.set(!this.verClave());
  }
  alternarVisibilidadConfirmarClave() {
    this.verConfirmarClave.set(!this.verConfirmarClave());
  }

}
