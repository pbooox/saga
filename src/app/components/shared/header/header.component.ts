import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  DOCUMENT,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import { AuthService } from "../../../core/auth/services/auth.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage, RouterLink],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  // injectables
  private document = inject(DOCUMENT);
  authService = inject(AuthService);
  isMobileMenuOpen = false;

  isMobile = signal(window.innerWidth < 768);

  resizeEffect = effect(() => {
    const update = () => {
      this.isMobile.set(window.innerWidth < 768);
    };
    window.addEventListener('resize', update);
  });

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      this.document.body.classList.add("mobile-menu-open");
    } else {
      this.document.body.classList.remove("mobile-menu-open");
    }
  }

  onNavigateAndClose(): void {
    this.toggleMobileMenu();
  }
}
