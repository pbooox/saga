import { User } from "./user.interface";

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';
export interface RegistroPayload {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  cui: string;
  nit: string;
  contrasena: string;
  confirmContrasena: string
  aceptoTerminos: boolean;
}
export interface LoginPayload {
  correo: string;
  contrasena: string;
}
export interface LoginResponse {
  token: string;
  user: User;
}

export interface VerificarTokenPayload {
  token: string;
}

export interface VerificarTokenResponse {
  mensaje: string;
}
