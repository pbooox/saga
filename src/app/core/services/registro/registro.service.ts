import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {RegistroPayload} from '../../../interfaces/auth/auth.interface';


@Injectable({ providedIn: 'root' })
export class RegistroService {
  private http = inject(HttpClient);

  registrarCiudadano(
    payload: RegistroPayload,
    headers?: HttpHeaders
  ): Observable<string> {
    const options = headers ? { headers } : {};
    return this.http.post<string>(`${environment.apiBaseUrl}/ciudadanos`, payload, options);
  }
}
