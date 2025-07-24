import {
  ChangeDetectionStrategy,
  Component,
  inject,
  DOCUMENT,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage, RouterLink],
  templateUrl: "./header.html",
  styleUrls: ["./header.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
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

  onNavigateAndClose(): void {
    this.toggleMobileMenu();
  }
}
