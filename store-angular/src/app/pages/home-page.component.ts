import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Category, PublicProduct, AuthUser } from '../models';
import { StoreApiService } from '../services/store-api.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { ProductCardComponent } from '../components/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  template: `
    <main class="relative mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
      <section class="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_0.8fr]">
        <div class="relative overflow-hidden border border-[#ced0ce] bg-[#475841] px-8 py-10 text-[#e6e8e6] lg:px-10 lg:py-12">
          <div class="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]"></div>
          <div class="relative max-w-2xl">
            <span class="inline-flex border border-[#9fb8ad] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#ced0ce]">Tecnología destacada</span>
            <h1 class="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Encuentra tu próxima compra inteligente en electrónica.</h1>
            <p class="mt-4 max-w-lg text-sm leading-6 text-[#d7dbd7] sm:text-base">Laptops, PCs, routers, parlantes y accesorios con ofertas reales, envíos rápidos y una experiencia de compra simple.</p>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <a routerLink="/producto/1" class="inline-flex items-center justify-center border border-[#9fb8ad] bg-[#9fb8ad] px-5 py-3 text-sm font-semibold text-[#475841] hover:bg-[#b5c8bf]">Comprar ahora</a>
              <a routerLink="/cupones" class="inline-flex items-center justify-center border border-[#9fb8ad] px-5 py-3 text-sm font-semibold text-[#e6e8e6] hover:bg-[#5a6c53]">Ver cupones</a>
            </div>
            <div class="mt-8 grid grid-cols-3 gap-px bg-[#70806a] border border-[#70806a] max-w-xl">
              <div class="bg-[#475841] px-4 py-4">
                <div class="text-xl font-semibold tracking-tight">+{{ totalProducts }}</div>
                <div class="mt-1 text-xs text-[#ced0ce]">Productos activos</div>
              </div>
              <div class="bg-[#475841] px-4 py-4">
                <div class="text-xl font-semibold tracking-tight">24h</div>
                <div class="mt-1 text-xs text-[#ced0ce]">Despacho promedio</div>
              </div>
              <div class="bg-[#475841] px-4 py-4">
                <div class="text-xl font-semibold tracking-tight">4.8/5</div>
                <div class="mt-1 text-xs text-[#ced0ce]">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="border border-[#ced0ce] bg-white p-6" *ngIf="coupon">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Cupón del día</p>
                <h2 class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]" *ngIf="coupon.tipo === 'monto'">Ahorra S/.{{ coupon.valor }}</h2>
                <h2 class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]" *ngIf="coupon.tipo === 'porcentaje'">Ahorra {{ coupon.valor }}%</h2>
              </div>
              <span class="text-xl text-[#475841]">🎟</span>
            </div>
            <p class="mt-3 text-sm leading-6 text-[#6b6d6b]">Usa el código <span class="font-semibold text-[#475841]">{{ coupon.codigo }}</span> en laptops y PCs seleccionadas.</p>
            <a class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#475841] hover:text-[#3f403f]">
              Aplicar cupón →
            </a>
          </div>
          <div class="border border-[#ced0ce] bg-white p-6" *ngIf="!coupon">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Cupón del día</p>
                <h2 class="mt-2 text-2xl font-semibold tracking-tight text-[#3f403f]">Sin cupón activo</h2>
              </div>
            </div>
            <p class="mt-3 text-sm leading-6 text-[#6b6d6b]">No hay cupón del día disponible.</p>
          </div>
          <div class="border border-[#ced0ce] bg-[#9fb8ad] p-6 text-[#475841]">
            <p class="text-xs font-bold uppercase tracking-[0.18em]">Categorías rápidas</p>
            <div class="mt-4 grid grid-cols-2 gap-px bg-[#7f968c] border border-[#7f968c] text-sm">
              <a *ngFor="let cat of categories" [routerLink]="['/']" [queryParams]="{ categoria: cat.id }" class="bg-[#e6e8e6] px-3 py-3 hover:bg-white">{{ cat.nombre }}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-10">
        <div class="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Productos destacados</p>
            <h2 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">Ofertas que sí provocan comprar</h2>
          </div>
          <a class="text-sm font-semibold text-[#475841] hover:text-[#3f403f]">Ver todos los productos</a>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <app-product-card *ngFor="let product of featuredProducts" [product]="product"></app-product-card>
        </div>
      </section>
    </main>
  `
})
export class HomePageComponent implements OnInit {
  categories: Category[] = [];
  featuredProducts: PublicProduct[] = [];
  coupon: { codigo: string; tipo: string; valor: number } | null = null;
  totalProducts = 0;
  loading = true;
  user: AuthUser | null = null;
  cartCount = 0;

  constructor(
    private readonly storeApi: StoreApiService,
    private readonly auth: AuthService,
    private readonly cart: CartService,
  ) { }

  ngOnInit(): void {
    this.auth.loadSession();
    this.user = this.auth.snapshot;
    this.auth.user$.subscribe((user) => {
      this.user = user;
    });

    this.cart.cart$.subscribe((cart) => {
      this.cartCount = cart.totalItems;
    });

    forkJoin({
      categories: this.storeApi.getCategories(),
      featured: this.storeApi.getFeaturedProducts(),
      coupon: this.storeApi.getCouponOfTheDay(),
    }).subscribe({
      next: ({ categories, featured, coupon }) => {
        this.categories = categories;
        this.featuredProducts = featured.productos.filter((p: PublicProduct) => p.disponible);
        this.coupon = coupon?.coupon || null;
        this.totalProducts = featured.productos.length > 0 ? 450 : featured.productos.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getUserName(): string {
    if (!this.user) return 'Iniciar sesión';
    const fullName = `${this.user.nombre} ${this.user.apellido || ''}`.replace(/\s/g, '');
    return fullName.length > 10 ? fullName.substring(0, 8) + '..' : fullName;
  }

  addToCart(product: PublicProduct): void {
    this.cart.addProduct(product);
  }

  logout(): void {
    this.auth.logout();
  }
}