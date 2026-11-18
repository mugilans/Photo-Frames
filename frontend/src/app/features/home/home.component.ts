import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { CatalogService } from '../../core/services/catalog.service';
import { environment } from '../../../environments/environment';
import { PhotoPackage } from '../../shared/models/package.model';
import { FrameProduct } from '../../shared/models/frame.model';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PackageCardComponent, ProductCardComponent, LoadingSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly catalog = inject(CatalogService);

  /** null while loading. */
  readonly packages = toSignal(this.catalog.getPackages(), { initialValue: null });
  readonly frames = toSignal(this.catalog.getFeaturedFrames(), { initialValue: null });

  /** Day 1 has no cart/upload yet; this tells the visitor so instead of faking success. */
  readonly notice = signal<string | null>(null);

  readonly whatsappUrl = `https://wa.me/${environment.whatsappNumber}`;
  readonly phone = environment.contactPhone;
  readonly email = environment.contactEmail;

  readonly steps = [
    { icon: 'bi-box-seam', title: 'Choose a package', text: 'Pick how many photos you want printed.' },
    { icon: 'bi-cloud-arrow-up', title: 'Upload your photos', text: 'Add images from your phone or computer.' },
    { icon: 'bi-bag-check', title: 'Place your order', text: 'Add frames if you like and enter delivery details.' },
    { icon: 'bi-truck', title: 'Get it delivered', text: 'We print, pack and ship to your doorstep.' },
  ];

  readonly reasons = [
    { icon: 'bi-brush', title: 'Vivid, lasting prints', text: 'Quality paper and colour-accurate printing.' },
    { icon: 'bi-currency-rupee', title: 'Honest pricing', text: 'Simple packages with the price per photo shown.' },
    { icon: 'bi-shield-lock', title: 'Private by design', text: 'Your photos are only used to fulfil your order.' },
    { icon: 'bi-geo-alt', title: 'Delivered across India', text: 'Track your order any time with your mobile number.' },
  ];

  /** SAMPLE testimonials for layout only — replace with real customer reviews before launch. */
  readonly testimonials = [
    { name: 'Sample Customer A', city: 'Coimbatore', text: 'Sample review text. Replace with a real customer review.' },
    { name: 'Sample Customer B', city: 'Chennai', text: 'Sample review text. Replace with a real customer review.' },
    { name: 'Sample Customer C', city: 'Bengaluru', text: 'Sample review text. Replace with a real customer review.' },
  ];

  onPackageSelected(pkg: PhotoPackage): void {
    this.notice.set(`"${pkg.name}" selected — photo upload and checkout arrive in Phase 2.`);
  }

  onFrameAdded(frame: FrameProduct): void {
    this.notice.set(`"${frame.name}" — the shopping cart arrives in Phase 2.`);
  }

  dismissNotice(): void {
    this.notice.set(null);
  }
}
