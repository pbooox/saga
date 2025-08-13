import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  success(title: string, text?: string) {
    return Swal.fire({ icon: 'success', title, text, confirmButtonText: 'Aceptar' });
  }

  error(title: string, text?: string) {
    return Swal.fire({ icon: 'error', title, text, confirmButtonText: 'Aceptar' });
  }

  info(title: string, text?: string) {
    return Swal.fire({ icon: 'info', title, text, confirmButtonText: 'Aceptar' });
  }

  warning(title: string, text?: string) {
    return Swal.fire({ icon: 'warning', title, text, confirmButtonText: 'Aceptar' });
  }

  confirm(title: string, text?: string, confirmButtonText = 'Sí', cancelButtonText = 'Cancelar') {
    return Swal.fire({
      icon: 'question',
      title,
      text,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: true,
    }).then((result: { isConfirmed: boolean }) => result.isConfirmed);
  }

  toast(message: string, icon: SweetAlertIcon = 'success', durationMs = 2500, position: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' = 'top-end') {
    return Swal.fire({
      toast: true,
      position,
      icon,
      title: message,
      showConfirmButton: false,
      timer: durationMs,
      timerProgressBar: true,
    });
  }
}


