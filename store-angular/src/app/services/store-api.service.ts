import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AuthUser,
  CartState,
  Category,
  ProductDetailResponse,
  ProductListResponse,
  PublicProduct,
} from '../models';

@Injectable({ providedIn: 'root' })
export class StoreApiService {
  constructor(private readonly http: HttpClient) { }

  getCatalog(filters: { search?: string; categoria?: string; page?: number; limit?: number; }): Observable<ProductListResponse> {
    let params = new HttpParams();

    if (filters.page) params = params.set('page', String(filters.page));
    if (filters.limit) params = params.set('limit', String(filters.limit));
    if (filters.search) params = params.set('search', filters.search);
    if (filters.categoria) params = params.set('categoria', filters.categoria);

    return this.http.get<ProductListResponse>('/api/productos/public', { params, withCredentials: true });
  }

  getProductById(id: string): Observable<ProductDetailResponse> {
    return this.http.get<ProductDetailResponse>(`/api/productos/public/${id}`, { withCredentials: true });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categorias/all', { withCredentials: true });
  }

  getCurrentSession(): Observable<{ user: AuthUser | null }> {
    return this.http.get<{ user: AuthUser | null }>('/api/auth/me', { withCredentials: true });
  }

  register(payload: { nombre: string; apellido?: string; correo: string; password: string; direccion?: string }): Observable<{ user: AuthUser }> {
    return this.http.post<{ user: AuthUser }>('/api/auth/register', payload, { withCredentials: true });
  }

  login(payload: { correo: string; password: string }): Observable<{ user: AuthUser }> {
    return this.http.post<{ user: AuthUser }>('/api/auth/login', payload, { withCredentials: true });
  }

  logout(): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('/api/auth/logout', {}, { withCredentials: true });
  }

  getCart(couponCode = ''): Observable<CartState> {
    const options: { withCredentials: boolean; params?: HttpParams } = { withCredentials: true };
    if (couponCode) {
      options.params = new HttpParams().set('couponCode', couponCode);
    }

    return this.http.get<CartState>('/api/carrito', options);
  }

  calculateCart(payload: { items: Array<{ productoId: number; cantidad: number }>; couponCode?: string }): Observable<CartState> {
    return this.http.post<CartState>('/api/carrito/calcular', payload, { withCredentials: true });
  }

  addCartItem(payload: { productoId: number; cantidad: number; couponCode?: string }): Observable<CartState> {
    return this.http.post<CartState>('/api/carrito/items', payload, { withCredentials: true });
  }

  updateCartItem(productoId: number, payload: { cantidad: number; couponCode?: string }): Observable<CartState> {
    return this.http.patch<CartState>(`/api/carrito/items/${productoId}`, payload, { withCredentials: true });
  }

  removeCartItem(productoId: number, couponCode = ''): Observable<CartState> {
    return this.http.request<CartState>('DELETE', `/api/carrito/items/${productoId}`, {
      withCredentials: true,
      body: { couponCode },
    });
  }

  importCart(payload: { items: Array<{ productoId: number; cantidad: number }>; couponCode?: string }): Observable<CartState> {
    return this.http.post<CartState>('/api/carrito/import', payload, { withCredentials: true });
  }

  validateCoupon(payload: { codigo: string; monto: number }): Observable<{ coupon: { codigo: string; tipo: 'porcentaje' | 'monto'; valor: number }; discount: number }> {
    return this.http.post<{ coupon: { codigo: string; tipo: 'porcentaje' | 'monto'; valor: number }; discount: number }>(
      '/api/cupones/validar',
      payload,
      { withCredentials: true },
    );
  }

  getPurchases(): Observable<{ compras: Array<{ id: number; productoId: number; nombre: string; descripcion: string; imagen: string | null; precio: number; cantidad: number; fechaCompra: string }> }> {
    return this.http.get<{ compras: Array<{ id: number; productoId: number; nombre: string; descripcion: string; imagen: string | null; precio: number; cantidad: number; fechaCompra: string }> }>('/api/compras', { withCredentials: true });
  }

  createPurchase(payload: { productoId: number; cantidad: number }): Observable<{ compra: { id: number } }> {
    return this.http.post<{ compra: { id: number } }>('/api/compras', payload, { withCredentials: true });
  }

  getUserProfile(): Observable<{ profile: { id: number; nombre: string; apellido: string | null; correo: string; direccion: string | null; rol: string; fechaCreacion: string } }> {
    return this.http.get<{ profile: { id: number; nombre: string; apellido: string | null; correo: string; direccion: string | null; rol: string; fechaCreacion: string } }>('/api/auth/profile', { withCredentials: true });
  }

  getFeaturedProducts(): Observable<{ productos: PublicProduct[] }> {
    return this.http.get<{ productos: PublicProduct[] }>('/api/productos/destacados', { withCredentials: true });
  }

  getCouponOfTheDay(): Observable<{ coupon: { codigo: string; tipo: string; valor: number } | null }> {
    return this.http.get<{ coupon: { codigo: string; tipo: string; valor: number } | null }>('/api/cupones/dia', { withCredentials: true });
  }

  placeOrder(payload: any): Observable<any> {
    return this.http.post<any>('/api/checkout', payload, { withCredentials: true });
  }

  getOrderById(id: string): Observable<any> {
    return this.http.get<any>(`/api/orders/${id}`, { withCredentials: true });
  }

  getUserOrders(): Observable<{ ordenes: any[] }> {
    return this.http.get<{ ordenes: any[] }>('/api/orders', { withCredentials: true });
  }
}
