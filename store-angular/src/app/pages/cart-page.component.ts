import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { CartState, CartItem } from '../models';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="border border-[#ced0ce] bg-white">
      <div class="grid grid-cols-1 lg:grid-cols-[1.55fr_0.85fr]">
        <div class="border-b border-[#ced0ce] p-6 lg:border-b-0 lg:border-r lg:p-8">
          <div class="flex flex-col gap-5 border-b border-[#ced0ce] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Shopping cart</p>
              <h1 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">Tu carrito de compras</h1>
              <p class="mt-2 text-sm text-[#6b6d6b]">Revisa tus productos, aplica un cupón y continúa a checkout.</p>
            </div>
            <a routerLink="/" class="inline-flex items-center gap-2 text-sm font-semibold text-[#475841] hover:text-[#3f403f]">
              ← Seguir comprando
            </a>
          </div>

          <div class="mt-6 grid gap-4">
            @for (item of (cart$ | async)?.items || []; track item.productoId) {
              <article class="border border-[#ced0ce] bg-[#fcfcfb] p-4">
                <div class="grid grid-cols-1 gap-4 xl:grid-cols-[120px_minmax(0,1fr)_170px_160px_120px] xl:items-center" [class.opacity-60]="!item.producto?.disponible">
                  <div class="flex h-28 items-center justify-center border border-[#ced0ce] bg-[#e6e8e6] text-[#475841]">
                    @if (item.producto?.imagen) {
                      <img [src]="item.producto.imagen" [alt]="item.producto.nombre" class="w-full h-full object-contain" />
                    } @else {
                      <span class="text-5xl">📦</span>
                    }
                  </div>
                  <div>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="text-lg font-semibold tracking-tight text-[#3f403f]">{{ item.producto?.nombre }}</span>
                      @if (!item.producto?.disponible) {
                        <span class="border border-red-600 bg-red-50 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-red-700">Agotado</span>
                      }
                      @if (item.producto?.descuento_tipo === 'porcentaje') {
                        <span class="border border-[#475841] bg-[#475841] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">-{{ item.producto.descuento_valor }}%</span>
                      }
                      @if (item.producto?.envio_gratis) {
                        <span class="border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#475841]">Envío gratis</span>
                      }
                    </div>
                    <p class="mt-1 text-sm text-[#6b6d6b]">{{ item.producto?.descripcion | slice:0:50 }}...</p>
                    @if (item.producto?.envio_gratis) {
                      <p class="mt-3 text-sm font-medium text-[#475841]">Llega envío gratis 3-5 días</p>
                    }
                    <div class="mt-3 flex items-center gap-2 text-xs text-[#6b6d6b]">
                      <span class="border border-[#ced0ce] bg-white px-2 py-1">Vendedor oficial</span>
                      <span class="border border-[#ced0ce] bg-white px-2 py-1">Garantía 12 meses</span>
                    </div>
                  </div>
                  <div class="xl:text-center">
                    <p class="text-xs uppercase tracking-[0.16em] text-[#6b6d6b]">Precio unitario</p>
                    @if (item.producto?.descuento_tipo) {
                      <p class="mt-2 text-xs text-[#6b6d6b] line-through">S/.{{ item.producto?.precio_venta }}</p>
                    }
                    <p class="text-2xl font-semibold tracking-tight text-[#475841]">S/.{{ item.producto?.precio_descuento | number:'1.2-2' }}</p>
                  </div>
                  <div>
                    <p class="text-xs uppercase tracking-[0.16em] text-[#6b6d6b] xl:text-center">Cantidad</p>
                    <div class="mt-2 inline-flex w-full items-center justify-between border border-[#ced0ce] bg-white xl:w-[160px]">
                      <button (click)="decrease(item.productoId)" [disabled]="item.cantidad <= 1 || !item.producto?.disponible" class="inline-flex h-11 w-11 items-center justify-center border-r border-[#ced0ce] text-[#475841] hover:bg-[#e6e8e6] disabled:opacity-50" aria-label="Disminuir cantidad">
                        −
                      </button>
                      <span class="flex-1 text-center text-sm font-semibold text-[#3f403f]">{{ item.cantidad }}</span>
                      <button (click)="increase(item.productoId)" [disabled]="!item.producto?.disponible || item.cantidad >= (item.producto?.stock_actual ?? 0)" class="inline-flex h-11 w-11 items-center justify-center border-l border-[#ced0ce] text-[#475841] hover:bg-[#e6e8e6] disabled:opacity-50" aria-label="Aumentar cantidad">
                        +
                      </button>
                    </div>
                  </div>
                  <div class="flex items-end justify-between xl:block xl:text-right">
                    <div>
                      <p class="text-xs uppercase tracking-[0.16em] text-[#6b6d6b]">Subtotal</p>
                      <p class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]">S/.{{ item.subtotal | number:'1.2-2' }}</p>
                    </div>
                    <button (click)="remove(item.productoId)" class="mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#6b6d6b] hover:text-[#475841] xl:mt-4" aria-label="Eliminar producto">
                      🗑 Quitar
                    </button>
                  </div>
                </div>
              </article>
            }

            @if ((cart$ | async)?.items?.length === 0) {
              <div class="border border-dashed border-[#ced0ce] bg-[#f8f8f7] p-8 text-center">
                <div class="mx-auto flex h-16 w-16 items-center justify-center border border-[#ced0ce] bg-white text-[#475841]">
                  <span class="text-3xl">🛒</span>
                </div>
                <h2 class="mt-5 text-2xl font-semibold tracking-tight text-[#3f403f]">Tu carrito está vacío</h2>
                <p class="mt-2 text-sm text-[#6b6d6b]">Aún no agregas productos. Descubre laptops, parlantes, routers y más para empezar tu compra.</p>
                <a routerLink="/" class="mt-6 inline-flex items-center justify-center border border-[#9fb8ad] bg-[#9fb8ad] px-5 py-3 text-sm font-semibold text-[#475841] hover:bg-[#b5c8bf]">Explorar productos</a>
              </div>
            } @else {
              <div class="border border-dashed border-[#ced0ce] bg-[#f7f8f7] p-6">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 class="text-lg font-semibold tracking-tight text-[#3f403f]">¿Tienes un cupón?</h2>
                    <p class="mt-1 text-sm text-[#6b6d6b]">Aplícalo aquí antes de continuar con tu compra.</p>
                  </div>
                  <div class="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
                    <input [(ngModel)]="couponCode" type="text" class="h-11 w-full border border-[#ced0ce] bg-white px-4 text-sm text-[#3f403f] outline-none placeholder:text-[#9aa19a]" placeholder="Ingresa tu código" />
                    <button (click)="applyCoupon()" class="inline-flex h-11 items-center justify-center border border-[#475841] bg-[#475841] px-5 text-sm font-semibold text-white hover:bg-[#5b6d54]">Aplicar cupón</button>
                  </div>
                </div>
                @if ((cart$ | async)?.cupon) {
                  <div class="mt-4 inline-flex items-center gap-2 border border-[#9fb8ad] bg-[#eaf1ed] px-3 py-2 text-sm font-medium text-[#475841]">
                    ✓ Cupón aplicado: {{ (cart$ | async)?.cupon?.codigo }} - descuento de S/.{{ (cart$ | async)?.descuentoCupon | number:'1.2-2' }}
                  </div>
                }
                @if (cartService.error$ | async) {
                  <div class="mt-4 inline-flex items-center gap-2 border border-red-500 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                    ✕ {{ cartService.error$ | async }}
                  </div>
                }
              </div>
            }
          </div>
        </div>

        @if ((cart$ | async)?.items?.length) {
          <aside class="bg-[#f7f8f7] p-6 lg:p-8">
            <div class="border border-[#ced0ce] bg-white p-6">
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Resumen de orden</p>
              <div class="mt-5 space-y-4 border-b border-[#ced0ce] pb-5 text-sm text-[#3f403f]">
                <div class="flex items-center justify-between gap-3">
                  <span>Productos ({{ (cart$ | async)?.totalItems }})</span>
                  <span class="font-medium">S/.{{ (cart$ | async)?.subtotalProductos | number:'1.2-2' }}</span>
                </div>
                @if ((cart$ | async)?.descuentoCupon) {
                  <div class="flex items-center justify-between gap-3">
                    <span>Descuento por cupón</span>
                    <span class="font-medium text-[#475841]">- S/.{{ (cart$ | async)?.descuentoCupon | number:'1.2-2' }}</span>
                  </div>
                }
                <div class="flex items-center justify-between gap-3">
                  <span>Envío</span>
                  @if ((cart$ | async)?.subtotalEnvios === 0) {
                    <span class="border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#475841]">GRATIS</span>
                  } @else {
                    <span class="font-medium">S/.{{ (cart$ | async)?.subtotalEnvios | number:'1.2-2' }}</span>
                  }
                </div>
                <div class="flex items-center justify-between gap-3">
                  <span>Subtotal sin IGV</span>
                  <span class="font-medium">S/.{{ getSubtotalSinIGV() | number:'1.2-2' }}</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <span>IGV incluido (18%)</span>
                  <span class="font-medium">S/.{{ getIGV() | number:'1.2-2' }}</span>
                </div>
              </div>

              <div class="mt-5 space-y-3">
                <div class="flex items-end justify-between gap-3">
                  <div>
                    <p class="text-sm text-[#6b6d6b]">Total a pagar</p>
                    <p class="text-xs text-[#6b6d6b]">Incluye IGV peruano y envío gratis</p>
                  </div>
                  <p class="text-3xl font-semibold tracking-tight text-[#475841]">S/.{{ (cart$ | async)?.total | number:'1.2-2' }}</p>
                </div>
                @if (hasOutOfStockItems()) {
                  <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
                    Hay productos agotados en tu carrito. Elimínalos para continuar.
                  </div>
                }
                <a routerLink="/checkout" [class.pointer-events-none]="hasOutOfStockItems()" [class.opacity-50]="hasOutOfStockItems()" class="inline-flex w-full items-center justify-center border border-[#475841] bg-[#475841] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5b6d54]">Proceder al checkout</a>
                <a routerLink="/" class="inline-flex w-full items-center justify-center border border-[#ced0ce] bg-white px-5 py-3 text-sm font-semibold text-[#3f403f] hover:bg-[#e6e8e6]">Ver más productos</a>
              </div>
            </div>

            <div class="mt-4 border border-[#ced0ce] bg-[#9fb8ad] p-5 text-[#475841]">
              <div class="flex items-start gap-3">
                <span class="text-xl">🛡</span>
                <div>
                  <h3 class="text-sm font-semibold uppercase tracking-[0.16em]">Compra protegida</h3>
                  <p class="mt-2 text-sm leading-6">Pago seguro, garantía en productos seleccionados y soporte postventa para tu tranquilidad.</p>
                </div>
              </div>
            </div>

            <div class="mt-4 border border-[#ced0ce] bg-white p-5">
              <div class="flex items-start gap-3">
                <span class="text-xl text-[#475841]">🚚</span>
                <div>
                  <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-[#475841]">Despacho estimado</h3>
                  <p class="mt-2 text-sm leading-6 text-[#6b6d6b]">
                    Tus productos llegan en 3-5 días hábiles.
                    @if ((cart$ | async)?.subtotalEnvios === 0) {
                      Todos los ítems de este carrito califican para envío <span class="font-semibold text-[#475841]">GRATIS</span>.
                    } @else {
                      El costo de envío se ha calculado en tu resumen.
                    }
                  </p>
                </div>
              </div>
            </div>

            @if (auth.isAuthenticated && cartService.hasLocalCart()) {
              <div class="mt-4 border border-[#ced0ce] bg-yellow-50 p-5">
                <div class="flex items-start gap-3">
                  <span class="text-xl">⚠</span>
                  <div>
                    <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-[#475841]">Carrito local detectado</h3>
                    <p class="mt-2 text-sm leading-6 text-[#6b6d6b]">Tienes productos guardados en este navegador. ¿Deseas importarlos?</p>
                    <button (click)="importCart()" class="mt-3 inline-flex items-center justify-center border border-[#475841] bg-[#475841] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5b6d54]">Importar a mi cuenta</button>
                  </div>
                </div>
              </div>
            }
          </aside>
        }
      </div>
    </section>
  `
})
export class CartPageComponent implements OnInit {
  cart$: Observable<CartState>;
  couponCode = '';

  constructor(
    public readonly cartService: CartService,
    public readonly auth: AuthService,
  ) {
    this.cart$ = this.cartService.cart$;
    this.cartService.loadCart();
  }

  ngOnInit(): void { }

  increase(productoId: number): void {
    const item = this.cartService.snapshot.items.find((entry) => entry.productoId === productoId);
    if (!item) return;
    const stock = item.producto?.stock_actual ?? 0;
    if (item.cantidad >= stock) return;
    this.cartService.updateQuantity(productoId, item.cantidad + 1);
  }

  decrease(productoId: number): void {
    const item = this.cartService.snapshot.items.find((entry) => entry.productoId === productoId);
    if (item && item.cantidad > 1) this.cartService.updateQuantity(productoId, item.cantidad - 1);
  }

  remove(productoId: number): void {
    this.cartService.removeProduct(productoId);
  }

  importCart(): void {
    this.cartService.importLocalCart();
  }

  applyCoupon(): void {
    this.cartService.applyCoupon(this.couponCode);
  }

  getSubtotalSinIGV(): number {
    const total = this.cartService.snapshot.total;
    return total / 1.18;
  }

  getIGV(): number {
    const total = this.cartService.snapshot.total;
    return total - (total / 1.18);
  }

  hasOutOfStockItems(): boolean {
    return this.cartService.snapshot.items.some((item) => !item.producto?.disponible);
  }
}