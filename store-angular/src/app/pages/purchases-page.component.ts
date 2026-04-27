import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Orden } from '../models';
import { StoreApiService } from '../services/store-api.service';
import { AuthService } from '../services/auth.service';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-purchases-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="mx-auto w-full max-w-container-max px-md py-xl flex-grow flex flex-col gap-lg pb-24 md:pb-xl">
      <div class="flex flex-col gap-sm">
        <h1 class="font-h1 text-h1 text-primary">Mis Compras</h1>
        <p class="font-body-md text-body-md text-on-surface-variant">Historial detallado de tus pedidos realizados.</p>
      </div>

      @if (loading) {
        <div class="flex h-64 items-center justify-center">
          <p class="text-lg font-semibold text-primary">Cargando órdenes...</p>
        </div>
      } @else if (error) {
        <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
          {{ error }}
        </div>
      } @else {
        @if (ordenes.length === 0) {
          <div class="flex h-64 flex-col items-center justify-center gap-4 border border-[#ced0ce] bg-white text-center">
            <span class="material-symbols-outlined text-6xl text-[#ced0ce]">receipt_long</span>
            <p class="text-lg font-semibold text-[#3f403f]">No has realizado ninguna compra aún.</p>
            <a routerLink="/" class="border border-[#475841] bg-[#475841] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5b6d54]">Ir a la tienda</a>
          </div>
        } @else {
          <div class="flex flex-col gap-lg">
            @for (orden of ordenes; track orden.id) {
              <article class="bg-surface-container-lowest border border-[#ced0ce] rounded-theme flex flex-col opacity-90 hover:opacity-100 transition-opacity">
                <!-- Order Header -->
                <div class="flex flex-wrap justify-between items-center p-md bg-surface-container-low border-b border-[#ced0ce]">
                  <div class="flex flex-col gap-xs">
                    <span class="font-label text-label text-on-surface-variant uppercase">Pedido #CEU-{{ orden.id }}</span>
                    <span class="font-body-sm text-body-sm text-outline">Realizado el {{ orden.fecha_creacion | date:'dd MMM yyyy' }}</span>
                  </div>
                  <div class="flex flex-col items-end gap-xs mt-sm md:mt-0">
                    <span class="font-h3 text-h3 text-primary">S/. {{ orden.total | number:'1.2-2' }}</span>
                    <a [routerLink]="['/confirmacion', orden.id]" class="font-label text-label text-secondary hover:underline flex items-center gap-1">
                      Ver detalle <span class="material-symbols-outlined text-[16px]">visibility</span>
                    </a>
                  </div>
                </div>

                <!-- Products Summary -->
                <div class="p-md border-b border-[#ced0ce] flex flex-col gap-4">
                  @for (item of orden.items; track item.id) {
                    <div class="flex gap-md items-start">
                      <div class="flex-shrink-0 w-20 h-20 border border-[#ced0ce] rounded-theme bg-surface-container flex items-center justify-center overflow-hidden">
                        @if (item.producto?.imagen) {
                          <img [src]="item.producto.imagen" [alt]="item.producto.nombre" class="w-full h-full object-contain" />
                        } @else {
                          <span class="material-symbols-outlined text-3xl text-[#ced0ce]">package_2</span>
                        }
                      </div>
                      <div class="flex flex-col text-left">
                        <h4 class="font-bold text-primary text-sm uppercase tracking-wide">{{ item.producto?.nombre }}</h4>
                        @if (item.producto?.proveedorRel) {
                          <p class="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Marca: {{ item.producto?.proveedorRel?.nombre }}</p>
                        }
                        <p class="text-xs text-on-surface-variant line-clamp-2 leading-relaxed max-w-2xl">{{ item.producto?.descripcion }}</p>
                        <div class="mt-2 flex items-center gap-3">
                          <span class="text-xs font-bold text-[#475841] bg-[#eaf1ed] px-2 py-0.5 rounded-sm">Cant: {{ item.cantidad }}</span>
                          <span class="text-xs font-bold text-[#475841]">S/. {{ item.precio_unitario | number:'1.2-2' }}</span>
                        </div>
                      </div>
                    </div>
                  }
                </div>

                <!-- Stepper Progress -->
                <div class="p-md bg-surface-container-lowest">
                  <h3 class="font-label text-label text-on-surface-variant uppercase mb-4">Estado del Pedido: {{ orden.estado }}</h3>
                  <div class="relative flex items-center justify-between w-full max-w-3xl mx-auto">
                    <!-- Connecting Line -->
                    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-[#ced0ce] -z-10"></div>
                    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-[#475841] -z-10 transition-all duration-500"
                         [style.width]="getStepProgress(orden.estado)"></div>
                    
                    <!-- Step 1: Confirmado -->
                    <div class="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
                      <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                           [ngClass]="isStepActive(orden.estado, 1) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                        <span class="material-symbols-outlined text-[18px]">check</span>
                      </div>
                      <span class="font-label text-label" [ngClass]="isStepActive(orden.estado, 1) ? 'text-primary' : 'text-outline-variant'">Confirmado</span>
                    </div>

                    <!-- Step 2: Empaque -->
                    <div class="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
                      <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                           [ngClass]="isStepActive(orden.estado, 2) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                        <span class="material-symbols-outlined text-[18px]">inventory_2</span>
                      </div>
                      <span class="font-label text-label" [ngClass]="isStepActive(orden.estado, 2) ? 'text-primary' : 'text-outline-variant'">Empaque</span>
                    </div>

                    <!-- Step 3: Entrega -->
                    <div class="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
                      <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                           [ngClass]="isStepActive(orden.estado, 3) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                        <span class="material-symbols-outlined text-[18px]">local_shipping</span>
                      </div>
                      <span class="font-label text-label" [ngClass]="isStepActive(orden.estado, 3) ? 'text-primary' : 'text-outline-variant'">Entrega</span>
                    </div>

                    <!-- Step 4: Entregado -->
                    <div class="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
                      <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                           [ngClass]="isStepActive(orden.estado, 4) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                        <span class="material-symbols-outlined text-[18px]">home</span>
                      </div>
                      <span class="font-label text-label" [ngClass]="isStepActive(orden.estado, 4) ? 'text-primary' : 'text-outline-variant'">Entregado</span>
                    </div>
                  </div>
                </div>
              </article>
            }
          </div>
        }
      }
    </main>
  `,
})
export class PurchasesPageComponent implements OnInit {
  ordenes: Orden[] = [];
  loading = true;
  error = '';

  constructor(
    private readonly storeApi: StoreApiService,
    private readonly auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.auth.sessionLoaded$.pipe(
      filter(loaded => loaded),
      switchMap(() => this.auth.user$)
    ).subscribe({
      next: (user) => {
        if (user) {
          this.fetchOrders();
        } else {
          this.error = 'Debes iniciar sesión para ver tus compras.';
          this.loading = false;
        }
      },
      error: () => {
        this.error = 'Ocurrió un error al verificar tu sesión.';
        this.loading = false;
      }
    });
  }

  fetchOrders(): void {
    this.loading = true;
    this.storeApi.getUserOrders().subscribe({
      next: (response) => {
        this.ordenes = response.ordenes;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
        this.error = 'No se pudieron cargar las órdenes.';
        this.loading = false;
      },
    });
  }

  getTotalArticulos(orden: Orden): number {
    return orden.items?.reduce((acc: number, item: any) => acc + item.cantidad, 0) || 0;
  }

  getNombresProductos(orden: Orden): string {
    if (!orden.items || orden.items.length === 0) return '';
    const nombres = orden.items.map((item: any) => item.producto?.nombre).filter(Boolean);
    if (nombres.length <= 2) return nombres.join(', ');
    return `${nombres.slice(0, 2).join(', ')} y ${nombres.length - 2} artículos más.`;
  }

  getStepProgress(estado: string): string {
    const steps: Record<string, string> = {
      'PENDIENTE': '0%',
      'PAGADA': '33.33%',
      'EMPAQUE': '66.66%',
      'ENVIADA': '100%',
      'ENTREGADA': '100%',
      'CANCELADA': '0%'
    };
    return steps[estado] || '0%';
  }

  isStepActive(estado: string, step: number): boolean {
    const estadoMap: Record<string, number> = {
      'PENDIENTE': 0,
      'PAGADA': 1,
      'EMPAQUE': 2,
      'ENVIADA': 3,
      'ENTREGADA': 4,
      'CANCELADA': -1
    };
    const currentStep = estadoMap[estado] || 0;
    return currentStep >= step;
  }
}