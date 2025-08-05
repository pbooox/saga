import {Component, signal} from '@angular/core';
import {FooterComponent} from "../../components/web/footer/footer.component";
import {HeaderComponent} from "../../components/web/header/header.component";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    NgOptimizedImage,
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faGoogle = faGoogle;
  faFacebook = faFacebook;

  tipoUsuario = signal('individual-on-boarding-form');
  correo = signal('');
  clave = signal('');
  recordar = signal(false);
  verClave = signal(false);

  seleccionarTipoUsuario(tipo: 'individual' | 'juridica') {
    this.tipoUsuario.set(tipo);
    console.log('Cambiando tipo de usuario');
  }

  alternarVisibilidadClave() {
    this.verClave.set(!this.verClave());
  }

  accederConGoogle() {
    console.log('Inicio de sesión con Google');
  }

  accederConFacebook() {
    console.log('Inicio de sesión con Facebook');
  }

  iniciarSesion() {
    console.log('Acceso desde LoginComponent', {
      tipoUsuario: this.tipoUsuario(),
      correo: this.correo(),
      clave: this.clave(),
      recordar: this.recordar()
    });
  }

  recuperarClave() {
    console.log('Recuperar clave solicitado');
  }

  irRegistro() {
    console.log('Ir a registro solicitado');
  }

  soporteTecnico() {
    console.log('Soporte técnico solicitado');
  }

  verManualUsuario() {
    console.log('Manual de usuario solicitado');
  }
}
