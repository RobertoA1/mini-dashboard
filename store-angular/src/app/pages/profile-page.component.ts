import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StoreApiService } from '../services/store-api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <h1>Mi Cuenta</h1>
    </section>

    @if (loading) {
      <div class="empty">Cargando perfil...</div>
    }
    @if (error) {
      <div class="error">{{ error }}</div>
    }

    @if (!loading && !error && profile) {
      <section class="detail__panel" style="margin-top:1rem;">
      <div class="form-grid">
        <label>
          <span>Nombre</span>
          <input [value]="profile.nombre" disabled />
        </label>
        <label>
          <span>Apellido</span>
          <input [value]="profile.apellido || ''" disabled />
        </label>
        <label>
          <span>Correo</span>
          <input [value]="profile.correo" disabled />
        </label>
        <label>
          <span>Dirección</span>
          <input [value]="profile.direccion || ''" disabled />
        </label>
        <label>
          <span>Rol</span>
          <input [value]="profile.rol === 'administrativo' ? 'Administrador' : 'Cliente'" disabled />
        </label>
      </div>
    </section>
    }
  `,
})
export class ProfilePageComponent implements OnInit {
  profile: { id: number; nombre: string; apellido: string | null; correo: string; direccion: string | null; rol: string } | null = null;
  loading = true;
  error = '';

  constructor(
    private readonly storeApi: StoreApiService,
    private readonly auth: AuthService,
  ) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated) {
      this.error = 'Debes iniciar sesión.';
      this.loading = false;
      return;
    }

    this.storeApi.getUserProfile().subscribe({
      next: (response) => {
        this.profile = response.profile;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el perfil.';
        this.loading = false;
      },
    });
  }
}