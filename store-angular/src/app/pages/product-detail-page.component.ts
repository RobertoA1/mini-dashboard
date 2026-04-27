import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductDetailResponse, PublicProduct, Category, Proveedor } from '../models';
import { StoreApiService } from '../services/store-api.service';
import { CartService } from '../services/cart.service';
import { ProductCardComponent } from '../components/product-card.component';
import { RelatedProductsComponent } from '../components/related-products.component';

interface ProductImage {
  id: number;
  url: string;
  tipo: string;
  orden: number;
}

interface ProductAttribute {
  id: number;
  clave: string;
  valor: string;
  orden: number;
}

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ProductCardComponent, RelatedProductsComponent],
  template: `
    <main class="mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-10 lg:py-10">
      <!-- Breadcrumbs -->
      <nav class="flex items-center text-sm text-[#6b6d6b] mb-6">
        <a routerLink="/" class="hover:text-[#475841] transition-colors cursor-pointer">Inicio</a>
        <span class="mx-2">›</span>
        <a *ngIf="product?.categoria" (click)="filterByCategory()" class="hover:text-[#475841] transition-colors cursor-pointer">{{ product?.categoria?.nombre }}</a>
        <span *ngIf="product?.categoria" class="mx-2">›</span>
        <span class="text-[#3f403f] font-medium">{{ product?.nombre }}</span>
      </nav>

      <section *ngIf="loading" class="border border-[#ced0ce] bg-white p-8 text-center">
        <p class="text-[#6b6d6b]">Cargando detalle...</p>
      </section>

      <section *ngIf="error && !loading" class="border border-[#ced0ce] bg-white p-8 text-center">
        <p class="text-red-600">{{ error }}</p>
      </section>

      <ng-container *ngIf="product && !loading">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Image Gallery Section -->
          <div class="lg:col-span-7 flex flex-col gap-4">
            <!-- Main Image -->
            <div class="w-full aspect-video md:aspect-[4/3] border border-[#ced0ce] bg-white rounded overflow-hidden flex items-center justify-center">
              @if (product.imagen){
                <img [src]="product.imagen" [alt]="product.nombre" class="w-full h-full object-contain" />
              }
              @else {
                <span class="text-6xl text-[#475841]">📦</span>
              }
            </div>
            <!-- Thumbnails -->
            <div class="flex gap-4 overflow-x-auto" *ngIf="images.length > 1">
              @for (img of images; track img.id) {
                <button 
                  (click)="selectImage(img)"
                  class="flex-shrink-0 w-24 h-24 border-2 rounded overflow-hidden flex items-center justify-center transition-colors"
                  [class.border-[#475841]="selectedImage?.id === img.id"
                [class.border-[#ced0ce]="selectedImage?.id !== img.id"
                [class.hover:border-[#475841]]="selectedImage?.id !== img.id">
                <img [src]="img.url" [alt]="product.nombre" class="w-full h-full object-cover">
              </button>
              }
            </div>
          </div>

          <!-- Product Details Section -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <!-- Title & Price -->
            <div class="flex flex-col gap-2">
              <p *ngIf="cantidadVendidos > 0" class="text-sm text-[#6b6d6b]">{{ cantidadVendidos }} vendidos</p>
              <h1 class="text-3xl font-semibold tracking-tight text-[#3f403f]">{{ product.nombre }}</h1>
              <div class="mt-2 flex items-baseline gap-3">
                <span class="text-3xl font-semibold text-[#475841]">S/.{{ product.precio_descuento | number:'1.2-2' }}</span>
                <span *ngIf="product.descuento_tipo" class="text-lg text-[#6b6d6b] line-through">S/.{{ product.precio_venta }}</span>
                <span *ngIf="product.descuento_tipo === 'porcentaje'" class="bg-[#eaf1ed] text-[#475841] text-xs font-bold px-2 py-1">Ahorra {{ product.descuento_valor }}%</span>
              </div>
              <p *ngIf="product.cuotas_sin_interes" class="text-sm text-[#6b6d6b] mt-1">
                Hasta {{ product.cuotas }} cuotas sin interés de S/.{{ product.cuotas_mensual | number:'1.2-2' }}
              </p>
            </div>

            <!-- Delivery Status -->
            <div class="border border-[#ced0ce] bg-[#f8f9f8] rounded p-4 flex items-start gap-3">
              <span class="text-xl text-[#475841]">🚚</span>
              <div>
                <p class="text-lg font-semibold text-[#3f403f]">
                  <span *ngIf="product.envio_gratis">Llega </span>
                  <span *ngIf="!product.envio_gratis">Llega entre el </span>
                  <span *ngIf="product.envio_gratis">GRATIS</span>
                  <span *ngIf="product.envio_gratis"> entre el </span>
                  {{ freeShippingFrom }} y el {{ freeShippingTo }}
                </p>
                <p class="text-sm text-[#6b6d6b]">Vendido por CompraEnUna</p>
              </div>
            </div>

            <!-- Dynamic Technical Specs (Bento Grid Style) -->
            <div class="grid grid-cols-2 gap-3" *ngIf="attributes.length > 0">
              <div *ngFor="let attr of attributes" class="border border-[#ced0ce] bg-white rounded p-4 flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-[#6b6d6b]">{{ attr.clave }}</span>
                <span class="text-sm text-[#3f403f]">{{ attr.valor }}</span>
              </div>
            </div>

            <!-- Stock -->
            <div class="flex items-center gap-2 text-sm">
              @if (product.disponible && product.stock_actual > 0) {
                <span class="inline-flex items-center gap-1.5 text-[#475841]">
                  <span class="material-symbols-outlined text-[18px]">inventory_2</span>
                  Stock disponible: {{ product.stock_actual }}
                </span>
              } @else {
                <span class="inline-flex items-center gap-1.5 text-red-600 font-medium">
                  <span class="material-symbols-outlined text-[18px]">block</span>
                  Agotado
                </span>
              }
            </div>

            <!-- Quantity -->
            <div class="flex items-center gap-3">
              <label class="text-sm font-medium text-[#3f403f]">Cantidad:</label>
              <select [(ngModel)]="cantidad" (change)="onCantidadChange()" [disabled]="!product.disponible" class="border border-[#ced0ce] bg-white px-4 py-2 text-sm rounded disabled:opacity-50 disabled:cursor-not-allowed">
                @for (q of quantityOptions; track q) {
                  <option [value]="q">{{ q }} {{ q === 1 ? 'unidad' : 'unidades' }}</option>
                }
              </select>
            </div>

            <!-- Actions -->
            <div class="flex flex-col gap-3">
              <button (click)="addToCart()" [disabled]="!product.disponible" class="bg-[#475841] text-white hover:bg-[#5b6d54] disabled:opacity-50 disabled:cursor-not-allowed text-lg w-full h-12 rounded flex items-center justify-center transition-colors">
                {{ product.disponible ? 'Añadir al Carrito' : 'Producto agotado' }}
              </button>
              <button class="bg-transparent border border-[#475841] text-[#475841] hover:bg-[#e6e8e6] text-sm w-full h-11 rounded flex items-center justify-center transition-colors gap-2">
                <span>♡</span>
                Guardar para después
              </button>
            </div>

            <!-- Payment Methods -->
            <div class="flex items-center gap-3 pt-4 border-t border-[#ced0ce]">
              <span class="text-sm text-[#6b6d6b]">Pago seguro con:</span>
              <div class="flex gap-2">
                <div class="w-10 h-6 border border-[#ced0ce] bg-white rounded flex items-center justify-center text-[10px] font-bold text-[#6b6d6b]">VISA</div>
                <div class="w-10 h-6 border border-[#ced0ce] bg-white rounded flex items-center justify-center text-[10px] font-bold text-[#6b6d6b]">MC</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Description Section -->
        <div class="mt-10 border-t border-[#ced0ce] pt-10">
          <h2 class="text-2xl font-semibold tracking-tight text-[#3f403f] mb-4">Descripción del Producto</h2>
          <div class="prose max-w-none text-sm text-[#6b6d6b] flex flex-col gap-4">
            <p>{{ product.descripcion }}</p>
          </div>
        </div>

        <!-- Related Products -->
        <app-related-products [products]="relatedProducts"></app-related-products>
      </ng-container>
    </main>
  `
})
export class ProductDetailPageComponent implements OnInit {
  loading = true;
  error = '';
  product: PublicProduct | null = null;
  relatedProducts: PublicProduct[] = [];
  images: ProductImage[] = [];
  attributes: ProductAttribute[] = [];
  cantidad = 1;
  selectedImage: ProductImage | null = null;
  cantidadVendidos = 0;
  quantityOptions: number[] = [1];

  freeShippingFrom = '';
  freeShippingTo = '';

  private today = new Date();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly storeApi: StoreApiService,
    private readonly cart: CartService,
  ) {
    this.calculateShippingDates();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.selectedImage = null;
        this.cantidad = 1;
        this.loadProduct(+id);
        window.scrollTo(0, 0);
      } else {
        this.error = 'ID de producto no válido';
        this.loading = false;
      }
    });
  }

  calculateShippingDates(): void {
    const from = new Date(this.today);
    const to = new Date(this.today);
    from.setDate(from.getDate() + 3);
    to.setDate(to.getDate() + 5);
    this.freeShippingFrom = from.toLocaleDateString('es-PE', { day: 'numeric', month: 'short' });
    this.freeShippingTo = to.toLocaleDateString('es-PE', { day: 'numeric', month: 'short' });
  }

  loadProduct(id: number): void {
    this.loading = true;
    this.storeApi.getProductById(id.toString()).subscribe({
      next: (res: any) => {
        this.product = res.product;
        this.images = res.images || [];
        this.attributes = res.attributes || [];
        this.relatedProducts = res.relatedProducts || [];
        this.cantidadVendidos = res.product?.cantidad_vendidos || 0;
        const stock = Number(res.product?.stock_actual ?? 0);
        this.quantityOptions = Array.from({ length: Math.min(10, Math.max(1, stock)) }, (_, i) => i + 1);
        if (this.images.length > 0) {
          const mainImage = this.images.find(img => img.orden === 0) || this.images.reduce((min, img) => img.orden < min.orden ? img : min, this.images[0]);
          this.selectedImage = mainImage;
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Error cargando producto';
        this.loading = false;
      },
    });
  }

  selectImage(img: ProductImage): void {
    this.selectedImage = img;
  }

  filterByBrand(): void {
    if (this.product?.proveedor) {
      this.router.navigate(['/'], { queryParams: { marca: this.product.proveedor.id } });
    }
  }

  filterByCategory(): void {
    if (this.product?.categoria) {
      this.router.navigate(['/'], { queryParams: { categoria: this.product.categoria.id } });
    }
  }

  onCantidadChange(): void { }

  addToCart(): void {
    if (this.product) {
      this.cart.addProduct(this.product, Number(this.cantidad));
      this.router.navigate(['/carrito']);
    }
  }

  buyNow(): void {
    this.addToCart();
    this.router.navigate(['/checkout']);
  }
}