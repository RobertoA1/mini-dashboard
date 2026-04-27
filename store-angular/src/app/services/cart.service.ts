import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { StoreApiService } from './store-api.service';
import { CartState, PublicProduct } from '../models';

type LocalCartItem = {
  productoId: number;
  cantidad: number;
  producto?: PublicProduct;
};

const STORAGE_KEY = 'mini-dashboard-cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly stateSubject = new BehaviorSubject<CartState>({
    items: [],
    totalItems: 0,
    subtotalProductos: 0,
    subtotalEnvios: 0,
    descuentoCupon: 0,
    cupon: null,
    total: 0,
  });
  readonly cart$ = this.stateSubject.asObservable();
  private readonly errorSubject = new BehaviorSubject<string>('');
  readonly error$ = this.errorSubject.asObservable();
  private couponCode = '';

  constructor(
    private readonly api: StoreApiService,
    private readonly auth: AuthService,
  ) {
    this.auth.user$.subscribe(() => {
      this.loadCart();
    });
  }

  get snapshot(): CartState {
    return this.stateSubject.value;
  }

  loadCart(): void {
    if (this.auth.isAuthenticated) {
      this.api.getCart(this.couponCode).subscribe({
        next: (cart) => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: () => this.errorSubject.next('No se pudo cargar el carrito.'),
      });
      return;
    }

    this.calculateLocalCart();
  }

  setCoupon(code: string): void {
    this.couponCode = code.trim().toUpperCase();
  }

  applyCoupon(code: string): void {
    const normalized = code.trim().toUpperCase();
    if (!normalized) {
      this.couponCode = '';
      this.errorSubject.next('');
      this.recalculate();
      return;
    }

    const monto = this.snapshot.subtotalProductos + this.snapshot.subtotalEnvios;
    this.api.validateCoupon({ codigo: normalized, monto }).subscribe({
      next: () => {
        this.couponCode = normalized;
        this.errorSubject.next('');
        this.recalculate();
      },
      error: (error) => {
        this.errorSubject.next(error.error?.error || 'Cupón inválido o vencido.');
      },
    });
  }

  addProduct(product: PublicProduct, cantidad: number = 1): void {
    if (this.auth.isAuthenticated) {
      this.api.addCartItem({ productoId: product.id, cantidad, couponCode: this.couponCode }).subscribe({
        next: (cart) => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: (error) => this.errorSubject.next(error.error?.error || 'No se pudo agregar el producto.'),
      });
      return;
    }

    const items = this.readLocalItems();
    const prodId = Number(product.id);
    const existing = items.find((item) => item.productoId === prodId);
    if (existing) {
      existing.cantidad += cantidad;
    } else {
      items.push({ productoId: prodId, cantidad, producto: product });
    }

    this.saveLocalItems(items);
    this.calculateLocalCart();
  }

  updateQuantity(productoId: number, cantidad: number): void {
    if (this.auth.isAuthenticated) {
      this.api.updateCartItem(productoId, { cantidad, couponCode: this.couponCode }).subscribe({
        next: (cart) => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: (error) => this.errorSubject.next(error.error?.error || 'No se pudo actualizar el carrito.'),
      });
      return;
    }

    let items = this.readLocalItems();
    const aggregated = new Map<number, LocalCartItem>();
    for (const entry of items) {
      const pid = Number(entry.productoId);
      if (!aggregated.has(pid)) {
        aggregated.set(pid, { ...entry, productoId: pid });
      } else {
        aggregated.get(pid)!.cantidad += Number(entry.cantidad);
      }
    }
    items = Array.from(aggregated.values());

    const item = items.find((entry) => entry.productoId === productoId);
    if (!item) return;

    if (cantidad <= 0) {
      this.saveLocalItems(items.filter((entry) => entry.productoId !== productoId));
    } else {
      item.cantidad = cantidad;
      this.saveLocalItems(items);
    }

    this.calculateLocalCart();
  }

  removeProduct(productoId: number): void {
    if (this.auth.isAuthenticated) {
      this.api.removeCartItem(productoId, this.couponCode).subscribe({
        next: (cart) => {
          this.errorSubject.next('');
          this.stateSubject.next(cart);
        },
        error: (error) => this.errorSubject.next(error.error?.error || 'No se pudo eliminar el producto.'),
      });
      return;
    }

    this.saveLocalItems(this.readLocalItems().filter((entry) => Number(entry.productoId) !== Number(productoId)));
    this.calculateLocalCart();
  }

  hasLocalCart(): boolean {
    return this.readLocalItems().length > 0;
  }

  importLocalCart(): void {
    if (!this.auth.isAuthenticated) return;

    const items = this.readLocalItems().map((item) => ({ productoId: item.productoId, cantidad: item.cantidad }));
    if (!items.length) return;

    this.api.importCart({ items, couponCode: this.couponCode }).subscribe({
      next: (cart) => {
        this.clearLocalCart();
        this.errorSubject.next('');
        this.stateSubject.next(cart);
      },
      error: (error) => {
        this.errorSubject.next(error.error?.error || 'No se pudo importar el carrito.');
      },
    });
  }

  private recalculate(): void {
    if (this.auth.isAuthenticated) {
      this.loadCart();
      return;
    }
    this.calculateLocalCart();
  }

  private calculateLocalCart(): void {
    const items = this.readLocalItems().map((item) => ({ productoId: item.productoId, cantidad: item.cantidad }));
    this.api.calculateCart({ items, couponCode: this.couponCode }).subscribe({
      next: (cart) => {
        this.errorSubject.next('');
        this.stateSubject.next(cart);
      },
      error: (error) => this.errorSubject.next(error.error?.error || 'No se pudo calcular el carrito.'),
    });
  }

  private readLocalItems(): LocalCartItem[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    try {
      const parsed = JSON.parse(raw) as LocalCartItem[];
      return parsed
        .map((item) => ({
          productoId: Number(item.productoId),
          cantidad: Math.max(Number(item.cantidad || 1), 1),
          producto: item.producto,
        }))
        .filter((item) => Number.isFinite(item.productoId));
    } catch {
      return [];
    }
  }

  private saveLocalItems(items: LocalCartItem[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  private clearLocalCart(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  private emptyState(): CartState {
    return {
      items: [],
      totalItems: 0,
      subtotalProductos: 0,
      subtotalEnvios: 0,
      descuentoCupon: 0,
      cupon: null,
      total: 0,
    };
  }
}
