import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthStatus, LoginPayload, LoginResponse, VerificarTokenPayload, VerificarTokenResponse } from '../../../interfaces/auth/auth.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { User } from '../../../interfaces/auth/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // injectables
  private http = inject(HttpClient);

  // computed properties
  public authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) return 'authenticated';
    return 'unauthenticated';
  });
  public user = computed<User | null>(() => this._user());
  public token = computed<string | null>(() => this._token());

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));

  checkStatusResource = rxResource({
    stream: () => this.checkAuthStatus(),
  });

  apiBaseUrl = environment.apiBaseUrl;

  login(
    payload: LoginPayload,
  ): Observable<boolean> {
    return this.http.post<LoginResponse>(`${this.apiBaseUrl}/autenticacion/login`, payload)
      .pipe(
        map((response: LoginResponse) => this.handleAuthSuccess(response)),
        catchError((error: any) => {
          // Mantener estado consistente y propagar el error al componente
          this.logout();
          return throwError(() => error);
        })
      );
  }

  confirmarVerificacion(payload: VerificarTokenPayload): Observable<VerificarTokenResponse> {
    return this.http.post<VerificarTokenResponse>(
      `${this.apiBaseUrl}/autenticacion/verificar_token`,
      payload,
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }
    return this.http.get<LoginResponse>(`${this.apiBaseUrl}/autenticacion/verificacion`, )
    .pipe(
      map((response: LoginResponse) => this.handleAuthSuccess(response)),
      catchError((error: any) => this.handleAuthError(error))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('unauthenticated');
  }

  private handleAuthSuccess({ token, user }: LoginResponse) {
    this._user.set(user);
    this._authStatus.set('authenticated');
    this._token.set(token);
    localStorage.setItem('token', token);
    return true;
  }

  private handleAuthError(error: any) {
    console.error(error);
    this.logout();
    return of(false);
  }
}
