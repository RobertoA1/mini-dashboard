import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PublicProduct } from '../models';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section *ngIf="products.length > 0" class="mt-10">
      <h2 class="text-2xl font-semibold tracking-tight text-[#3f403f] mb-4">Productos relacionados</h2>
      <div class="carousel">
        <app-product-card *ngFor="let product of products" [product]="product"></app-product-card>
      </div>
    </section>
  `,
  styles: [`
    .carousel {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      padding-bottom: 1rem;
    }
  `]
})
export class RelatedProductsComponent {
  @Input({ required: true }) products!: PublicProduct[];
}