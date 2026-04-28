import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthUser } from './models';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="min-h-screen bg-[#e6e8e6] text-[#3f403f]">
      <header class="border-b border-[#ced0ce] bg-[#e6e8e6]">
        <div class="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div class="flex items-center gap-8">
            <a routerLink="/" class="text-2xl font-semibold tracking-tight text-[#475841]">CompraEnUna</a>
            <nav class="hidden items-center gap-6 lg:flex">
              <a routerLink="/cupones" class="text-sm font-medium text-[#3f403f] hover:text-[#475841]">Cupones</a>
              @if (isAdmin) {
                <a href="/panel" class="text-sm font-medium text-[#475841] hover:underline">Admin</a>
              }
            </nav>
          </div>
          <div class="hidden flex-1 max-w-xl lg:flex">
          </div>
          <div class="flex items-center gap-3 sm:gap-4">
            <a routerLink="/mis-compras" class="relative inline-flex h-11 w-11 items-center justify-center border border-[#ced0ce] bg-white text-[#475841] hover:bg-[#ced0ce]" title="Mis compras">
              <span class="material-symbols-outlined">receipt_long</span>
            </a>
            <a routerLink="/carrito" class="relative inline-flex h-11 w-11 items-center justify-center border border-[#ced0ce] bg-white text-[#475841] hover:bg-[#ced0ce]">
              <span class="material-symbols-outlined">shopping_cart</span>
              <span *ngIf="cartCount > 0" class="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center border border-[#475841] bg-[#9fb8ad] px-1 text-[10px] font-bold text-[#475841]">{{ cartCount }}</span>
            </a>
            <div class="group relative hidden sm:block">
              <button class="inline-flex h-11 items-center gap-2 border border-[#ced0ce] bg-white px-4 text-sm font-medium text-[#3f403f] hover:bg-[#ced0ce]"
                      [routerLink]="user ? null : '/auth'">
                <span>👤</span>
                <span>{{ getDisplayName() }}</span>
                <span *ngIf="user">▼</span>
              </button>
              <div *ngIf="user" class="invisible absolute right-0 top-full z-20 mt-3 w-52 border border-[#ced0ce] bg-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div class="grid gap-px bg-[#ced0ce] p-px text-sm">
                  @if (isAdmin) {
                    <a href="/panel" class="bg-white px-4 py-3 hover:bg-[#e6e8e6]">Panel Admin</a>
                  }
                  <a routerLink="/mis-compras" class="bg-white px-4 py-3 hover:bg-[#e6e8e6]">Mis pedidos</a>
                  <a (click)="logout()" class="bg-white px-4 py-3 hover:bg-[#e6e8e6]">Cerrar sesión</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <router-outlet />
      </main>

      <footer class="mt-10 border-t border-[#ced0ce] bg-[#e6e8e6]">
        <div class="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <div class="text-xl font-semibold tracking-tight text-[#475841]">CompraEnUna</div>
            <p class="mt-3 max-w-xs text-sm leading-6 text-[#6b6d6b]">Tecnología para tu día a día con ofertas claras, compra segura y productos que sí te ayudan a rendir mejor.</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-[#475841]">Compra</h3>
            <div class="mt-3 grid gap-2 text-sm text-[#3f403f]">
              <a class="hover:text-[#475841]">Categorías</a>
              <a class="hover:text-[#475841]">Ofertas</a>
              <a class="hover:text-[#475841]">Cupones</a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-[#475841]">Ayuda</h3>
            <div class="mt-3 grid gap-2 text-sm text-[#3f403f]">
              <a class="hover:text-[#475841]">Centro de ayuda</a>
              <a class="hover:text-[#475841]">Envíos</a>
              <a class="hover:text-[#475841]">Devoluciones</a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-[#475841]">Síguenos</h3>
            <div class="mt-3 flex items-center gap-3 text-[#475841]">
              <a class="inline-flex h-10 w-10 items-center justify-center border border-[#ced0ce] bg-white hover:bg-[#ced0ce]">f</a>
              <a class="inline-flex h-10 w-10 items-center justify-center border border-[#ced0ce] bg-white hover:bg-[#ced0ce]">in</a>
              <a class="inline-flex h-10 w-10 items-center justify-center border border-[#ced0ce] bg-white hover:bg-[#ced0ce]">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  user: AuthUser | null = null;
  showDropdown = false;
  cartCount = 0;

  constructor(
    private readonly auth: AuthService,
    private readonly cart: CartService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.auth.loadSession();
    this.user = this.auth.snapshot;
    this.auth.user$.subscribe((user) => {
      this.user = user;
    });
    this.cart.loadCart();
    this.cart.cart$.subscribe(cart => {
      this.cartCount = cart.totalItems;
    });
  }

  get isAdmin(): boolean {
    return this.user?.rol === 'administrativo';
  }

  getDisplayName(): string {
    if (!this.user) return 'Iniciar sesión';
    const fullName = `${this.user.nombre} ${this.user.apellido || ''}`.replace(/\s/g, '');
    return fullName.length > 10 ? fullName.substring(0, 8) + '..' : fullName;
  }

  logout(event?: Event): void {
    if (event) event.preventDefault();
    this.auth.logout().subscribe({
      next: () => {
        this.auth.setUser(null);
      },
    });
  }
}