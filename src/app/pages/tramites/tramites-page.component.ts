import {Component, computed, signal} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../../components/shared/header/header.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { TramiteCardComponent } from '../../components/pages/tramites/tramite-card/tramite-card.component';

@Component({
  selector: "app-tramites",
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    TramiteCardComponent,
  ],
  templateUrl: "./tramites-page.component.html",
  styleUrl: "./tramites-page.component.scss",
})
export class TramitesPageComponent {
  busqueda = signal('');
  categoriaSeleccionada = signal('');

  categorias = signal([
    {
      id: "ambiental",
      name: "Ambiental"
    },
    {
      id: "construccion",
      name: "Construcción"
    },
    { id: "salud", name: "Salud" },
    { id: "agricola", name: "Agrícola" },
    {
      id: "economico",
      name: "Económico"
    },
  ]);

  ministerios = signal([
    {
      id: "marn",
      name: "MARN",
      fullName: "Ministerio de Ambiente y Recursos Naturales",
    },
    {
      id: "mspas",
      name: "MSPAS",
      fullName: "Ministerio de Salud Pública y Asistencia Social",
    },
    {
      id: "maga",
      name: "MAGA",
      fullName: "Ministerio de Agricultura, Ganadería y Alimentación",
    },
    { id: "mineco", name: "MINECO", fullName: "Ministerio de Economía" },
  ]);

  tramites = signal([
    {
      id: 0,
      titulo: "Formulario Instrumento Ambiental Bajo Impacto (FIABI)",
      descripcion:
        "Complete el proceso de evaluación ambiental para proyectos de bajo impacto de manera digital y eficiente.",
      categoria: "ambiental",
      ministerio: "marn",
      duracion: "45-90 días",
      link: "/tramites-beta"
    },
    {
      id: 1,
      titulo: "Licencia Ambiental para Proyectos Industriales",
      descripcion:
        "Obtén la autorización ambiental para desarrollar proyectos industriales de alto impacto.",
      categoria: "ambiental",
      ministerio: "marn",
      duracion: "60-90 días",
    },
    {
      id: 2,
      titulo: "Permiso de Descarga de Aguas Residuales",
      descripcion:
        "Autorización para el vertido de aguas residuales industriales o domiciliares.",
      categoria: "ambiental",
      ministerio: "marn",
      duracion: "30-45 días",
    },
    {
      id: 3,
      titulo: "Registro Sanitario de Alimentos",
      descripcion:
        "Certificación sanitaria para la comercialización de productos alimenticios.",
      categoria: "salud",
      ministerio: "mspas",
      duracion: "45-60 días",
    },
    {
      id: 4,
      titulo: "Licencia de Funcionamiento de Establecimientos",
      descripcion:
        "Autorización para el funcionamiento de establecimientos comerciales e industriales.",
      categoria: "salud",
      ministerio: "mspas",
      duracion: "15-30 días",
    },
    {
      id: 5,
      titulo: "Registro de Plaguicidas",
      descripcion:
        "Autorización para la importación, fabricación y comercialización de plaguicidas.",
      categoria: "agricola",
      ministerio: "maga",
      duracion: "90-120 días",
    },
    {
      id: 6,
      titulo: "Certificación de Exportación Agrícola",
      descripcion:
        "Certificado fitosanitario para la exportación de productos agrícolas.",
      categoria: "agricola",
      ministerio: "maga",
      duracion: "7-15 días",
    },
    {
      id: 7,
      titulo: "Registro Mercantil",
      descripcion:
        "Inscripción de empresas en el Registro Mercantil para operar legalmente.",
      categoria: "economico",
      ministerio: "mineco",
      duracion: "5-10 días",
    },
    {
      id: 8,
      titulo: "Licencia de Construcción",
      descripcion:
        "Autorización para la construcción de edificaciones residenciales y comerciales.",
      categoria: "construccion",
      ministerio: "mineco",
      duracion: "30-60 días",
    },
  ]);

  tramitesFiltrados = computed(() =>{
    return this.tramites().filter((tramite) => {
      const busquedaEncontrada =
        tramite.titulo.toLowerCase().includes(this.busqueda().toLowerCase()) ||
        tramite.descripcion
          .toLowerCase()
          .includes(this.busqueda().toLowerCase());
      const busquedaCategoria =
        !this.categoriaSeleccionada() || tramite.categoria === this.categoriaSeleccionada();

      return busquedaEncontrada && busquedaCategoria;
    });
  })

  clearFilters() {
    this.busqueda.set("");
    this.categoriaSeleccionada.set("");
  }
}
