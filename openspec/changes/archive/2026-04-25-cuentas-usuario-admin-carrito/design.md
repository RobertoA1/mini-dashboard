## Context

La tienda pública Angular ya puede listar productos, pero todavía no existe identidad de usuario ni persistencia por cuenta. El panel React de productos también está abierto sin control de roles, así que este cambio debe introducir autenticación y autorización en toda la superficie de administración y compra.

## Goals / Non-Goals

**Goals:**
- Permitir registro e inicio de sesión para cuentas de tipo usuario.
- Permitir cuentas administrativas con acceso al panel React de productos.
- Persistir el carrito de compras por usuario autenticado.
- Mantener un carrito anónimo en `localStorage` e importarlo a la cuenta al iniciar sesión.
- Reservar la navegación de pago para una etapa futura sin implementar pasarela.

**Non-Goals:**
- Implementar pasarela de pago.
- Cambiar el diseño general del panel React más allá del control de acceso.
- Agregar compra asistida, envío o facturación.

## Decisions

- **Autenticación basada en token en cookie httpOnly**: el backend emitirá una cookie segura con la sesión del usuario y su rol. Esto evita exponer credenciales en `localStorage` y funciona igual para Angular y React.
  - Alternativa considerada: sesiones de servidor. Se descarta por requerir más infraestructura de estado.

- **Autorización por rol en backend y frontends**: el rol `administrativo` se validará en middleware de API y también en guards/controles de UI para ocultar acciones no permitidas.
  - Alternativa considerada: solo ocultar botones en el frontend. Se descarta porque no protege el API.

- **Carrito persistido en servidor para usuarios autenticados**: el carrito se guardará asociado a la cuenta para poder recuperarlo entre dispositivos.
  - Alternativa considerada: guardar siempre en el cliente. Se descarta porque no cumple con el carrito personal persistente.

- **Carrito anónimo en `localStorage` con importación explícita**: los visitantes sin sesión usarán el carrito local; al iniciar sesión, podrán fusionarlo con su carrito de cuenta.
  - Alternativa considerada: sincronizar automáticamente en segundo plano. Se descarta para evitar sobrescribir datos del usuario sin confirmación.

- **Panel React con acceso administrativo restringido**: las rutas y acciones de productos seguirán en React, pero solo serán accesibles por usuarios administrativos.
  - Alternativa considerada: migrar el panel a Angular. Se descarta porque el panel ya existe y el cambio solicitado no pide reescritura.

## Risks / Trade-offs

- [Se agregan dependencias de autenticación y almacenamiento] → Mitigar usando un contrato simple de login, rol y carrito.
- [El carrito puede divergir entre localStorage y servidor] → Mitigar con importación explícita y reglas de fusión claras.
- [Una cookie de sesión mal configurada puede romper el login en SPA] → Mitigar con mismos orígenes, flags seguros y un endpoint `/auth/me` para recuperar estado.
- [El panel React puede mostrar pantallas a usuarios no autorizados antes de cargar permisos] → Mitigar con guards de ruta y validación del backend en cada mutación.

## Migration Plan

1. Crear el modelo de cuenta/rol y los endpoints de autenticación.
2. Proteger las rutas de productos y añadir control de rol en el panel React.
3. Implementar carrito persistente por usuario y carrito anónimo en la tienda Angular.
4. Agregar el flujo de importación del carrito local al iniciar sesión.
5. Publicar el cambio con la pasarela aún pendiente.
6. Si algo falla, desactivar las rutas protegidas nuevas y mantener la tienda en modo anónimo.

## Open Questions

- Ninguna pendiente. El registro será público desde la tienda y el checkout queda fuera de alcance.
