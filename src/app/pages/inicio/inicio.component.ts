import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "../../components/web/header/header.component";
import { FooterComponent } from "../../components/web/footer/footer.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: "app-inicio",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIconModule, NgOptimizedImage],
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
}
