import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { firstValueFrom } from 'rxjs';
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { HeaderComponent } from '../../components/shared/header/header.component';
import { VerificarTokenPayload, VerificarTokenResponse } from '../../interfaces/auth/auth.interface';
import {AlertService} from "../../core/services/alert.service";
@Component({
  selector: 'app-token-verified',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './verificacion-token-page.component.html',
  styleUrls: ['./verificacion-token-page.component.scss']
})
export class VerificacionTokenPageComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private alert = inject(AlertService);

  estadoMsg = signal<string>('Verificando...');

  async ngOnInit(): Promise<void> {
    const token = this.route.snapshot.queryParamMap.get('email');
    if (!token) {
      this.estadoMsg.set('Token no proporcionado.');
      return;
    }
    this.estadoMsg.set('Token recibido, verificando...');
    const payload: VerificarTokenPayload = { token };
    try {
      const res: VerificarTokenResponse = await firstValueFrom(this.authService.confirmarVerificacion(payload));
      if (res?.mensaje) {
        this.estadoMsg.set('Tu cuenta ha sido verificada. Redirigiendo...');
        setTimeout(() => this.router.navigateByUrl('/'), 1500);
      } else {
        this.estadoMsg.set(res?.mensaje || 'No se pudo verificar tu cuenta.');
        this.alert.error('Verificación fallida', res?.mensaje || 'No se pudo verificar tu cuenta.');
      }
    } catch (err: any) {
      const backendMsg = err?.error?.mensaje || err?.message || 'No se pudo verificar tu cuenta.';
      this.estadoMsg.set(backendMsg);
      this.alert.error('Error', backendMsg);
    }
  }
}
