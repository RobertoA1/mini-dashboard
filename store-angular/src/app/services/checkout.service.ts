import { Injectable } from '@angular/core';
import { StoreApiService } from './store-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private readonly api: StoreApiService) {}

  placeOrder(checkoutData: any): Observable<any> {
    return this.api.placeOrder(checkoutData);
  }
}
