## Why

La tienda pública ya existe, pero todavía no distingue entre visitantes, usuarios autenticados y administrativos. Antes de incorporar la pasarela de pago, hace falta una base de cuentas, roles y carrito persistente para que la experiencia de compra y el panel de administración funcionen con permisos claros.

## What Changes

- Se agregará registro e inicio de sesión público para cuentas de tipo usuario.
- Se agregará un rol administrativo para gestionar productos desde el panel actual en React.
- Se incorporará un carrito personal para cada usuario autenticado.
- Se permitirá que visitantes anónimos usen carrito en `localStorage` y lo importen a su cuenta al iniciar sesión.
- Se mostrará un carrito con acción de continuar para dejar listo el flujo de pago futuro.
- **BREAKING**: las acciones de crear, editar y eliminar productos quedarán restringidas a cuentas administrativas.

## Capabilities

### New Capabilities
- `cuentas-y-autenticacion`: registro, inicio de sesión, cierre de sesión y roles de usuario/administrativo.
- `carrito-compras`: carrito personal con persistencia híbrida entre sesión autenticada y `localStorage`.
- `panel-productos-autorizado`: administración de productos restringida a usuarios administrativos.

### Modified Capabilities

## Impact

Afecta la API de autenticación, el modelo de usuarios y roles, la persistencia del carrito, la tienda Angular y el panel React de productos. También implica agregar middleware de autorización y ajustar el comportamiento de creación/edición/eliminación de productos para que solo funcione con rol administrativo.
