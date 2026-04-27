import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pagination" *ngIf="totalPages > 1">
      <button type="button" (click)="change(page - 1)" [disabled]="page <= 1">Anterior</button>
      <button type="button" disabled>Página {{ page }} de {{ totalPages }}</button>
      <button type="button" (click)="change(page + 1)" [disabled]="page >= totalPages">Siguiente</button>
    </div>
  `,
})
export class PaginationComponent {
  @Input() page = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  change(nextPage: number): void {
    if (nextPage < 1 || nextPage > this.totalPages) return;
    this.pageChange.emit(nextPage);
  }
}
