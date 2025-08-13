import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from "../../components/shared/header/header.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: "app-inicio",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIconModule, NgOptimizedImage],
  templateUrl: "./inicio-page.component.html",
  styleUrls: ["./inicio-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPageComponent {
}
