import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CouponService {
  constructor(private readonly http: HttpClient) {}

  getActiveCoupons(): Observable<{ coupons: Array<{
    codigo: string;
    descripcion: string;
    tipo: 'porcentaje' | 'monto';
    valor: number;
    fechaInicio: string;
    fechaFin: string;
  }> }> {
    return this.http.get<{ coupons: Array<{
      codigo: string;
      descripcion: string;
      tipo: 'porcentaje' | 'monto';
      valor: number;
      fechaInicio: string;
      fechaFin: string;
    }> }>('/api/cupones/activos', { withCredentials: true });
  }
}