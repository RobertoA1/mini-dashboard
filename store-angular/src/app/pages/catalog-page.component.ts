import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, PublicProduct } from '../models';
import { StoreApiService } from '../services/store-api.service';
import { ProductCardComponent } from '../components/product-card.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="hero" *ngIf="!loading && userAddress">
      <span>Enviar a {{ userAddress }}</span>
    </section>

    <div *ngIf="loading" class="empty">Cargando catálogo...</div>
    <div *ngIf="error" class="error">{{ error }}</div>

    <ng-container *ngIf="!loading && !error">
      <section *ngFor="let cat of categoryProducts">
        <h2 class="category-title">{{ cat.categoryName }}</h2>
        <div class="carousel">
          <app-product-card *ngFor="let product of cat.products" [product]="product"></app-product-card>
        </div>
      </section>

      <div *ngIf="categoryProducts.length === 0" class="empty">No se encontraron productos.</div>
    </ng-container>
  `,
  styles: [`
    .category-title {
      text-align: center;
      margin: 2rem 0 1rem;
      color: var(--text);
    }
    .carousel {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      padding-bottom: 1rem;
    }
    .hero span {
      font-size: 0.9rem;
    }
  `]
})
export class CatalogPageComponent implements OnInit {
  categoryProducts: Array<{ categoryName: string; products: PublicProduct[] }> = [];
  categories: Category[] = [];
  loading = true;
  error = '';
  userAddress = '';

  constructor(private readonly storeApi: StoreApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.loading = true;
    this.error = '';

    this.storeApi.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loadProductsByCategory();
      },
      error: () => {
        this.error = 'No se pudo cargar el catálogo.';
        this.loading = false;
      }
    });

    this.storeApi.getCurrentSession().subscribe({
      next: (response) => {
        this.userAddress = response.user?.direccion || '';
      }
    });
  }

  private loadProductsByCategory(): void {
    const requests = this.categories.map(cat =>
      this.storeApi.getCatalog({ categoria: String(cat.id), limit: 10 })
    );

    Promise.all(requests.map(r => r.toPromise())).then((results: any) => {
      this.categoryProducts = this.categories
        .map((cat, index) => ({
          categoryName: cat.nombre,
          products: results[index]?.data || []
        }))
        .filter(cat => cat.products.length > 0);
      this.loading = false;
    }).catch(() => {
      this.error = 'No se pudo cargar el catálogo.';
      this.loading = false;
    });
  }
}