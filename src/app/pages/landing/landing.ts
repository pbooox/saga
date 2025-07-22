import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-landing",
  standalone: true,
  templateUrl: "./landing.html",
  styleUrls: ["./landing.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
