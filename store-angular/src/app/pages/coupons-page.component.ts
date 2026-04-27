import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-coupons-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="relative mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
      <section class="mb-10">
        <div class="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Cupones activos</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">Todos los cupones disponibles</h2>
          </div>
          <a routerLink="/" class="text-sm font-semibold text-[#475841] hover:text-[#3f403f]">← Volver al inicio</a>
        </div>
      </section>

      <section *ngIf="loading" class="border border-[#ced0ce] bg-white p-8 text-center">
        <p class="text-[#6b6d6b]">Cargando cupones...</p>
      </section>

      <section *ngIf="error && !loading" class="border border-[#ced0ce] bg-white p-8 text-center">
        <p class="text-red-600">{{ error }}</p>
      </section>

      <section *ngIf="!loading && coupons.length === 0" class="border border-[#ced0ce] bg-white p-16 text-center">
        <p class="text-[#6b6d6b] text-lg">No hay cupones activos actualmente</p>
        <p class="text-sm text-[#6b6d6b] mt-2">Vuelve pronto para ver nuevas ofertas</p>
      </section>

      <section *ngIf="coupons.length > 0 && !loading" class="grid gap-6">
        <div *ngFor="let coupon of coupons" class="border border-[#ced0ce] bg-white p-6">
          <div class="flex items-start justify-between gap-3 mb-4">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">{{ coupon.codigo }}</p>
              <h3 class="mt-1 text-lg font-semibold tracking-tight text-[#3f403f]">{{ coupon.descripcion }}</h3>
            </div>
            <span class="text-2xl text-[#475841]">🎟</span>
          </div>
          
          <div class="space-y-2">
            <p *ngIf="coupon.tipo === 'porcentaje'" class="text-sm text-[#6b6d6b]">
              Descuento: <strong class="text-[#475841]">{{ coupon.valor }}%</strong>
            </p>
            <p *ngIf="coupon.tipo === 'monto'" class="text-sm text-[#6b6d6b]">
              Descuento: <strong class="text-[#475841]">S/.{{ coupon.valor }}</strong>
            </p>
            
            <p class="text-xs text-[#6b6d6b]">
              Válido desde: 
              <span class="font-medium">{{ coupon.fechaInicio | date:'dd/MM/yyyy' }}</span>
            </p>
            <p class="text-xs text-[#6b6d6b]">
              Válido hasta: 
              <span class="font-medium">{{ coupon.fechaFin | date:'dd/MM/yyyy' }}</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  `
})
export class CouponsPageComponent implements OnInit {
  loading = true;
  error = '';
  coupons: Array<{
    codigo: string;
    descripcion: string;
    tipo: 'porcentaje' | 'monto';
    valor: number;
    fechaInicio: string;
    fechaFin: string;
  }> = [];

  constructor(private readonly couponService: CouponService) {}

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons(): void {
    this.loading = true;
    this.couponService.getActiveCoupons().subscribe({
      next: (response) => {
        this.coupons = response.coupons || [];
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar los cupones';
        this.loading = false;
      }
    });
  }
}