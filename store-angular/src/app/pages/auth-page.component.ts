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
    <!-- MAIN WRAPPER: Removed user's hardcoded header/footer, relying on app.component.ts layout -->
    <div class="bg-background text-on-background min-h-screen font-body-lg text-body-lg antialiased">
      
      <!-- ====================== -->
      <!-- VIEW: LOGIN            -->
      <!-- ====================== -->
      <main *ngIf="view === 'login'" class="flex items-center justify-center p-lg min-h-[calc(100vh-200px)]">
        <div class="w-full max-w-md bg-surface-container-lowest border-2 border-outline-variant rounded p-xl flex flex-col gap-lg">
          <div class="text-center mb-sm">
            <h1 class="font-h1 text-h1 text-primary-container mb-xs">Iniciar Sesión</h1>
            <p class="font-body-md text-body-md text-on-surface-variant">Accede a tu cuenta para continuar con tus compras eficientes.</p>
          </div>
          <form class="flex flex-col gap-md" (ngSubmit)="login()">
            <div *ngIf="error" class="bg-red-50 text-red-600 p-3 text-sm border border-red-200 rounded">
              {{ error }}
            </div>
            <div class="flex flex-col gap-xs">
              <label class="font-label text-label text-on-surface uppercase" for="emailLogin">Correo Electrónico</label>
              <input class="h-11 border border-outline-variant rounded bg-surface-container-lowest px-sm text-on-surface font-body-md text-body-md focus:outline-none focus:border-2 focus:border-primary-container transition-colors" 
                     id="emailLogin" name="emailLogin" [(ngModel)]="loginModel.correo" placeholder="tu@correo.com" required type="email" />
            </div>
            <div class="flex flex-col gap-xs">
              <div class="flex items-center justify-between">
                <label class="font-label text-label text-on-surface uppercase" for="passwordLogin">Contraseña</label>
                <a class="font-body-sm text-body-sm text-primary-container underline hover:text-primary transition-colors" href="javascript:void(0)">¿Olvidaste tu contraseña?</a>
              </div>
              <input class="h-11 border border-outline-variant rounded bg-surface-container-lowest px-sm text-on-surface font-body-md text-body-md focus:outline-none focus:border-2 focus:border-primary-container transition-colors" 
                     id="passwordLogin" name="passwordLogin" [(ngModel)]="loginModel.password" placeholder="••••••••" required type="password" />
            </div>
            <div class="flex flex-col gap-sm mt-sm">
              <button class="h-[44px] bg-primary-container text-on-primary font-label text-label uppercase rounded flex items-center justify-center cursor-pointer hover:bg-primary transition-colors disabled:opacity-50" 
                      type="submit" [disabled]="loading">
                  {{ loading ? 'Ingresando...' : 'Iniciar Sesión' }}
              </button>
              <button class="h-[44px] bg-transparent border border-primary-container text-primary-container font-label text-label uppercase rounded flex items-center justify-center cursor-pointer hover:bg-surface-container transition-colors" 
                      type="button" (click)="setView('register-step1')" [disabled]="loading">
                  Registrarse
              </button>
            </div>
          </form>
        </div>
      </main>

      <!-- ====================== -->
      <!-- VIEW: REGISTER STEP 1  -->
      <!-- ====================== -->
      <main *ngIf="view === 'register-step1'" class="flex items-center justify-center p-lg min-h-[calc(100vh-200px)]">
        <div class="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-[2px] p-8 shadow-none">
          <div class="mb-8 text-center">
            <h1 class="font-h2 text-h2 text-on-surface mb-2">Crear Cuenta</h1>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Únete para una experiencia de compra segura</p>
          </div>
          <!-- Progress Indicator -->
          <div class="mb-8">
            <div class="flex justify-between items-center mb-2">
              <span class="font-label text-label text-on-surface">Paso 1 de 2</span>
              <span class="font-label text-label text-on-surface-variant">Acceso</span>
            </div>
            <div class="w-full h-1 bg-surface-variant rounded-full flex overflow-hidden">
              <div class="h-full bg-primary-container w-1/2"></div>
            </div>
          </div>
          <!-- Form -->
          <form class="space-y-6" (ngSubmit)="goToStep2()">
            <div *ngIf="error" class="bg-red-50 text-red-600 p-3 text-sm border border-red-200 rounded">
              {{ error }}
            </div>
            <div class="space-y-2">
              <label class="block font-label text-label text-on-surface" for="emailReg">Correo electrónico</label>
              <input class="w-full h-[44px] px-md bg-surface-container-lowest border border-outline-variant rounded-[2px] text-on-surface placeholder:text-outline focus:border-2 focus:border-primary-container focus:ring-0 focus:outline-none transition-all shadow-none font-body-md text-body-md" 
                     id="emailReg" name="emailReg" [(ngModel)]="registerModel.correo" placeholder="tu@email.com" required type="email" />
            </div>
            <div class="space-y-2">
              <label class="block font-label text-label text-on-surface" for="passwordReg">Contraseña</label>
              <input class="w-full h-[44px] px-md bg-surface-container-lowest border border-outline-variant rounded-[2px] text-on-surface placeholder:text-outline focus:border-2 focus:border-primary-container focus:ring-0 focus:outline-none transition-all shadow-none font-body-md text-body-md" 
                     id="passwordReg" name="passwordReg" [(ngModel)]="registerModel.password" placeholder="••••••••" required type="password" />
            </div>
            <div class="space-y-2">
              <label class="block font-label text-label text-on-surface" for="passwordConfirm">Confirmar contraseña</label>
              <input class="w-full h-[44px] px-md bg-surface-container-lowest border border-outline-variant rounded-[2px] text-on-surface placeholder:text-outline focus:border-2 focus:border-primary-container focus:ring-0 focus:outline-none transition-all shadow-none font-body-md text-body-md" 
                     id="passwordConfirm" name="passwordConfirm" [(ngModel)]="registerModel.confirmPassword" placeholder="••••••••" required type="password" />
            </div>
            <div class="pt-4">
              <button class="w-full min-h-[44px] bg-primary-container text-[#e6e8e6] font-label text-label uppercase tracking-wider rounded-[2px] hover:bg-[#3d4b38] transition-colors flex items-center justify-center shadow-none" 
                      type="submit">
                  Continuar
              </button>
            </div>
          </form>
          <div class="mt-6 text-center">
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              ¿Ya tienes una cuenta? 
              <a href="javascript:void(0)" class="text-primary-container font-semibold hover:underline" (click)="setView('login')">Iniciar sesión</a>
            </p>
          </div>
        </div>
      </main>

      <!-- ====================== -->
      <!-- VIEW: REGISTER STEP 2  -->
      <!-- ====================== -->
      <main *ngIf="view === 'register-step2'" class="flex items-center justify-center p-lg min-h-[calc(100vh-200px)]">
        <div class="bg-surface-container-lowest border border-outline-variant rounded p-xl w-full max-w-[480px]">
          <!-- Progress Indicator -->
          <div class="mb-lg">
            <div class="flex justify-between items-center mb-sm">
              <span class="font-label text-label text-outline uppercase tracking-wider">Paso 2 de 2</span>
              <span class="font-label text-label text-primary-container uppercase tracking-wider">Datos Personales</span>
            </div>
            <div class="flex gap-xs w-full h-unit">
              <div class="w-1/2 bg-primary-container rounded-full"></div>
              <div class="w-1/2 bg-primary-container rounded-full"></div>
            </div>
          </div>
          <!-- Title -->
          <h1 class="font-h2 text-h2 text-on-surface mb-xl">Completa tu perfil</h1>
          <!-- Form -->
          <form class="flex flex-col gap-lg" (ngSubmit)="finishRegistration()">
            <div *ngIf="error" class="bg-red-50 text-red-600 p-3 text-sm border border-red-200 rounded">
              {{ error }}
            </div>
            <!-- Nombres -->
            <div class="flex flex-col gap-xs">
              <label class="font-label text-label text-on-surface" for="firstNames">Nombres completos</label>
              <input class="h-[44px] px-md bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" 
                     id="firstNames" name="firstNames" [(ngModel)]="registerModel.nombre" placeholder="Ej. Juan Carlos" required type="text" />
            </div>
            <!-- Apellidos -->
            <div class="flex flex-col gap-xs">
              <label class="font-label text-label text-on-surface" for="surnames">Apellidos completos</label>
              <input class="h-[44px] px-md bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" 
                     id="surnames" name="surnames" [(ngModel)]="registerModel.apellido" placeholder="Ej. Pérez Gómez" required type="text" />
            </div>
            <!-- Dirección (Opcional) -->
            <div class="flex flex-col gap-xs">
              <div class="flex justify-between items-baseline">
                <label class="font-label text-label text-on-surface" for="address">Dirección</label>
                <span class="font-body-sm text-body-sm text-outline">Opcional</span>
              </div>
              <input class="h-[44px] px-md bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" 
                     id="address" name="address" [(ngModel)]="registerModel.direccion" placeholder="Ingresa tu dirección de envío" type="text" />
              <p class="font-body-sm text-body-sm text-outline mt-1">Puedes colocar la dirección después (se le pedirá en cada pedido).</p>
            </div>
            <!-- Actions -->
            <div class="flex gap-md mt-sm pt-md border-t border-surface-dim">
              <button class="flex-1 h-[44px] flex items-center justify-center font-label text-label text-primary-container bg-transparent border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50" 
                      type="button" (click)="setView('register-step1')" [disabled]="loading">
                  Atrás
              </button>
              <button class="flex-[2] h-[44px] flex items-center justify-center font-label text-label text-on-primary bg-primary-container rounded hover:bg-on-primary-fixed-variant transition-colors disabled:opacity-50" 
                      type="submit" [disabled]="loading">
                  {{ loading ? 'Finalizando...' : 'Finalizar Registro' }}
              </button>
            </div>
          </form>
        </div>
      </main>

    </div>
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
