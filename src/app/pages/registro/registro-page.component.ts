import {Component} from '@angular/core';
import {FooterComponent} from '../../components/shared/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../../components/shared/header/header.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {
  IndividualOnBoardingFormComponent
} from '../../components/pages/registro/individual-on-boarding-form/individual-on-boarding-form.component';

@Component({
  selector: 'app-registro',
  imports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    NgOptimizedImage,
    RouterLink,
    IndividualOnBoardingFormComponent,
  ],
  templateUrl: './registro-page.component.html',
  styleUrl: './registro-page.component.scss'
})
export class RegistroPageComponent {


  soporteTecnico() {
    console.log('Soporte técnico solicitado');
  }

  verManualUsuario() {
    console.log('Manual de usuario solicitado');
  }
}
