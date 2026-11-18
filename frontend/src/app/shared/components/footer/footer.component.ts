import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer pt-5 pb-4">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5">
            <p class="display-font fs-4 fw-bold mb-2">
              <i class="bi bi-camera2 me-1"></i>{{ brand }}
            </p>
            <p class="small opacity-75 mb-0">
              Photo printing and custom photo frames, made with care and delivered across India.
            </p>
          </div>
          <div class="col-6 col-lg-3">
            <p class="fw-bold mb-2">Explore</p>
            <ul class="list-unstyled small mb-0">
              <li><a routerLink="/" fragment="packages">Photo packages</a></li>
              <li><a routerLink="/" fragment="frames">Photo frames</a></li>
              <li><a routerLink="/" fragment="how-it-works">How it works</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-4">
            <p class="fw-bold mb-2">Contact</p>
            <ul class="list-unstyled small mb-0">
              <li><i class="bi bi-telephone me-2"></i>{{ phone }}</li>
              <li><i class="bi bi-envelope me-2"></i>{{ email }}</li>
            </ul>
          </div>
        </div>
        <hr class="my-4 opacity-25">
        <p class="small opacity-75 mb-0">&copy; {{ year }} {{ brand }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer { background: var(--ink); color: #fff; }
    .footer a { color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2; }
    .footer a:hover { color: #fff; text-decoration: underline; }
  `,
})
export class FooterComponent {
  readonly brand = environment.businessName;
  readonly phone = environment.contactPhone;
  readonly email = environment.contactEmail;
  readonly year = new Date().getFullYear();
}
