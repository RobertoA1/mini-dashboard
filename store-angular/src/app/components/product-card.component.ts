import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublicProduct } from '../models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="border border-[#ced0ce] bg-white p-4 transition-colors hover:border-[#9fb8ad] min-w-[240px]">
      <div class="flex items-start justify-between gap-2">
        <span class="border border-[#475841] bg-[#475841] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white" *ngIf="product.descuento_tipo">-{{ product.descuento_valor }}%</span>
        <span class="border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#475841]" *ngIf="product.envio_gratis">Envío gratis</span>
      </div>
      <div class="mt-4 flex h-48 items-center justify-center border border-[#ced0ce] bg-[#e6e8e6]">
        @if (product.imagen){
          <img [src]="product.imagen" [alt]="product.nombre" class="w-full h-full object-contain" />
        }
        @else {
          <span class="text-6xl text-[#475841]">📦</span>
        }
      </div>
      <h3 class="mt-4 text-lg font-semibold tracking-tight text-[#3f403f]">{{ product.nombre }}</h3>
      <p class="mt-1 text-sm text-[#6b6d6b]">{{ product.descripcion | slice:0:50 }}...</p>
      <div class="mt-3 flex items-center gap-1 text-[#475841]">
        <span>⭐⭐⭐⭐</span>
        <span class="ml-2 text-xs text-[#6b6d6b]">4.0 ({{ product.id }})</span>
      </div>
      <div class="mt-4 flex items-end justify-between gap-3">
        <div>
          <p class="text-xs text-[#6b6d6b] line-through" *ngIf="product.descuento_tipo">S/.{{ product.precio_venta }}</p>
          <p class="text-2xl font-semibold tracking-tight text-[#475841]">S/.{{ product.precio_descuento | number:'1.2-2' }}</p>
        </div>
       <a [routerLink]="['/producto', product.id]" class="inline-flex items-center gap-2 border border-[#475841] bg-[#475841] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5b6d54]">
         Ver producto
       </a>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: PublicProduct;
}
