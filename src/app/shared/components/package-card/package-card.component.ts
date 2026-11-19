import { Component, computed, input, output } from '@angular/core';

import { PhotoPackage } from '../../models/package.model';
import { InrPipe } from '../../pipes/inr.pipe';

@Component({
  selector: 'app-package-card',
  imports: [InrPipe],
  template: `
    <article class="card-soft h-100 p-4 d-flex flex-column position-relative" [class.popular]="pkg().isPopular">
      @if (pkg().isPopular) {
        <span class="badge-popular">Most popular</span>
      }
      <h3 class="h5 mb-1">{{ pkg().name }}</h3>
      <p class="count mb-0">
        <span class="display-font">{{ pkg().imageQuantity }}</span>
        <span class="text-secondary"> printed photos</span>
      </p>
      <p class="price my-2">
        <span class="display-font fs-2 fw-bold">{{ pkg().price | inr }}</span>
        <span class="small text-secondary ms-2">{{ pricePerImage() | inr }} / photo</span>
      </p>
      <p class="text-secondary small flex-grow-1">{{ pkg().description }}</p>
      <button type="button" class="btn w-100"
              [class.btn-primary]="pkg().isPopular" [class.btn-outline-dark]="!pkg().isPopular"
              (click)="selected.emit(pkg())">
        Select package
      </button>
    </article>
  `,
  styles: `
    .popular { border-color: var(--accent); box-shadow: var(--shadow-lg); }
    .count { font-size: 1.05rem; }
    .count .display-font { font-size: 1.4rem; font-weight: 700; }
    .badge-popular { position: absolute; top: -0.75rem; right: 1.25rem; background: var(--accent);
      color: #fff; font-size: 0.72rem; font-weight: 700; padding: 0.3rem 0.8rem; border-radius: 999px; }
  `,
})
export class PackageCardComponent {
  readonly pkg = input.required<PhotoPackage>();
  readonly selected = output<PhotoPackage>();

  readonly pricePerImage = computed(() => this.pkg().price / this.pkg().imageQuantity);
}
