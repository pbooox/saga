import { Component } from '@angular/core';
import {Footer} from "../../components/web/footer/footer";
import {Header} from "../../components/web/header/header";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    Footer,
    Header,
    CommonModule,
    FormsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  userType: 'individual' | 'juridica' = 'individual';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  selectUserType(type: 'individual' | 'juridica') {
    this.userType = type;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onGoogleLogin() {
    console.log('Google login clicked');
  }

  onFacebookLogin() {
    console.log('Facebook login clicked');
  }

  onLogin() {
    console.log('Login clicked', {
      userType: this.userType,
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
  }

  onRegister() {
    console.log('Register clicked');
  }

  onTechnicalSupport() {
    console.log('Technical support clicked');
  }

  onUserManual() {
    console.log('User manual clicked');
  }
}
