import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { environment } from '../../../../environments/environment';

interface NavItem {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="site-header sticky-top">
      <nav class="navbar navbar-expand-lg bg-white" aria-label="Main navigation">
        <div class="container">
          <a class="navbar-brand display-font fw-bold" routerLink="/" (click)="close()">
            <i class="bi bi-camera2 me-1 text-primary"></i>{{ brand }}
          </a>

          <button
            class="navbar-toggler border-0"
            type="button"
            aria-controls="mainNav"
            [attr.aria-expanded]="open()"
            aria-label="Toggle navigation"
            (click)="open.set(!open())"
          >
            <i class="bi" [class.bi-list]="!open()" [class.bi-x-lg]="open()"></i>
          </button>

          <div class="collapse navbar-collapse" id="mainNav" [class.show]="open()">
            <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              @for (item of items; track item.fragment) {
                <li class="nav-item">
                  <a class="nav-link" routerLink="/" [fragment]="item.fragment" (click)="close()">
                    {{ item.label }}
                  </a>
                </li>
              }
              <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a class="btn btn-primary w-100" routerLink="/" fragment="packages" (click)="close()">
                  Order Prints
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: `
    .site-header { box-shadow: 0 1px 0 var(--line); z-index: 1030; }
    .navbar-brand { font-size: 1.4rem; color: var(--ink); }
    .nav-link { font-weight: 500; color: var(--ink-soft); padding: 0.75rem 0.9rem; }
    .nav-link:hover { color: var(--accent); }
    .navbar-toggler { font-size: 1.6rem; }
  `,
})
export class HeaderComponent {
  readonly brand = environment.businessName;
  readonly open = signal(false);
  readonly items: NavItem[] = [
    { label: 'Packages', fragment: 'packages' },
    { label: 'Frames', fragment: 'frames' },
    { label: 'How It Works', fragment: 'how-it-works' },
    { label: 'Reviews', fragment: 'reviews' },
    { label: 'Contact', fragment: 'contact' },
  ];

  close(): void {
    this.open.set(false);
  }
}
