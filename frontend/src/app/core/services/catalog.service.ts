import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

import { PhotoPackage } from '../../shared/models/package.model';
import { FrameProduct } from '../../shared/models/frame.model';

/**
 * Catalogue access layer.
 *
 * !! SAMPLE DATA — DEVELOPMENT ONLY !!
 * The data below stands in for the PHP backend, which does not exist yet (Phase 3).
 * In Phase 3 replace the bodies of getPackages()/getFrames() with HttpClient calls to
 * `${environment.apiBaseUrl}/packages` and `/frames`. Component code will not change.
 * The final product catalogue must live in MySQL, not in this file.
 */
const SAMPLE_PACKAGES: PhotoPackage[] = [
  { id: 1, name: 'Basic Package', imageQuantity: 30, price: 200,
    description: 'A neat starter set for a small event or a few favourite moments.' },
  { id: 2, name: 'Standard Package', imageQuantity: 50, price: 300, isPopular: true,
    description: 'Our most chosen set — ideal for birthdays, trips and family albums.' },
  { id: 3, name: 'Premium Package', imageQuantity: 75, price: 400,
    description: 'Plenty of prints for weddings, festivals and bigger celebrations.' },
  { id: 4, name: 'Ultimate Package', imageQuantity: 100, price: 500,
    description: 'The best value per photo for complete albums and year-end memories.' },
];

const SAMPLE_FRAMES: FrameProduct[] = [
  { id: 1, name: 'Classic Wooden Frame', size: '8 x 10 in', material: 'Solid wood',
    colours: ['Walnut', 'Natural'], price: 449, stockQuantity: 25,
    imagePath: 'assets/img/frame-wood.svg',
    description: 'Timeless wood finish that suits every wall.' },
  { id: 2, name: 'Modern Black Frame', size: '12 x 16 in', material: 'Aluminium',
    colours: ['Black', 'Silver'], price: 699, stockQuantity: 12,
    imagePath: 'assets/img/frame-black.svg',
    description: 'Slim, sharp edges for a contemporary gallery look.' },
  { id: 3, name: 'Gold Heritage Frame', size: '10 x 12 in', material: 'Polystyrene',
    colours: ['Gold'], price: 549, stockQuantity: 0,
    imagePath: 'assets/img/frame-gold.svg',
    description: 'Ornate gold border for weddings and family portraits.' },
  { id: 4, name: 'Floating Glass Frame', size: '6 x 8 in', material: 'Glass',
    colours: ['Clear'], price: 399, stockQuantity: 40,
    imagePath: 'assets/img/frame-glass.svg',
    description: 'Photo appears to float between two glass panes.' },
];

@Injectable({ providedIn: 'root' })
export class CatalogService {
  getPackages(): Observable<PhotoPackage[]> {
    return of(SAMPLE_PACKAGES).pipe(delay(250));
  }

  getFeaturedFrames(): Observable<FrameProduct[]> {
    return of(SAMPLE_FRAMES).pipe(delay(250));
  }
}
