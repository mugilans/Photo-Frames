import { Routes } from '@angular/router';

/**
 * Day 1 only ships the homepage. Later phases add lazy-loaded feature routes, e.g.:
 *   { path: 'packages', loadComponent: () => import('./features/packages/packages.component') ... }
 */
export const routes: Routes = [
  {
    path: 'home',
    title: 'Photo Printing & Custom Photo Frames | Frameory',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '**', redirectTo: 'home',pathMatch: 'full'},
  { path: '', redirectTo: 'home',pathMatch: 'full'},
];
