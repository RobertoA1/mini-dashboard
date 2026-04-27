export interface Category {
  id: number;
  nombre: string;
}

export interface Proveedor {
  id: number;
  nombre: string;
}

export interface AuthUser {
  id: number;
  nombre: string;
  apellido?: string;
  correo: string;
  direccion?: string;
  rol: 'usuario' | 'administrativo';
}

export interface Purchase {
  id: number;
  productoId: number;
  nombre: string;
  descripcion: string;
  imagen: string | null;
  precio: number;
  cantidad: number;
  fechaCompra: string;
}

export interface PublicProduct {
  id: number;
  sku: string;
  nombre: string;
  descripcion: string;
  precio_venta: number;
  descuento_tipo?: 'porcentaje' | 'monto' | null;
  descuento_valor?: number;
  descuento_monto: number;
  precio_descuento: number;
  cuotas_sin_interes: boolean;
  cuotas_mensual: number;
  envio_gratis: boolean;
  costo_envio: number;
  categoria: Category | null;
  proveedor: Proveedor | null;
  estado: 'Nuevo' | 'Usado';
  disponible: boolean;
  stock_actual: number;
  imagen?: string;
}

export interface ProductListResponse {
  total: number;
  page: number;
  totalPages: number;
  data: PublicProduct[];
}

export interface ProductDetailResponse {
  product: PublicProduct;
  relatedProducts: PublicProduct[];
}

export interface CartItem {
  productoId: number;
  cantidad: number;
  producto: PublicProduct;
  subtotalProducto: number;
  subtotalEnvio: number;
  totalLinea: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotalProductos: number;
  subtotalEnvios: number;
  descuentoCupon: number;
  cupon: { codigo: string; tipo: 'porcentaje' | 'monto'; valor: number } | null;
  total: number;
}

export interface Orden {
  id: number;
  usuario_id: number;
  subtotal: number;
  igv: number;
  descuento_cupon: number;
  costo_envio: number;
  total: number;
  estado: string;
  fecha_creacion: string;
  items?: OrdenItem[];
  pago?: {
    metodo_pago: string;
    estado_pago: string;
  };
}

export interface OrdenItem {
  id: number;
  orden_id: number;
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
  producto?: PublicProduct;
}
