import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreApiService } from '../services/store-api.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-order-confirmation-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (loading) {
      <div class="flex h-64 items-center justify-center">
        <p class="text-lg font-semibold text-[#3f403f]">Cargando orden...</p>
      </div>
    } @else if (error) {
      <div class="flex h-64 flex-col items-center justify-center gap-4">
        <p class="text-lg font-semibold text-red-600">{{ error }}</p>
        <a routerLink="/" class="border border-[#475841] bg-[#475841] px-6 py-3 text-sm font-semibold text-white">Volver al inicio</a>
      </div>
    } @else if (orden) {
      <section class="border border-[#ced0ce] bg-[#475841] px-8 py-10 text-[#e6e8e6] lg:px-10 lg:py-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <span class="inline-flex items-center gap-2 border border-[#9fb8ad] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#ced0ce]">
              ✓ Pedido confirmado
            </span>
            <h1 class="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Tu compra fue realizada con éxito!</h1>
            <p class="mt-4 max-w-2xl text-sm leading-6 text-[#d7dbd7] sm:text-base">Gracias por comprar en CompraEnUna. Tu pedido #CEU-{{ orden.id }} está siendo procesado.</p>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <a routerLink="/mis-compras" class="inline-flex items-center justify-center border border-[#9fb8ad] bg-[#9fb8ad] px-5 py-3 text-sm font-semibold text-[#475841] transition-colors hover:bg-[#b5c8bf]">Ver historial de compras</a>
              <a routerLink="/" class="inline-flex items-center justify-center border border-[#9fb8ad] px-5 py-3 text-sm font-semibold text-[#e6e8e6] transition-colors hover:bg-[#5a6c53]">Seguir comprando</a>
            </div>
          </div>
          <div class="grid gap-px border border-[#70806a] bg-[#70806a] text-sm">
            <div class="flex items-center justify-between bg-[#475841] px-4 py-4">
              <span class="text-[#ced0ce]">N.º de orden</span>
              <span class="font-semibold tracking-tight text-white">CEU-{{ orden.id }}</span>
            </div>
            <div class="flex items-center justify-between bg-[#475841] px-4 py-4">
              <span class="text-[#ced0ce]">Método de pago</span>
              <span class="font-semibold tracking-tight text-white">{{ orden.pago?.metodo_pago }}</span>
            </div>
            <div class="flex items-center justify-between bg-[#475841] px-4 py-4">
              <span class="text-[#ced0ce]">Fecha</span>
              <span class="font-semibold tracking-tight text-white">{{ orden.fecha_creacion | date:'dd/MM/yyyy' }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div class="grid gap-4">
          <article class="border border-[#ced0ce] bg-white p-6">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Estado del pedido</p>
                <h2 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">{{ orden.estado }}</h2>
              </div>
              <span class="inline-flex items-center gap-2 border border-[#9fb8ad] bg-[#eaf1ed] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#475841]">
                🚚 En proceso de despacho
              </span>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-px border border-[#ced0ce] bg-[#ced0ce] md:grid-cols-3">
              <div class="bg-[#f8f9f8] px-4 py-4">
                <div class="text-xs font-bold uppercase tracking-[0.14em] text-[#475841]">Confirmado</div>
                <p class="mt-2 text-sm text-[#6b6d6b]">Pago validado y pedido creado.</p>
              </div>
              <div class="bg-[#f8f9f8] px-4 py-4 opacity-50">
                <div class="text-xs font-bold uppercase tracking-[0.14em] text-[#475841]">Empaque</div>
                <p class="mt-2 text-sm text-[#6b6d6b]">Estamos preparando tus productos.</p>
              </div>
              <div class="bg-[#f8f9f8] px-4 py-4 opacity-50">
                <div class="text-xs font-bold uppercase tracking-[0.14em] text-[#475841]">Entrega</div>
                <p class="mt-2 text-sm text-[#6b6d6b]">Se despachará a {{ orden.envio?.ciudad }}.</p>
              </div>
            </div>
          </article>

          <article class="border border-[#ced0ce] bg-white p-6">
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Productos comprados</p>
                <h2 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">Resumen del pedido</h2>
              </div>
            </div>

            <div class="mt-6 grid gap-px border border-[#ced0ce] bg-[#ced0ce]">
              @for (item of orden.items; track item.id) {
                <div class="grid grid-cols-1 gap-4 bg-white p-4 md:grid-cols-[110px_1fr_auto] md:items-center">
                  <div class="flex h-24 items-center justify-center border border-[#ced0ce] bg-[#e6e8e6]">
                    @if (item.producto?.imagen) {
                      <img [src]="item.producto.imagen" [alt]="item.producto.nombre" class="h-full w-full object-contain" />
                    } @else {
                      <span class="text-4xl">📦</span>
                    }
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold tracking-tight text-[#3f403f]">{{ item.producto?.nombre }}</h3>
                    <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
                      <span class="border border-[#ced0ce] bg-[#f5f6f5] px-2 py-1 font-bold uppercase tracking-[0.12em] text-[#475841]">Cantidad: {{ item.cantidad }}</span>
                    </div>
                  </div>
                  <div class="text-left md:text-right">
                    <p class="text-xs text-[#6b6d6b]">Subtotal</p>
                    <p class="mt-1 text-2xl font-semibold tracking-tight text-[#475841]">S/.{{ item.subtotal | number:'1.2-2' }}</p>
                  </div>
                </div>
              }
            </div>
          </article>
        </div>

        <aside class="grid gap-4 self-start">
          <article class="border border-[#ced0ce] bg-white p-6">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Dirección de envío</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]">Entrega a domicilio</h2>
            <div class="mt-5 space-y-3 text-sm text-[#6b6d6b]">
              <p><span class="font-semibold text-[#3f403f]">{{ orden.envio?.nombre_completo }}</span></p>
              <p>{{ orden.envio?.direccion }} {{ orden.envio?.numero }}</p>
              <p>{{ orden.envio?.ciudad }}, {{ orden.envio?.region }}, {{ orden.envio?.pais }}</p>
              @if (orden.envio?.apartamento) {
                <p>Ref: {{ orden.envio.apartamento }}</p>
              }
              <p>Celular: {{ orden.envio?.telefono }}</p>
            </div>
          </article>

          <article class="border border-[#ced0ce] bg-white p-6">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Resumen de pago</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]">Totales del pedido</h2>
            <div class="mt-5 grid gap-px border border-[#ced0ce] bg-[#ced0ce] text-sm">
              <div class="flex items-center justify-between bg-white px-4 py-4">
                <span class="text-[#6b6d6b]">Subtotal sin IGV</span>
                <span class="font-semibold text-[#3f403f]">S/.{{ orden.subtotal | number:'1.2-2' }}</span>
              </div>
              <div class="flex items-center justify-between bg-white px-4 py-4">
                <span class="text-[#6b6d6b]">IGV (18%)</span>
                <span class="font-semibold text-[#3f403f]">S/.{{ orden.igv | number:'1.2-2' }}</span>
              </div>
              @if (orden.descuento_cupon > 0) {
                <div class="flex items-center justify-between bg-white px-4 py-4">
                  <span class="text-[#6b6d6b]">Descuento</span>
                  <span class="font-semibold text-[#475841]">- S/.{{ orden.descuento_cupon | number:'1.2-2' }}</span>
                </div>
              }
              <div class="flex items-center justify-between bg-white px-4 py-4">
                <span class="text-[#6b6d6b]">Envío</span>
                @if (orden.costo_envio === 0) {
                  <span class="font-bold uppercase tracking-[0.12em] text-[#475841]">GRATIS</span>
                } @else {
                  <span class="font-semibold text-[#3f403f]">S/.{{ orden.costo_envio | number:'1.2-2' }}</span>
                }
              </div>
              <div class="flex items-center justify-between bg-[#f8f9f8] px-4 py-4">
                <span class="font-semibold text-[#3f403f]">Total pagado</span>
                <span class="text-2xl font-semibold tracking-tight text-[#475841]">S/.{{ orden.total | number:'1.2-2' }}</span>
              </div>
            </div>
          </article>
        </aside>
      </section>
    }
  `
})
export class OrderConfirmationPageComponent implements OnInit {
  orden: any = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private api: StoreApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchOrder(id);
      } else {
        this.error = 'No se especificó un ID de orden válido.';
        this.loading = false;
      }
    });
  }

  fetchOrder(id: string) {
    this.api.getOrderById(id).subscribe({
      next: (data) => {
        this.orden = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || 'No se pudo cargar la información de la orden.';
        this.loading = false;
      }
    });
  }
}