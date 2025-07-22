import {
  ChangeDetectionStrategy,
  Component,
  inject,
  DOCUMENT,
} from "@angular/core";

@Component({
  selector: "app-landing",
  standalone: true,
  templateUrl: "./landing.html",
  styleUrls: ["./landing.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {
  private document = inject(DOCUMENT);
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      this.document.body.classList.add("mobile-menu-open");
    } else {
      this.document.body.classList.remove("mobile-menu-open");
    }
  }
}
