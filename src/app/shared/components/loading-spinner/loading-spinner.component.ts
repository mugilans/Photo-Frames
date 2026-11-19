import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="text-center py-5" role="status">
      <div class="spinner-border text-primary" aria-hidden="true"></div>
      <p class="small text-secondary mt-2 mb-0">{{ label() }}</p>
    </div>
  `,
})
export class LoadingSpinnerComponent {
  readonly label = input('Loading…');
}
