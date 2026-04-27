## Context

La tienda Angular ya tiene catálogo, detalle y carrito básicos, pero hoy la presentación comercial es incompleta: la página principal permite acciones de compra que no deberían estar ahí, el detalle no expresa todavía todo el contexto comercial, y el carrito no calcula envío, cupones ni totales finales. Además, la base de datos actual contiene las tablas operativas de productos, usuarios y carrito, pero no cubre todavía todos los datos comerciales que este flujo necesita.

## Goals / Non-Goals

**Goals:**
- Separar claramente la función de resumen del catálogo principal y la función de compra del detalle del producto.
- Mostrar reglas comerciales de producto: descuento, cuotas sin interés y envío gratis.
- Calcular el carrito con subtotal de productos, subtotal de envíos, cupón y total final.
- Verificar y completar el esquema de datos para soportar merchandising, cupones y envío.
- Mantener la experiencia del panel administrativo sin cambios funcionales en este alcance.

**Non-Goals:**
- Implementar la pasarela de pago.
- Introducir marketplace, vendedores múltiples o logística avanzada.
- Rehacer la autenticación o el carrito híbrido ya existentes.

## Decisions

- **Fuente única de precios y atributos comerciales en el backend**: el backend debe exponer los datos de precio, descuento, cuota sin interés y envío gratis en el contrato público del producto. El frontend solo los presenta y calcula el texto derivado como la cuota mensual sin interés.
  - Alternativa considerada: derivar toda la lógica en el frontend. Se descarta porque duplicaría reglas y haría más fácil desalinear precios.

- **La card principal será solo resumen**: la home debe priorizar descubrimiento, no compra. Por eso no tendrá botón de agregar al carrito ni CTA de compra; esos controles vivirán solo en la página del producto.
  - Alternativa considerada: mantener el botón rápido en la home. Se descarta porque contradice la experiencia solicitada.

- **El carrito calculará totales con apoyo del backend**: el subtotal de productos, el subtotal de envío y el total final deben salir de una única lógica de negocio para evitar diferencias entre pantallas.
  - Alternativa considerada: que cada pantalla calcule los totales por su cuenta. Se descarta por riesgo de inconsistencias.

- **Productos relacionados por categoría activa**: la sección de productos relacionados se resolverá con productos activos de la misma categoría y se mostrará debajo de todo el detalle.
  - Alternativa considerada: selección manual de recomendaciones. Se descarta por complejidad operativa.

- **Evolución del esquema mediante migraciones**: si faltan tablas o columnas para descuentos, cuotas, cupones o envío, se agregarán por migración en lugar de depender de datos ad-hoc en el frontend.
  - Alternativa considerada: guardar esos datos solo en memoria o en el cliente. Se descarta porque no garantiza persistencia ni consistencia.

## Risks / Trade-offs

- [Precios calculados en más de un lugar] → Mitigar exponiendo el precio efectivo y las reglas desde el backend.
- [Las fechas de entrega pueden variar por zona horaria] → Mitigar usando fechas relativas consistentes en servidor y renderización local clara.
- [Cupones mal aplicados pueden afectar el total] → Mitigar validando su tipo, vigencia y monto antes de recalcular.
- [Agregar campos/tables aumenta el alcance de migración] → Mitigar con migraciones incrementales y sin romper tablas existentes.

## Migration Plan

1. Verificar el esquema actual de productos, usuarios y carrito.
2. Agregar columnas o tablas faltantes para merchandising, cupones y envío.
3. Exponer esos datos en la API pública de productos y carrito.
4. Actualizar la tienda Angular para consumir y presentar los nuevos contratos.
5. Validar que el catálogo principal, el detalle y el carrito funcionen con productos nuevos y existentes.
6. Si algo falla, revertir las migraciones nuevas manteniendo las tablas base intactas.

## Open Questions

- Ninguna pendiente. El CTA de compra desde detalle irá al flujo de carrito/continuar, y la pasarela quedará fuera de este cambio.
