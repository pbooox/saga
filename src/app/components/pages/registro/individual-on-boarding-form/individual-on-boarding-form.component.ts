import { Component, inject, signal } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormUtils} from '../../../../utils/form-utils';
import { RegistroService } from '../../../../core/services/registro/registro.service';
import { AlertService } from '../../../../core/services/alert.service';
import { RegistroPayload } from '../../../../interfaces/auth/auth.interface';
import { HttpHeaders } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

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
  // injects
  private fb = inject(FormBuilder);
  private registroService = inject(RegistroService);
  private alert = inject(AlertService);
  private router = inject(Router);
    //utils
  formUtils = FormUtils;
  // icons
  faGoogle = faGoogle;
  faFacebook = faFacebook;
// variables
  verClave = signal(false);
  verConfirmarClave = signal(false);
  cargando = signal(false);
  exitoMsg = signal<string | null>(null);
  errorMsg = signal<string | null>(null);
  // form
  registroIndividualForm: FormGroup = this.fb.group({
    nombres: ['', [Validators.required, Validators.pattern(this.formUtils.patronSoloLetras)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.formUtils.patronSoloLetras)]],
    correo: ['', [Validators.required, Validators.pattern(this.formUtils.patronCorreo)]],
    telefono: ['', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern(/^\d{4}-\d{4}$/)
    ]],
    cui: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
    nit: ['', [Validators.required, Validators.minLength(6)]],
    contrasena: ['', [Validators.required, Validators.pattern(this.formUtils.patronClave)]],
    confirmContrasena: ['', [Validators.required]],
    aceptoTerminos: [false, [Validators.requiredTrue]],
  }, {
    validators: [
      FormUtils.esCampoUnoIgualCampoDos('contrasena', 'confirmContrasena')
    ]
  })


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

  onTelefonoInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const soloDigitos = (input.value || '').replace(/\D/g, '').slice(0, 8);
    let formatted = soloDigitos;
    if (soloDigitos.length > 4) {
      formatted = `${soloDigitos.slice(0, 4)}-${soloDigitos.slice(4)}`;
    }
    this.registroIndividualForm.get('telefono')?.setValue(formatted, { emitEvent: false });
    this.registroIndividualForm.get('telefono')?.updateValueAndValidity({ emitEvent: false });
  }

  async enviarRegistro(): Promise<void> {
    this.registroIndividualForm.markAllAsTouched();
    this.registroIndividualForm.updateValueAndValidity();
    if (this.registroIndividualForm.invalid) {
      await this.alert.error('Formulario inválido', 'Por favor corrige los campos marcados.');
      return;
    }

    this.errorMsg.set(null);
    this.exitoMsg.set(null);
    this.cargando.set(true);

    const f = this.registroIndividualForm.value;
    const payload: RegistroPayload = {
      nombres:           f.nombres!,
      apellidos:         f.apellidos!,
      correo:            f.correo!,
      telefono:          f.telefono!,
      cui:               f.cui!,
      nit:               f.nit!,
      contrasena:        f.contrasena!,
      confirmContrasena: f.confirmContrasena!,
      aceptoTerminos:    f.aceptoTerminos!
    };

    const headers = new HttpHeaders({
      'content-type': 'application/json',
    });

    try {
      await firstValueFrom(this.registroService.registrarCiudadano(payload, headers));
      this.exitoMsg.set('Registro creado correctamente.');
      this.cargando.set(false);
      void this.alert.success('Registro exitoso', 'Se te ha enviado un correo para verificar tu cuenta.');
      await this.router.navigateByUrl('/');
    } catch (err: any) {
      const backendMsg = err?.error?.mensaje || err?.message || 'Credenciales inválidas';
      await this.alert.error('Error de inicio de sesión', backendMsg);
    } finally {
      this.cargando.set(false);
    }
  }
  onCuiInput(event: any) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '').slice(0, 13);
    this.registroIndividualForm.get('cui')?.setValue(input.value, { emitEvent: false });
  }
}
