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
    <section class="border border-[#ced0ce] bg-white">
      <div class="p-6 lg:p-8 xl:p-10">
        <!-- Header -->
        <div class="flex flex-col gap-5 border-b border-[#ced0ce] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Historial de compras</p>
            <h1 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">Mis Compras</h1>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-[#6b6d6b]">Revisa el estado de tus pedidos y accede al detalle de cada compra realizada.</p>
          </div>
        </div>

        <!-- Content -->
        <div class="mt-6 space-y-6">
          @if (loading) {
            <div class="border border-[#ced0ce] bg-[#f8f9f8] p-8 text-center">
              <div class="flex flex-col items-center gap-3">
                <span class="material-symbols-outlined text-4xl text-[#475841] animate-pulse">sync</span>
                <p class="text-sm font-medium text-[#3f403f]">Cargando tus órdenes...</p>
              </div>
            </div>
          } @else if (error) {
            <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined">error</span>
                {{ error }}
              </div>
            </div>
          } @else {
            @if (ordenes.length === 0) {
              <div class="border border-[#ced0ce] bg-[#f8f9f8] p-12 text-center">
                <div class="flex flex-col items-center gap-4">
                  <span class="material-symbols-outlined text-6xl text-[#ced0ce]">receipt_long</span>
                  <div>
                    <p class="text-lg font-semibold text-[#3f403f]">No has realizado ninguna compra</p>
                    <p class="mt-1 text-sm text-[#6b6d6b]">Explora nuestro catálogo y encuentra productos increíbles.</p>
                  </div>
                  <a routerLink="/" class="inline-flex items-center gap-2 border border-[#475841] bg-[#475841] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5b6d54]">
                    <span class="material-symbols-outlined text-sm">shopping_bag</span>
                    Ir a la tienda
                  </a>
                </div>
              </div>
            } @else {
              <div class="space-y-6">
                @for (orden of ordenes; track orden.id) {
                  <article class="border border-[#ced0ce] bg-white overflow-hidden">
                    <!-- Order Header -->
                    <div class="border-b border-[#ced0ce] px-5 py-4 bg-[#f8f9f8]">
                      <div class="flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-4">
                          <div class="inline-flex h-8 w-8 items-center justify-center border border-[#475841] bg-[#475841] text-sm font-semibold text-white">
                            {{ orden.id }}
                          </div>
                          <div>
                            <h2 class="text-lg font-semibold tracking-tight text-[#3f403f]">Pedido #CEU-{{ orden.id }}</h2>
                            <p class="text-sm text-[#6b6d6b]">Realizado el {{ orden.fecha_creacion | date:'dd MMM yyyy' }}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-4">
                          <span class="text-2xl font-semibold tracking-tight text-[#475841]">S/. {{ orden.total | number:'1.2-2' }}</span>
                          <a [routerLink]="['/confirmacion', orden.id]" class="inline-flex items-center gap-1 border border-[#ced0ce] bg-white px-4 py-2 text-sm font-semibold text-[#3f403f] transition-colors hover:bg-[#ced0ce]">
                            Ver detalle
                            <span class="material-symbols-outlined text-[16px]">visibility</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <!-- Products Summary -->
                    <div class="divide-y divide-[#ced0ce]">
                      @for (item of orden.items; track item.id) {
                        <div class="flex gap-4 px-5 py-4">
                          <div class="flex h-16 w-16 items-center justify-center border border-[#ced0ce] bg-[#e6e8e6] text-[#475841]">
                            @if (item.producto?.imagen) {
                              <img [src]="item.producto.imagen" [alt]="item.producto.nombre" class="w-full h-full object-contain" />
                            } @else {
                              <span class="material-symbols-outlined text-2xl">package_2</span>
                            }
                          </div>
                          <div class="min-w-0 flex-1">
                            <div class="flex items-start justify-between gap-3">
                              <div>
                                <h3 class="text-sm font-semibold text-[#3f403f]">{{ item.producto?.nombre }}</h3>
                                @if (item.producto?.proveedorRel) {
                                  <p class="mt-1 text-xs text-[#6b6d6b]">Marca: {{ item.producto?.proveedorRel?.nombre }}</p>
                                }
                                <p class="mt-1 text-xs text-[#6b6d6b] line-clamp-1">{{ item.producto?.descripcion }}</p>
                                <p class="mt-2 text-xs text-[#6b6d6b]">Cantidad: {{ item.cantidad }}</p>
                              </div>
                              <p class="text-sm font-semibold text-[#475841]">S/. {{ item.precio_unitario | number:'1.2-2' }}</p>
                            </div>
                          </div>
                        </div>
                      }
                    </div>

                    <!-- Stepper Progress -->
                    <div class="border-t border-[#ced0ce] bg-[#f8f9f8] px-5 py-5">
                      <div class="flex items-center gap-2 mb-4">
                        <span class="material-symbols-outlined text-[#475841]">local_shipping</span>
                        <h3 class="text-sm font-semibold text-[#3f403f]">Estado del pedido</h3>
                        <span class="border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#475841]">{{ orden.estado }}</span>
                      </div>
                      <div class="relative flex items-center justify-between w-full max-w-2xl">
                        <!-- Connecting Line -->
                        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-[#ced0ce] -z-10"></div>
                        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-[#475841] -z-10 transition-all duration-500" [style.width]="getStepProgress(orden.estado)"></div>
                        
                        <!-- Step 1: Confirmado -->
                        <div class="flex flex-col items-center gap-2 bg-[#f8f9f8] px-1">
                          <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                               [ngClass]="isStepActive(orden.estado, 1) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                            <span class="material-symbols-outlined text-[16px]">check</span>
                          </div>
                          <span class="text-[11px] font-medium uppercase tracking-[0.12em]" [ngClass]="isStepActive(orden.estado, 1) ? 'text-[#475841]' : 'text-[#8a8d8a]'">Confirmado</span>
                        </div>

                        <!-- Step 2: Empaque -->
                        <div class="flex flex-col items-center gap-2 bg-[#f8f9f8] px-1">
                          <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                               [ngClass]="isStepActive(orden.estado, 2) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                            <span class="material-symbols-outlined text-[16px]">inventory_2</span>
                          </div>
                          <span class="text-[11px] font-medium uppercase tracking-[0.12em]" [ngClass]="isStepActive(orden.estado, 2) ? 'text-[#475841]' : 'text-[#8a8d8a]'">Empaque</span>
                        </div>

                        <!-- Step 3: Entrega -->
                        <div class="flex flex-col items-center gap-2 bg-[#f8f9f8] px-1">
                          <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                               [ngClass]="isStepActive(orden.estado, 3) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                            <span class="material-symbols-outlined text-[16px]">local_shipping</span>
                          </div>
                          <span class="text-[11px] font-medium uppercase tracking-[0.12em]" [ngClass]="isStepActive(orden.estado, 3) ? 'text-[#475841]' : 'text-[#8a8d8a]'">Entrega</span>
                        </div>

                        <!-- Step 4: Entregado -->
                        <div class="flex flex-col items-center gap-2 bg-[#f8f9f8] px-1">
                          <div class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                               [ngClass]="isStepActive(orden.estado, 4) ? 'bg-[#475841] text-white border-[#475841]' : 'bg-white text-[#ced0ce] border-[#ced0ce]'">
                            <span class="material-symbols-outlined text-[16px]">home</span>
                          </div>
                          <span class="text-[11px] font-medium uppercase tracking-[0.12em]" [ngClass]="isStepActive(orden.estado, 4) ? 'text-[#475841]' : 'text-[#8a8d8a]'">Entregado</span>
                        </div>
                      </div>
                    </div>
                  </article>
                }
              </div>
            }
          }
        </div>
      </div>
    </section>
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

  getPedidosActivos(): number {
    return this.ordenes.filter(o => o.estado !== 'ENTREGADA' && o.estado !== 'CANCELADA').length;
  }

  getPedidosEntregados(): number {
    return this.ordenes.filter(o => o.estado === 'ENTREGADA').length;
  }

  getTotalInvertido(): number {
    return this.ordenes.reduce((total, o) => total + o.total, 0);
  }
}