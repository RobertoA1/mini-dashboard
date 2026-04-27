import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthUser } from '../models';
import { StoreApiService } from './store-api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSubject = new BehaviorSubject<AuthUser | null>(null);
  readonly user$ = this.userSubject.asObservable();
  
  private readonly sessionLoadedSubject = new ReplaySubject<boolean>(1);
  readonly sessionLoaded$ = this.sessionLoadedSubject.asObservable();

  constructor(private readonly api: StoreApiService) {}

  get snapshot(): AuthUser | null {
    return this.userSubject.value;
  }

  get isAuthenticated(): boolean {
    return Boolean(this.userSubject.value);
  }

  get isAdmin(): boolean {
    return this.userSubject.value?.rol === 'administrativo';
  }

  loadSession(): void {
    this.api.getCurrentSession().subscribe({
      next: (response) => {
        this.userSubject.next(response.user);
        this.sessionLoadedSubject.next(true);
      },
      error: () => {
        this.userSubject.next(null);
        this.sessionLoadedSubject.next(true);
      },
    });
  }

  register(payload: { nombre: string; apellido?: string; correo: string; password: string; direccion?: string }) {
    return this.api.register(payload);
  }

  login(payload: { correo: string; password: string }) {
    return this.api.login(payload);
  }

  logout() {
    return this.api.logout();
  }

  setUser(user: AuthUser | null): void {
    this.userSubject.next(user);
  }
}
