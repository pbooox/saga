import {Component, input} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import type { tramiteCard } from '../../../../interfaces/pages/tramites-page/tramite.model'

@Component({
  selector: 'app-tramite-card',
    imports: [
      CommonModule,
      MatIconModule,
      RouterModule,
    ],
  templateUrl: './tramite-card.component.html',
  styleUrl: './tramite-card.component.scss'
})
export class TramiteCardComponent {
  tramite = input.required<tramiteCard>();
}
