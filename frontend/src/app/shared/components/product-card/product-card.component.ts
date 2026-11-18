import { Component, input, output } from '@angular/core';

import { FrameProduct } from '../../models/frame.model';
import { InrPipe } from '../../pipes/inr.pipe';

@Component({
  selector: 'app-product-card',
  imports: [InrPipe],
  template: `
    <article class="card-soft h-100 overflow-hidden d-flex flex-column">
      <div class="thumb">
        <img [src]="product().imagePath" [alt]="product().name + ' photo frame'"
             width="400" height="400" loading="lazy">
      </div>
      <div class="p-3 p-lg-4 d-flex flex-column flex-grow-1">
        <h3 class="h6 mb-1">{{ product().name }}</h3>
        <p class="small text-secondary mb-2">
          {{ product().size }} · {{ product().material }}
        </p>
        <p class="small text-secondary mb-2">{{ product().colours.join(', ') }}</p>
        <p class="small text-secondary flex-grow-1">{{ product().description }}</p>
        <div class="d-flex align-items-center justify-content-between gap-2">
          <span class="fw-bold fs-5">{{ product().price | inr }}</span>
          @if (product().stockQuantity > 0) {
            <span class="small text-success"><i class="bi bi-check-circle me-1"></i>In stock</span>
          } @else {
            <span class="small text-danger"><i class="bi bi-x-circle me-1"></i>Out of stock</span>
          }
        </div>
        <button type="button" class="btn btn-outline-dark w-100 mt-3"
                [disabled]="product().stockQuantity === 0"
                (click)="added.emit(product())">
          <i class="bi bi-bag-plus me-1"></i>Add to cart
        </button>
      </div>
    </article>
  `,
  styles: `
    .thumb { background: var(--warm); aspect-ratio: 1 / 1; }
    .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  `,
})
export class ProductCardComponent {
  readonly product = input.required<FrameProduct>();
  readonly added = output<FrameProduct>();
}
