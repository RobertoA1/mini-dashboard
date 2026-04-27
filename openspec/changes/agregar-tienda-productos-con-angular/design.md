## Context

El repositorio actual ya tiene un frontend React para administración y una API de productos, categorías y proveedores. La nueva tienda debe ser pública, de solo lectura y no interferir con el área administrativa existente.

## Goals / Non-Goals

**Goals:**
- Crear una experiencia pública en Angular para navegar productos.
- Reutilizar los datos existentes del dominio de productos.
- Mantener separada la UI pública de la UI administrativa.

**Non-Goals:**
- Migrar la aplicación administrativa actual a Angular.
- Reescribir el backend completo.
- Agregar flujo de compra, pago o autenticación.

## Decisions

- **Angular como frontend separado para la tienda**: se implementará una SPA Angular independiente para la experiencia pública. Esto evita mezclar frameworks en la UI administrativa existente y limita el cambio al alcance solicitado.
  - Alternativa considerada: migrar toda la app a Angular. Se descarta por ser un cambio mucho más amplio y arriesgado.

- **Consumo de datos por API de solo lectura**: la tienda leerá productos mediante endpoints públicos existentes o nuevos endpoints públicos específicos.
  - Alternativa considerada: acceso directo a datos compartidos desde el frontend. Se descarta por acoplar la UI al backend.

- **Catálogo con navegación simple**: la experiencia priorizará listado, búsqueda y detalle de producto.
  - Alternativa considerada: incluir carrito y checkout. Se descarta porque no está en el alcance solicitado.

- **Separación de assets y rutas**: Angular se servirá como bundle propio y convivirá con el frontend React actual.
  - Alternativa considerada: incrustar Angular dentro del bundle actual. Se descarta por complejidad y mantenimiento.

## Risks / Trade-offs

- [Se agregan dos frontends en el mismo repo] → Mitigar con estructura y build separados para que cada uno tenga responsabilidades claras.
- [Puede duplicarse lógica de presentación] → Mitigar compartiendo solo contratos de datos y evitando mezclar componentes entre frameworks.
- [La tienda pública podría exponer datos sensibles si no se filtra bien] → Mitigar con endpoints o consultas de solo lectura que limiten campos y registros visibles.

## Migration Plan

1. Agregar el proyecto Angular de la tienda sin tocar la UI React actual.
2. Conectar la tienda a la API de productos con lecturas públicas.
3. Publicar la nueva ruta/asset de la tienda y validar que la administración siga funcionando igual.
4. Si el despliegue falla, revertir el bundle/rutas nuevas sin afectar el frontend administrativo.

## Open Questions

- Ninguna pendiente. La tienda se sirve bajo la ruta `/tienda` del mismo dominio y expone nombre, descripción, categoría, precio y stock como datos públicos.
