import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-tramites-beta',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './tramites-beta-page.component.html',
  styleUrl: './tramites-beta-page.component.scss',
})
export class TramitesBetaPageComponent {
  selectedTipoActividad = '';
  currentStep = 1;
  totalSteps = 35;

  tiposActividad = [
    'Evaluación ambiental inicial categoría C',
    'Diagnóstico ambiental categoría C',
    'Evaluación ambiental inicial categoría C+PGA',
    'Diagnóstico ambiental categoría C+PGA5',
    'Evaluación ambiental inicial actividades de registro',
    'Diagnóstico ambiental actividades de registro',
    'Evaluación ambiental inicial categoría B2',
    'Diagnóstico ambiental categoría B2'
  ];

  formSteps = [
    {
      numero: 1,
      titulo: 'Información del proyecto',
      descripcion: 'Detalles del proyecto ambiental',
      estado: 'active' // 'active', 'pending', 'completed'
    },
    {
      numero: 2,
      titulo: 'Información legal (persona individual o jurídica)',
      descripcion: 'Datos del proponente',
      estado: 'pending'
    },
    {
      numero: 3,
      titulo: 'Información de contacto del proponente',
      descripcion: 'Datos de contacto',
      estado: 'pending'
    },
    {
      numero: 4,
      titulo: 'Información de empresa consultora o consultor ambiental',
      descripcion: 'Datos del consultor ambiental',
      estado: 'pending'
    },
    {
      numero: 5,
      titulo: 'Fase de desarrollo del proyecto',
      descripcion: 'Etapas del proyecto',
      estado: 'pending'
    },
    {
      numero: 6,
      titulo: 'Descripción del proyecto',
      descripcion: 'Detalles operativos',
      estado: 'pending'
    },
    {
      numero: 7,
      titulo: 'Áreas del proyecto',
      descripcion: 'Dimensiones y ubicación',
      estado: 'pending'
    },
    {
      numero: 8,
      titulo: 'Descripción del entorno',
      descripcion: 'Actividades colindantes',
      estado: 'pending'
    },
    {
      numero: 9,
      titulo: 'Fases del proyecto',
      descripcion: 'Descripción de actividades',
      estado: 'pending'
    },
    {
      numero: 10,
      titulo: 'Fase de construcción',
      descripcion: 'Actividades e insumos',
      estado: 'pending'
    },
    {
      numero: 11,
      titulo: 'Fase de operación',
      descripcion: 'Procesos y personal',
      estado: 'pending'
    },
    {
      numero: 12,
      titulo: 'Servicios básicos',
      descripcion: 'Abastecimientos y servicios',
      estado: 'pending'
    }
  ];

  impactosAmbientales = [
    {
      numero: 13,
      titulo: 'Impactos ambientales y medidas de mitigación',
      descripcion: 'Impacto a la atmósfera (construcción)',
      estado: 'pending'
    },
    {
      numero: 14,
      titulo: 'Impactos a la atmósfera (operación)',
      descripcion: 'Operación del proyecto',
      estado: 'pending'
    },
    {
      numero: 15,
      titulo: 'Impactos al agua',
      descripcion: 'Acuerdo gubernativo 236-2006',
      estado: 'pending'
    },
    {
      numero: 16,
      titulo: 'Aguas residuales',
      descripcion: 'Tipo de agua residual generada',
      estado: 'pending'
    },
    {
      numero: 17,
      titulo: 'Fase construcción tipo de agua residual que genera',
      descripcion: 'Aguas residuales construcción',
      estado: 'pending'
    },
    {
      numero: 18,
      titulo: 'Fase operación tipo de agua residual que genera',
      descripcion: 'Aguas residuales operación',
      estado: 'pending'
    },
    {
      numero: 19,
      titulo: 'Construcción',
      descripcion: 'Puntos de descarga construcción',
      estado: 'pending'
    },
    {
      numero: 20,
      titulo: 'Operación',
      descripcion: 'Puntos de descarga operación',
      estado: 'pending'
    },
    {
      numero: 21,
      titulo: 'Reuso de aguas residuales',
      descripcion: 'Aprovechamiento de aguas',
      estado: 'pending'
    },
    {
      numero: 22,
      titulo: 'Impactos al suelo',
      descripcion: 'Cambio de uso de suelo',
      estado: 'pending'
    },
    {
      numero: 23,
      titulo: 'Geomorfología',
      descripcion: 'Alteraciones geomorfológicas',
      estado: 'pending'
    },
    {
      numero: 24,
      titulo: 'Residuos y desechos comunes',
      descripcion: 'Gestión de residuos comunes',
      estado: 'pending'
    },
    {
      numero: 25,
      titulo: 'Residuos y desechos especiales',
      descripcion: 'Gestión de residuos especiales',
      estado: 'pending'
    },
    {
      numero: 26,
      titulo: 'Residuos y desechos peligrosos',
      descripcion: 'Gestión de residuos peligrosos',
      estado: 'pending'
    },
    {
      numero: 27,
      titulo: 'Elementos bióticos, socioeconómicos, culturales y estéticos',
      descripcion: 'Impactos al elemento biótico',
      estado: 'pending'
    },
    {
      numero: 28,
      titulo: 'Elementos socioeconómicos y culturales',
      descripcion: 'Impactos socioeconómicos',
      estado: 'pending'
    },
    {
      numero: 29,
      titulo: 'Impacto a los elementos estéticos',
      descripcion: 'Alteraciones estéticas',
      estado: 'pending'
    }
  ];

  requisitos = [
    {
      numero: 30,
      titulo: 'Documentos técnicos',
      descripcion: 'Documentación técnica requerida',
      estado: 'pending'
    },
    {
      numero: 31,
      titulo: 'Complementarios',
      descripcion: 'Documentos complementarios',
      estado: 'pending'
    },
    {
      numero: 32,
      titulo: 'Específicos',
      descripcion: 'Documentos específicos',
      estado: 'pending'
    },
    {
      numero: 33,
      titulo: 'Específicos para actividades relacionadas con gestión integrada de residuos y desechos sólidos comunes',
      descripcion: 'Gestión de residuos sólidos',
      estado: 'pending'
    },
    {
      numero: 34,
      titulo: 'Documentos legales',
      descripcion: 'Documentación legal',
      estado: 'pending'
    }
  ];

  selectTipoActividad(tipo: string) {
    this.selectedTipoActividad = tipo;
  }

  goToPrevious() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToNext() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }
}
