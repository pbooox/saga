import {Component, input} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import type { tramiteCard } from '../../../../interfaces/pages/tramites-page/tramite.model'

@Component({
  selector: 'app-tramite-card',
    imports: [
      MatIconModule,
    ],
  templateUrl: './tramite-card.component.html',
  styleUrl: './tramite-card.component.scss'
})
export class TramiteCardComponent {
  tramite = input.required<tramiteCard>();
}
