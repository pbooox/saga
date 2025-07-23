import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [Header, Footer, MatIconModule],
  templateUrl: "./landing.html",
  styleUrls: ["./landing.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {}
