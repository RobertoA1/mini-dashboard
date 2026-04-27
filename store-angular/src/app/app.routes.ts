import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { CatalogPageComponent } from './pages/catalog-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page.component';
import { AuthPageComponent } from './pages/auth-page.component';
import { CartPageComponent } from './pages/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page.component';
import { PurchasesPageComponent } from './pages/purchases-page.component';
import { ProfilePageComponent } from './pages/profile-page.component';
import { OrderConfirmationPageComponent } from './pages/order-confirmation-page.component';
import { CouponsPageComponent } from './pages/coupons-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'CompraEnUna - Tecnología y más' },
  { path: 'tienda', component: HomePageComponent, title: 'CompraEnUna - Tienda' },
  { path: 'auth', component: AuthPageComponent, title: 'Ingresar' },
  { path: 'carrito', component: CartPageComponent, title: 'Carrito' },
  { path: 'checkout', component: CheckoutPageComponent, title: 'Continuar compra' },
  { path: 'confirmacion/:id', component: OrderConfirmationPageComponent, title: 'Pedido confirmado' },
  { path: 'cupones', component: CouponsPageComponent, title: 'Cupones' },
  { path: 'producto/:id', component: ProductDetailPageComponent, title: 'Detalle de producto' },
  { path: 'mis-compras', component: PurchasesPageComponent, title: 'Mis Compras' },
  { path: 'cuenta', component: ProfilePageComponent, title: 'Mi Cuenta' },
  { path: '**', redirectTo: '' },
];
