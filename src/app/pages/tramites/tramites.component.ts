import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/web/header/header.component';
import { FooterComponent } from '../../components/web/footer/footer.component';

@Component({
  selector: 'app-tramites',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './tramites.component.html',
  styleUrl: './tramites.component.scss'
})
export class TramitesComponent {
  searchTerm = '';
  selectedCategory = '';
  selectedMinistry = '';

  categories = [
    { id: 'ambiental', name: 'Ambiental', color: 'bg-emerald-100 text-emerald-800' },
    { id: 'construccion', name: 'Construcción', color: 'bg-blue-100 text-blue-800' },
    { id: 'salud', name: 'Salud', color: 'bg-pink-100 text-pink-800' },
    { id: 'agricola', name: 'Agrícola', color: 'bg-green-100 text-green-800' },
    { id: 'economico', name: 'Económico', color: 'bg-orange-100 text-orange-800' }
  ];

  ministries = [
    { id: 'marn', name: 'MARN', fullName: 'Ministerio de Ambiente y Recursos Naturales' },
    { id: 'mspas', name: 'MSPAS', fullName: 'Ministerio de Salud Pública y Asistencia Social' },
    { id: 'maga', name: 'MAGA', fullName: 'Ministerio de Agricultura, Ganadería y Alimentación' },
    { id: 'mineco', name: 'MINECO', fullName: 'Ministerio de Economía' }
  ];

  tramites = [
    {
      id: 1,
      title: 'Licencia Ambiental para Proyectos Industriales',
      description: 'Obtén la autorización ambiental para desarrollar proyectos industriales de alto impacto.',
      category: 'ambiental',
      ministry: 'marn',
      duration: '60-90 días',
      difficulty: 'Alta',
      requirements: ['Estudio de Impacto Ambiental', 'Planos del proyecto', 'Documentos legales'],
      icon: 'factory'
    },
    {
      id: 2,
      title: 'Permiso de Descarga de Aguas Residuales',
      description: 'Autorización para el vertido de aguas residuales industriales o domiciliares.',
      category: 'ambiental',
      ministry: 'marn',
      duration: '30-45 días',
      difficulty: 'Media',
      requirements: ['Caracterización de aguas', 'Sistema de tratamiento', 'Planos de instalaciones'],
      icon: 'water_drop'
    },
    {
      id: 3,
      title: 'Registro Sanitario de Alimentos',
      description: 'Certificación sanitaria para la comercialización de productos alimenticios.',
      category: 'salud',
      ministry: 'mspas',
      duration: '45-60 días',
      difficulty: 'Media',
      requirements: ['Análisis microbiológicos', 'Etiquetas del producto', 'Certificaciones de calidad'],
      icon: 'restaurant'
    },
    {
      id: 4,
      title: 'Licencia de Funcionamiento de Establecimientos',
      description: 'Autorización para el funcionamiento de establecimientos comerciales e industriales.',
      category: 'salud',
      ministry: 'mspas',
      duration: '15-30 días',
      difficulty: 'Baja',
      requirements: ['Planos del establecimiento', 'Certificados de fumigación', 'Listado de equipos'],
      icon: 'store'
    },
    {
      id: 5,
      title: 'Registro de Plaguicidas',
      description: 'Autorización para la importación, fabricación y comercialización de plaguicidas.',
      category: 'agricola',
      ministry: 'maga',
      duration: '90-120 días',
      difficulty: 'Alta',
      requirements: ['Estudios toxicológicos', 'Eficacia biológica', 'Etiquetas y empaques'],
      icon: 'agriculture'
    },
    {
      id: 6,
      title: 'Certificación de Exportación Agrícola',
      description: 'Certificado fitosanitario para la exportación de productos agrícolas.',
      category: 'agricola',
      ministry: 'maga',
      duration: '7-15 días',
      difficulty: 'Baja',
      requirements: ['Solicitud de exportación', 'Análisis de laboratorio', 'Certificado de origen'],
      icon: 'local_shipping'
    },
    {
      id: 7,
      title: 'Registro Mercantil',
      description: 'Inscripción de empresas en el Registro Mercantil para operar legalmente.',
      category: 'economico',
      ministry: 'mineco',
      duration: '5-10 días',
      difficulty: 'Baja',
      requirements: ['Escritura de constitución', 'Nombramiento de representantes', 'Capital social'],
      icon: 'business'
    },
    {
      id: 8,
      title: 'Licencia de Construcción',
      description: 'Autorización para la construcción de edificaciones residenciales y comerciales.',
      category: 'construccion',
      ministry: 'mineco',
      duration: '30-60 días',
      difficulty: 'Media',
      requirements: ['Planos arquitectónicos', 'Estudio de suelos', 'Licencia municipal'],
      icon: 'construction'
    }
  ];

  get filteredTramites() {
    return this.tramites.filter(tramite => {
      const matchesSearch = tramite.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           tramite.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = !this.selectedCategory || tramite.category === this.selectedCategory;
      const matchesMinistry = !this.selectedMinistry || tramite.ministry === this.selectedMinistry;
      
      return matchesSearch && matchesCategory && matchesMinistry;
    });
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Baja': return 'bg-green-100 text-green-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Alta': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getCategoryInfo(categoryId: string) {
    return this.categories.find(cat => cat.id === categoryId);
  }

  getMinistryInfo(ministryId: string) {
    return this.ministries.find(min => min.id === ministryId);
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedMinistry = '';
  }
}
