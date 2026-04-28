import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

type AuthView = 'login' | 'register-step1' | 'register-step2';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="border border-[#ced0ce] bg-white">
      <div class="p-6 lg:p-8 xl:p-10">
        <!-- Header -->
        <div class="flex flex-col gap-5 border-b border-[#ced0ce] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#475841]">Cuenta</p>
            <h1 class="mt-2 text-3xl font-semibold tracking-tight text-[#3f403f]">
              {{ view === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta' }}
            </h1>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-[#6b6d6b]">
              {{ view === 'login' ? 'Accede a tu cuenta para continuar con tus compras.' : 'Únete para una experiencia de compra personalizada.' }}
            </p>
          </div>
        </div>

        <!-- Content -->
        <div class="mt-6">
          <!-- VIEW: LOGIN -->
          @if (view === 'login') {
            <div class="mx-auto w-full max-w-md border border-[#ced0ce] bg-[#f8f9f8] p-6 lg:p-8">
              <form class="flex flex-col gap-5" (ngSubmit)="login()">
                @if (error) {
                  <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined">error</span>
                      {{ error }}
                    </div>
                  </div>
                }
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="emailLogin">Correo Electrónico</label>
                  <input class="h-11 border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="emailLogin" name="emailLogin" [(ngModel)]="loginModel.correo" placeholder="tu@correo.com" required type="email" />
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="passwordLogin">Contraseña</label>
                    <a class="text-xs text-[#475841] hover:underline" href="javascript:void(0)">¿Olvidaste tu contraseña?</a>
                  </div>
                  <input class="h-11 border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="passwordLogin" name="passwordLogin" [(ngModel)]="loginModel.password" placeholder="••••••••" required type="password" />
                </div>
                <div class="flex flex-col gap-3 mt-2">
                  <button class="h-11 border border-[#475841] bg-[#475841] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#5b6d54] disabled:opacity-50"
                          type="submit" [disabled]="loading">
                    {{ loading ? 'Ingresando...' : 'Iniciar Sesión' }}
                  </button>
                  <button class="h-11 border border-[#ced0ce] bg-white px-4 text-sm font-semibold text-[#3f403f] transition-colors hover:bg-[#ced0ce] disabled:opacity-50"
                          type="button" (click)="setView('register-step1')" [disabled]="loading">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          }

          <!-- VIEW: REGISTER STEP 1 -->
          @if (view === 'register-step1') {
            <div class="mx-auto w-full max-w-md border border-[#ced0ce] bg-[#f8f9f8] p-6 lg:p-8">
              <!-- Progress Indicator -->
              <div class="mb-6 pb-6 border-b border-[#ced0ce]">
                <div class="flex justify-between items-center mb-3">
                  <span class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]">Paso 1 de 2</span>
                  <span class="text-xs text-[#6b6d6b]">Acceso</span>
                </div>
                <div class="w-full h-1 bg-[#ced0ce] flex overflow-hidden">
                  <div class="h-full bg-[#475841] w-1/2"></div>
                </div>
              </div>
              <!-- Form -->
              <form class="flex flex-col gap-5" (ngSubmit)="goToStep2()">
                @if (error) {
                  <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined">error</span>
                      {{ error }}
                    </div>
                  </div>
                }
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="emailReg">Correo electrónico</label>
                  <input class="h-11 w-full border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="emailReg" name="emailReg" [(ngModel)]="registerModel.correo" placeholder="tu@email.com" required type="email" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="passwordReg">Contraseña</label>
                  <input class="h-11 w-full border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="passwordReg" name="passwordReg" [(ngModel)]="registerModel.password" placeholder="••••••••" required type="password" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="passwordConfirm">Confirmar contraseña</label>
                  <input class="h-11 w-full border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="passwordConfirm" name="passwordConfirm" [(ngModel)]="registerModel.confirmPassword" placeholder="••••••••" required type="password" />
                </div>
                <div class="pt-2">
                  <button class="h-11 w-full border border-[#475841] bg-[#475841] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#5b6d54]"
                          type="submit">
                    Continuar
                  </button>
                </div>
              </form>
              <div class="mt-6 pt-6 border-t border-[#ced0ce] text-center">
                <p class="text-sm text-[#6b6d6b]">
                  ¿Ya tienes una cuenta?
                  <a href="javascript:void(0)" class="font-semibold text-[#475841] hover:underline" (click)="setView('login')">Iniciar sesión</a>
                </p>
              </div>
            </div>
          }

          <!-- VIEW: REGISTER STEP 2 -->
          @if (view === 'register-step2') {
            <div class="mx-auto w-full max-w-md border border-[#ced0ce] bg-[#f8f9f8] p-6 lg:p-8">
              <!-- Progress Indicator -->
              <div class="mb-6 pb-6 border-b border-[#ced0ce]">
                <div class="flex justify-between items-center mb-3">
                  <span class="text-xs font-bold uppercase tracking-[0.12em] text-[#6b6d6b]">Paso 2 de 2</span>
                  <span class="text-xs font-bold uppercase tracking-[0.12em] text-[#475841]">Datos Personales</span>
                </div>
                <div class="flex gap-1 w-full h-1">
                  <div class="w-1/2 bg-[#475841]"></div>
                  <div class="w-1/2 bg-[#475841]"></div>
                </div>
              </div>
              <!-- Form -->
              <form class="flex flex-col gap-5" (ngSubmit)="finishRegistration()">
                @if (error) {
                  <div class="border border-red-500 bg-red-50 p-4 text-sm text-red-700">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined">error</span>
                      {{ error }}
                    </div>
                  </div>
                }
                <!-- Nombres -->
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="firstNames">Nombres completos</label>
                  <input class="h-11 border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="firstNames" name="firstNames" [(ngModel)]="registerModel.nombre" placeholder="Ej. Juan Carlos" required type="text" />
                </div>
                <!-- Apellidos -->
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="surnames">Apellidos completos</label>
                  <input class="h-11 border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="surnames" name="surnames" [(ngModel)]="registerModel.apellido" placeholder="Ej. Pérez Gómez" required type="text" />
                </div>
                <!-- Dirección (Opcional) -->
                <div class="flex flex-col gap-2">
                  <div class="flex justify-between items-baseline">
                    <label class="text-xs font-bold uppercase tracking-[0.12em] text-[#3f403f]" for="address">Dirección</label>
                    <span class="text-xs text-[#6b6d6b]">Opcional</span>
                  </div>
                  <input class="h-11 border border-[#ced0ce] bg-white px-3 text-sm text-[#3f403f] focus:border-[#475841] focus:outline-none transition-colors"
                         id="address" name="address" [(ngModel)]="registerModel.direccion" placeholder="Ingresa tu dirección de envío" type="text" />
                  <p class="text-xs text-[#6b6d6b] mt-1">Puedes colocar la dirección después (se le pedirá en cada pedido).</p>
                </div>
                <!-- Actions -->
                <div class="flex gap-3 mt-2 pt-4 border-t border-[#ced0ce]">
                  <button class="flex-1 h-11 border border-[#ced0ce] bg-white px-4 text-sm font-semibold text-[#3f403f] transition-colors hover:bg-[#ced0ce] disabled:opacity-50"
                          type="button" (click)="setView('register-step1')" [disabled]="loading">
                    Atrás
                  </button>
                  <button class="flex-[2] h-11 border border-[#475841] bg-[#475841] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#5b6d54] disabled:opacity-50"
                          type="submit" [disabled]="loading">
                    {{ loading ? 'Finalizando...' : 'Finalizar Registro' }}
                  </button>
                </div>
              </form>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AuthPageComponent implements OnInit {
  view: AuthView = 'login';
  
  loginModel = { correo: '', password: '' };
  
  registerModel = { 
    correo: '', 
    password: '', 
    confirmPassword: '', 
    nombre: '', 
    apellido: '', 
    direccion: '' 
  };
  
  error = '';
  loading = false;

  constructor(
    private readonly auth: AuthService,
    private readonly cart: CartService,
    private readonly router: Router,
    private readonly location: Location
  ) {}

  ngOnInit() {
    // Si el usuario ya está autenticado, no tiene sentido que vea esta página.
    if (this.auth.isAuthenticated) {
      this.goBack();
    }
  }

  setView(newView: AuthView) {
    this.error = '';
    this.view = newView;
  }

  login(): void {
    if (!this.loginModel.correo || !this.loginModel.password) {
      this.error = 'Debes llenar todos los campos.';
      return;
    }
    
    this.error = '';
    this.loading = true;

    this.auth.login(this.loginModel).subscribe({
      next: (response) => {
        this.loading = false;
        this.auth.setUser(response.user);
        this.importCartAndProceed();
      },
      error: (error) => {
        this.loading = false;
        this.error = error.error?.error || 'Credenciales inválidas.';
      },
    });
  }

  goToStep2(): void {
    this.error = '';
    
    if (!this.registerModel.correo || !this.registerModel.password || !this.registerModel.confirmPassword) {
      this.error = 'Completa todos los campos obligatorios.';
      return;
    }
    
    if (this.registerModel.password !== this.registerModel.confirmPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }
    
    if (this.registerModel.password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    this.setView('register-step2');
  }

  finishRegistration(): void {
    this.error = '';

    if (!this.registerModel.nombre || !this.registerModel.apellido) {
      this.error = 'Debes colocar tus nombres y apellidos.';
      return;
    }

    this.loading = true;

    const payload = {
      nombre: this.registerModel.nombre,
      apellido: this.registerModel.apellido,
      correo: this.registerModel.correo,
      password: this.registerModel.password,
      direccion: this.registerModel.direccion
    };

    this.auth.register(payload).subscribe({
      next: (response) => {
        this.loading = false;
        this.auth.setUser(response.user);
        this.importCartAndProceed();
      },
      error: (error) => {
        this.loading = false;
        this.error = error.error?.error || 'No se pudo registrar la cuenta. Es posible que el correo ya exista.';
      },
    });
  }

  private importCartAndProceed() {
    if (this.cart.hasLocalCart()) {
      this.cart.importLocalCart();
    } else {
      this.cart.loadCart();
    }
    
    this.goBack();
  }

  private goBack() {
    // Navigate back to where the user was, otherwise home
    const currentUrl = this.router.url;
    // Location.back() works in Angular but can sometimes kick you out of the app.
    // Instead we can check history.
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
