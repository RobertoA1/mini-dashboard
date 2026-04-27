import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { CartState } from '../models';
import { AuthService } from '../services/auth.service';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <section class="border border-[#ced0ce] bg-white">
      <div class="grid grid-cols-1 lg:grid-cols-[1.55fr_0.75fr]">
        <div class="border-b border-[#ced0ce] p-6 lg:border-b-0 lg:border-r lg:p-8 xl:p-10">
          <div class="flex flex-col gap-5 border-b border-[#ced0ce] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Checkout seguro</p>
              <h1 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">Finaliza tu compra</h1>
              <p class="mt-2 max-w-2xl text-sm leading-6 text-[#6b6d6b]">Completa tus datos de envío y elige tu método de pago. El precio ya incluye IGV y el resumen lo desglosa automáticamente.</p>
            </div>
            <div class="grid grid-cols-3 gap-px border border-[#ced0ce] bg-[#ced0ce] text-xs font-medium text-[#475841] sm:min-w-[360px]">
              <div class="bg-[#9fb8ad] px-4 py-3 text-center font-semibold">1. Carrito</div>
              <div class="bg-[#475841] px-4 py-3 text-center font-semibold text-white">2. Checkout</div>
              <div class="bg-[#e6e8e6] px-4 py-3 text-center">3. Confirmación</div>
            </div>
          </div>

          <form class="mt-6 space-y-6" (ngSubmit)="onSubmit()">
            @if (error) {
              <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
                {{ error }}
              </div>
            }
            @if (!authService.isAuthenticated) {
              <div class="border border-yellow-500 bg-yellow-50 p-4 text-sm text-yellow-800">
                Debes <a routerLink="/auth" class="font-bold underline">iniciar sesión</a> para poder completar tu compra.
              </div>
            }

            <section class="border border-[#ced0ce] bg-[#f8f9f8]" [class.opacity-50]="!authService.isAuthenticated">
              <div class="border-b border-[#ced0ce] px-5 py-4">
                <div class="flex items-center gap-3">
                  <div class="inline-flex h-8 w-8 items-center justify-center border border-[#475841] bg-[#475841] text-sm font-semibold text-white">1</div>
                  <div>
                    <h2 class="text-lg font-semibold tracking-tight text-[#3f403f]">Dirección de envío</h2>
                    <p class="text-sm text-[#6b6d6b]">Usaremos estos datos para coordinar la entrega de tu pedido.</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
                <div class="md:col-span-2">
                  <label for="nombre-completo" class="mb-2 block text-sm font-medium text-[#3f403f]">Nombre completo</label>
                  <input id="nombre-completo" name="nombre_completo" [(ngModel)]="checkoutData.envio.nombre_completo" required type="text" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Ingresa tu nombre completo" />
                </div>
                <div>
                  <label for="email" class="mb-2 block text-sm font-medium text-[#3f403f]">Email</label>
                  <input id="email" name="email" [(ngModel)]="checkoutData.envio.email" required type="email" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="correo@ejemplo.com" />
                </div>
                <div>
                  <label for="telefono" class="mb-2 block text-sm font-medium text-[#3f403f]">Teléfono</label>
                  <input id="telefono" name="telefono" [(ngModel)]="checkoutData.envio.telefono" required type="tel" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="987 654 321" />
                </div>
                <div>
                  <label for="pais" class="mb-2 block text-sm font-medium text-[#3f403f]">País</label>
                  <select id="pais" name="pais" [(ngModel)]="checkoutData.envio.pais" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none focus:border-[#9fb8ad] disabled:bg-gray-100">
                    <option value="Perú">Perú</option>
                    <option value="Chile">Chile</option>
                    <option value="Ecuador">Ecuador</option>
                  </select>
                </div>
                <div>
                  <label for="region" class="mb-2 block text-sm font-medium text-[#3f403f]">Región</label>
                  <select id="region" name="region" [(ngModel)]="checkoutData.envio.region" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none focus:border-[#9fb8ad] disabled:bg-gray-100">
                    <option value="Lima">Lima</option>
                    <option value="Arequipa">Arequipa</option>
                    <option value="La Libertad">La Libertad</option>
                  </select>
                </div>
                <div>
                  <label for="ciudad" class="mb-2 block text-sm font-medium text-[#3f403f]">Ciudad</label>
                  <input id="ciudad" name="ciudad" [(ngModel)]="checkoutData.envio.ciudad" required type="text" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Ciudad" />
                </div>
                <div>
                  <label for="codigo-postal" class="mb-2 block text-sm font-medium text-[#3f403f]">Código postal</label>
                  <input id="codigo-postal" name="codigo_postal" [(ngModel)]="checkoutData.envio.codigo_postal" required type="text" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Código postal" />
                </div>
                <div class="md:col-span-2">
                  <label for="direccion" class="mb-2 block text-sm font-medium text-[#3f403f]">Dirección</label>
                  <input id="direccion" name="direccion" [(ngModel)]="checkoutData.envio.direccion" required type="text" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Calle, avenida o jirón" />
                </div>
                <div>
                  <label for="numero" class="mb-2 block text-sm font-medium text-[#3f403f]">Número</label>
                  <input id="numero" name="numero" [(ngModel)]="checkoutData.envio.numero" required type="text" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Número" />
                </div>
                <div>
                  <label for="apartamento" class="mb-2 block text-sm font-medium text-[#3f403f]">Apartamento</label>
                  <input id="apartamento" name="apartamento" [(ngModel)]="checkoutData.envio.apartamento" type="text" [disabled]="!authService.isAuthenticated" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none placeholder:text-[#8a8d8a] focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Piso, interior o referencia" />
                </div>
              </div>
            </section>

            <section class="border border-[#ced0ce] bg-white" [class.opacity-50]="!authService.isAuthenticated">
              <div class="border-b border-[#ced0ce] px-5 py-4">
                <div class="flex items-center gap-3">
                  <div class="inline-flex h-8 w-8 items-center justify-center border border-[#475841] bg-[#475841] text-sm font-semibold text-white">2</div>
                  <div>
                    <h2 class="text-lg font-semibold tracking-tight text-[#3f403f]">Método de envío</h2>
                    <p class="text-sm text-[#6b6d6b]">Selecciona la opción que mejor se adapte a tu urgencia.</p>
                  </div>
                </div>
              </div>
              <div class="grid gap-3 p-5">
                <label class="flex cursor-pointer items-start justify-between gap-4 border border-[#475841] bg-[#f4f7f4] p-4 transition-colors hover:border-[#9fb8ad]">
                  <div class="flex items-start gap-3">
                    <input type="radio" name="metodo_envio" value="estándar" [(ngModel)]="checkoutData.envio.metodo_envio" [disabled]="!authService.isAuthenticated" class="mt-1 h-4 w-4 accent-[#475841]" />
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-semibold text-[#3f403f]">Envío estándar</span>
                        <span class="border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#475841]">GRATIS</span>
                      </div>
                      <p class="mt-1 text-sm text-[#6b6d6b]">Llega entre 3 a 5 días hábiles.</p>
                    </div>
                  </div>
                  <div class="text-sm font-semibold text-[#475841]">S/.0</div>
                </label>
                <label class="flex cursor-pointer items-start justify-between gap-4 border border-[#ced0ce] bg-white p-4 transition-colors hover:border-[#9fb8ad]">
                  <div class="flex items-start gap-3">
                    <input type="radio" name="metodo_envio" value="express" [(ngModel)]="checkoutData.envio.metodo_envio" [disabled]="!authService.isAuthenticated" class="mt-1 h-4 w-4 accent-[#475841]" />
                    <div>
                      <span class="text-sm font-semibold text-[#3f403f]">Envío express</span>
                      <p class="mt-1 text-sm text-[#6b6d6b]">Llega en 24 a 48 horas.</p>
                    </div>
                  </div>
                  <div class="text-sm font-semibold text-[#475841]">S/.24</div>
                </label>
              </div>
            </section>

            <section class="border border-[#ced0ce] bg-white" [class.opacity-50]="!authService.isAuthenticated">
              <div class="border-b border-[#ced0ce] px-5 py-4">
                <div class="flex items-center gap-3">
                  <div class="inline-flex h-8 w-8 items-center justify-center border border-[#475841] bg-[#475841] text-sm font-semibold text-white">3</div>
                  <div>
                    <h2 class="text-lg font-semibold tracking-tight text-[#3f403f]">Método de pago</h2>
                    <p class="text-sm text-[#6b6d6b]">Elige cómo deseas completar tu compra.</p>
                  </div>
                </div>
              </div>
              <div class="grid gap-3 p-5">
                <label class="border border-[#475841] bg-[#f4f7f4] p-4 transition-colors hover:border-[#9fb8ad]">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex items-start gap-3">
                      <input type="radio" name="metodo_pago" value="Tarjeta de crédito" [(ngModel)]="checkoutData.pago.metodo_pago" [disabled]="!authService.isAuthenticated" class="mt-1 h-4 w-4 accent-[#475841]" />
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="text-sm font-semibold text-[#3f403f]">Tarjeta de crédito</span>
                          <span class="text-base">💳</span>
                        </div>
                        <p class="mt-1 text-sm text-[#6b6d6b]">Visa, Mastercard y American Express.</p>
                      </div>
                    </div>
                    <span class="text-xs font-semibold uppercase tracking-[0.16em] text-[#475841]">Recomendado</span>
                  </div>
                  @if (checkoutData.pago.metodo_pago === 'Tarjeta de crédito') {
                    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div class="md:col-span-2">
                        <label for="tarjeta" class="mb-2 block text-sm font-medium text-[#3f403f]">Número de tarjeta</label>
                        <input id="tarjeta" name="tarjeta" [(ngModel)]="tarjeta_dummy.numero" [disabled]="!authService.isAuthenticated" required type="text" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div>
                        <label for="titular" class="mb-2 block text-sm font-medium text-[#3f403f]">Titular</label>
                        <input id="titular" name="titular" [(ngModel)]="tarjeta_dummy.titular" [disabled]="!authService.isAuthenticated" required type="text" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="Nombre en la tarjeta" />
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <label for="vencimiento" class="mb-2 block text-sm font-medium text-[#3f403f]">Vencimiento</label>
                          <input id="vencimiento" name="vencimiento" [(ngModel)]="tarjeta_dummy.vencimiento" [disabled]="!authService.isAuthenticated" required type="text" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="MM/AA" />
                        </div>
                        <div>
                          <label for="cvv" class="mb-2 block text-sm font-medium text-[#3f403f]">CVV</label>
                          <input id="cvv" name="cvv" [(ngModel)]="tarjeta_dummy.cvv" [disabled]="!authService.isAuthenticated" required type="text" class="w-full border border-[#ced0ce] bg-white px-4 py-3 text-sm text-[#3f403f] outline-none focus:border-[#9fb8ad] disabled:bg-gray-100" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  }
                </label>

                <label class="flex cursor-pointer items-start justify-between gap-4 border border-[#ced0ce] bg-white p-4 transition-colors hover:border-[#9fb8ad]">
                  <div class="flex items-start gap-3">
                    <input type="radio" name="metodo_pago" value="Transferencia bancaria" [(ngModel)]="checkoutData.pago.metodo_pago" [disabled]="!authService.isAuthenticated" class="mt-1 h-4 w-4 accent-[#475841]" />
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-semibold text-[#3f403f]">Transferencia bancaria</span>
                        <span class="text-base">🏦</span>
                      </div>
                      <p class="mt-1 text-sm text-[#6b6d6b]">Recibirás los datos de la cuenta al confirmar tu pedido.</p>
                    </div>
                  </div>
                  <span class="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b6d6b]">Manual</span>
                </label>

                <label class="flex cursor-pointer items-start justify-between gap-4 border border-[#ced0ce] bg-white p-4 transition-colors hover:border-[#9fb8ad]">
                  <div class="flex items-start gap-3">
                    <input type="radio" name="metodo_pago" value="Pago contra entrega" [(ngModel)]="checkoutData.pago.metodo_pago" [disabled]="!authService.isAuthenticated" class="mt-1 h-4 w-4 accent-[#475841]" />
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-semibold text-[#3f403f]">Pago contra entrega</span>
                        <span class="text-base">🤝</span>
                      </div>
                      <p class="mt-1 text-sm text-[#6b6d6b]">Paga al recibir tu pedido en zonas seleccionadas de Lima.</p>
                    </div>
                  </div>
                  <span class="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b6d6b]">Disponible</span>
                </label>
              </div>
            </section>

            <div class="flex flex-col gap-3 border-t border-[#ced0ce] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <a routerLink="/carrito" class="inline-flex items-center justify-center gap-2 border border-[#ced0ce] bg-white px-5 py-3 text-sm font-semibold text-[#3f403f] transition-colors hover:bg-[#ced0ce]">
                <span>←</span>
                Volver al carrito
              </a>
              <button type="submit" [disabled]="!authService.isAuthenticated || loading || hasOutOfStockItems()" class="inline-flex items-center justify-center gap-2 border border-[#475841] bg-[#475841] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5b6d54] disabled:opacity-50">
                {{ loading ? 'Procesando...' : 'Confirmar y pagar' }}
                <span>→</span>
              </button>
            </div>
          </form>
        </div>

        <aside class="bg-[#f6f7f6] p-6 lg:p-8">
          <div class="sticky top-6 space-y-5">
            <div class="border border-[#ced0ce] bg-white">
              <div class="border-b border-[#ced0ce] px-5 py-4">
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Resumen de orden</p>
                <h2 class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]">Tu compra</h2>
              </div>
              <div class="divide-y divide-[#ced0ce]">
                @for (item of (cart$ | async)?.items || []; track item.productoId) {
                  <div class="flex gap-4 px-5 py-4">
                    <div class="flex h-16 w-16 items-center justify-center border border-[#ced0ce] bg-[#e6e8e6] text-[#475841]">
                      @if (item.producto?.imagen) {
                        <img [src]="item.producto.imagen" [alt]="item.producto.nombre" class="w-full h-full object-contain" />
                      } @else {
                        <span class="text-2xl">📦</span>
                      }
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <h3 class="text-sm font-semibold text-[#3f403f] line-clamp-1">{{ item.producto?.nombre }}</h3>
                          <p class="mt-1 text-xs text-[#6b6d6b]">Cant. {{ item.cantidad }}</p>
                        </div>
                        <p class="text-sm font-semibold text-[#475841]">S/.{{ item.subtotal | number:'1.2-2' }}</p>
                      </div>
                    </div>
                  </div>
                }
                <div class="px-5 py-4">
                  <div class="flex items-center justify-between gap-3 text-sm">
                    <span class="text-[#6b6d6b]">Envío</span>
                    @if ((cart$ | async)?.subtotalEnvios === 0) {
                      <span class="border border-[#9fb8ad] bg-[#eaf1ed] px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#475841]">GRATIS</span>
                    } @else {
                      <span class="font-semibold text-[#475841]">S/.{{ (cart$ | async)?.subtotalEnvios | number:'1.2-2' }}</span>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div class="border border-[#ced0ce] bg-white p-5">
              <div class="space-y-3 text-sm">
                <div class="flex items-center justify-between gap-3">
                  <span class="text-[#6b6d6b]">Subtotal sin IGV</span>
                  <span class="font-semibold text-[#3f403f]">S/.{{ getSubtotalSinIGV() | number:'1.2-2' }}</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <span class="text-[#6b6d6b]">IGV (18%)</span>
                  <span class="font-semibold text-[#3f403f]">S/.{{ getIGV() | number:'1.2-2' }}</span>
                </div>
                @if ((cart$ | async)?.descuentoCupon) {
                  <div class="flex items-center justify-between gap-3">
                    <span class="text-[#6b6d6b]">Descuento por cupón</span>
                    <span class="font-semibold text-[#475841]">- S/.{{ (cart$ | async)?.descuentoCupon | number:'1.2-2' }}</span>
                  </div>
                }
                <div class="border-t border-[#ced0ce] pt-3">
                  <div class="flex items-center justify-between gap-3">
                    <span class="text-base font-semibold text-[#3f403f]">Total a pagar</span>
                    <span class="text-2xl font-semibold tracking-tight text-[#475841]">S/.{{ (cart$ | async)?.total | number:'1.2-2' }}</span>
                  </div>
                  <p class="mt-2 text-xs leading-5 text-[#6b6d6b]">El subtotal corresponde al precio sin IGV. El total ya incluye el impuesto peruano.</p>
                </div>
              </div>
            </div>

            <div class="border border-[#ced0ce] bg-[#475841] p-5 text-[#e6e8e6]">
              <div class="flex items-start gap-3">
                <span class="text-lg">🛡</span>
                <div>
                  <p class="text-sm font-semibold">Compra protegida</p>
                  <p class="mt-1 text-sm leading-6 text-[#d7dbd7]">Tus datos se procesan en una pasarela segura y recibirás confirmación inmediata al completar el pago.</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `,
})
export class CheckoutPageComponent implements OnInit {
  cart$: Observable<CartState>;
  
  checkoutData = {
    envio: {
      nombre_completo: '',
      email: '',
      telefono: '',
      pais: 'Perú',
      region: 'Lima',
      ciudad: '',
      codigo_postal: '',
      direccion: '',
      numero: '',
      apartamento: '',
      metodo_envio: 'estándar'
    },
    pago: {
      metodo_pago: 'Tarjeta de crédito'
    }
  };

  tarjeta_dummy = {
    numero: '',
    titular: '',
    vencimiento: '',
    cvv: ''
  };

  loading = false;
  error = '';

  constructor(
    public readonly cartService: CartService,
    public readonly authService: AuthService,
    private readonly checkoutService: CheckoutService,
    private router: Router
  ) {
    this.cart$ = this.cartService.cart$;
  }

  ngOnInit() {
    if (!this.cartService.hasLocalCart() && this.cartService.snapshot.totalItems === 0) {
      this.router.navigate(['/']);
      return;
    }
    if (this.hasOutOfStockItems()) {
      this.router.navigate(['/carrito']);
    }
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

  onSubmit() {
    if (!this.authService.isAuthenticated) {
      this.error = 'Debes iniciar sesión para completar tu compra.';
      return;
    }

    if (this.hasOutOfStockItems()) {
      this.error = 'Hay productos agotados en tu carrito. Por favor, revísalos antes de continuar.';
      return;
    }

    this.loading = true;
    this.error = '';
    
    const payload = {
      envio: this.checkoutData.envio,
      pago: this.checkoutData.pago,
      couponCode: this.cartService.snapshot.cupon?.codigo || ''
    };

    this.checkoutService.placeOrder(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.cartService.loadCart(); // Vuelve a cargar el carrito para que aparezca vacío localmente
        this.router.navigate(['/confirmacion', res.ordenId]);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || 'Ocurrió un error al procesar tu compra. Por favor, intenta de nuevo.';
      }
    });
  }
}