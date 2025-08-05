import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-individual-on-boarding-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  templateUrl: './individual-on-boarding-form.component.html',
  styleUrl: './individual-on-boarding-form.component.scss'
})
export class IndividualOnBoardingFormComponent {

  faGoogle = faGoogle;
  faFacebook = faFacebook;

  nombres = signal('');
  apellidos = signal('');
  correo = signal('');
  telefono = signal('');
  cui = signal('');
  fechaNacimiento = signal('');
  genero = signal('');
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

  accederConGoogle() {
    console.log('Inicio de sesión con Google');
  }

  accederConFacebook() {
    console.log('Inicio de sesión con Facebook');
  }
}
