import {Component, inject, signal} from '@angular/core';
import {FooterComponent} from "../../components/shared/footer/footer.component";
import {HeaderComponent} from "../../components/shared/header/header.component";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Router, RouterLink} from '@angular/router';
import {FormUtils} from '../../utils/form-utils';
import { LoginPayload } from '../../interfaces/auth/auth.interface';
import { AuthService } from '../../core/auth/services/auth.service';
import { AlertService } from '../../core/services/alert.service';

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
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  // injects
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private alert = inject(AlertService);
  // utils
  formUtils = FormUtils;

  faGoogle = faGoogle;
  faFacebook = faFacebook;

  // signals
  recordar = signal(false);
  verClave = signal(false);

  loginForm = this.fb.group({
    correo: ['', [Validators.required, /*Validators.pattern(this.formUtils.patronCorreo)*/]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
  });

  alternarVisibilidadClave() {
    this.verClave.set(!this.verClave());
  }

  accederConGoogle() {
    console.log('Inicio de sesión con Google');
  }

  accederConFacebook() {
    console.log('Inicio de sesión con Facebook');
  }

  async iniciarSesion(): Promise<void> {
    this.loginForm.markAllAsTouched();
    this.loginForm.updateValueAndValidity();
    if (this.loginForm.invalid){
      await this.alert.error('Formulario inválido', 'Por favor corrige los campos marcados.');
      return;
    }

    const f = this.loginForm.value;
    const payload: LoginPayload = {
      correo: f.correo!,
      contrasena: f.contrasena!
    };

    this.authService.login(payload)
      .subscribe({
        next: (isAuthenticated) => {
          if (isAuthenticated) {
            this.router.navigateByUrl('/');
          }
        },
        error: (err) => {
          const backendMsg = err?.error?.mensaje || err?.message || 'Credenciales inválidas';
          this.alert.error('Error de inicio de sesión', backendMsg);
        }
      });
  }

  recuperarClave() {
    console.log('Recuperar clave solicitado');
  }


  soporteTecnico() {
    console.log('Soporte técnico solicitado');
  }

  verManualUsuario() {
    console.log('Manual de usuario solicitado');
  }
}
