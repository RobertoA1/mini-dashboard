## Why

El sistema actual cubre la administración interna de productos, pero no ofrece una tienda pública orientada a clientes. Crear una interfaz Angular separada permite habilitar esa experiencia sin mezclarla con el frontend administrativo existente.

## What Changes

- Se agregará una tienda/catálogo público en Angular para explorar productos.
- Se presentarán listas y detalle de productos con navegación orientada a cliente.
- Se reutilizarán los datos existentes de productos, categorías y disponibilidad.
- Se mantendrá intacta la interfaz administrativa actual en React.

## Capabilities

### New Capabilities
- `tienda-productos-angular`: experiencia pública en Angular para listar, buscar y ver productos.

### Modified Capabilities

## Impact

Afecta el frontend, el enrutamiento de la experiencia pública, la forma de empaquetar y servir assets, y potencialmente la capa de lectura de productos para consumo público. También introduce dependencias y estructura de proyecto nuevas para Angular.
