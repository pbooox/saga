import { ChangeDetectionStrategy, Component } from "@angular/core";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: "app-footer",
  standalone: true,
  templateUrl: "./footer.html",
  styleUrls: ["./footer.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage
  ]
})
export class Footer {}
