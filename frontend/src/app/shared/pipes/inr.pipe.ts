import { Pipe, PipeTransform } from '@angular/core';

/** Formats a number as Indian Rupees, e.g. 1200 -> "₹1,200". */
@Pipe({ name: 'inr' })
export class InrPipe implements PipeTransform {
  private readonly formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  transform(value: number | null | undefined): string {
    return value == null ? '' : this.formatter.format(value);
  }
}
