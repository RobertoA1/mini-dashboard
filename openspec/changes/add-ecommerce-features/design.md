## Context

Este proyecto es una aplicación de comercio electrónico (e-commerce) con frontend y backend. El frontend parece estar desarrollado en algún framework JavaScript (posiblemente React o similar basado en la estructura). Se necesita implementar un sistema completo de gestión de usuarios, carrito de compras persistente, historial de compras, y mejoras visuales.

## Goals / Non-Goals

**Goals:**
- Implementar sistema de autenticación completo (login, registro, logout)
- Crear página de perfil de usuario para visualizar y gestionar datos
- Implementar carrito de compras persistente en servidor
- Crear página "Mis Compras" con historial de compras
- Actualizar header con usuario, dropdown, y logo de carrito
- Implementar carruseles de productos por categoría en página principal
- Aplicar nueva paleta de colores (#9fb8ad, #475841 principal; #e6e8e6, #ced0ce, #3f403f secundario)
- Crear seed de datos con 5 clientes y 2 administradores

**Non-Goals:**
- Sistema de pagos (fuera del alcance actual)
- Notificaciones push o emails
- Chat o soporte en vivo
- Review de productos
- Programa de fidelización

## Decisions

### Decisión 1: Autenticación basada en tokens JWT
**Alternativa considerada:** Sesiones tradicionales en servidor
**Rationale:** JWT permite stateless authentication, más escalable para APIs RESTful, y facilita la persistencia del carrito en servidor sin estado de sesión. Permite además integración futura con móviles.

### Decisión 2: Almacenamiento del carrito en base de datos del servidor
**Alternativa considerada:** LocalStorage o cookies del cliente
**Rationale:** Requirement explícito: los datos del carrito deben persistir en el servidor y recuperarse al iniciar sesión. Base de datos garantiza persistencia y permite queries analíticas.

### Decisión 3: Routing de cliente para páginas de usuario
**Alternativa considerada:** Server-side rendering completo
**Rationale:** SPA proporciona experiencia más fluida, especialmente para carruseles y transiciones. El proyecto parece tener esta estructura ya.

### Decisión 4: Colores aplicados mediante CSS custom properties
**Rationale:** Permitetheming consistente y cambio fácil de colors en futuro. Define variables CSS para cada color del palette.

## Risks / Trade-offs

- [Riesgo] Migración de datos de usuarios existentes → Mitigation: Crear scripts de migración claros en deployment
- [Riesgo] Carrito abandonado consume espacio en BD → Mitigation: Limpiar carritos inactivos después de 30 días via cron job
- [Riesgo] Performance de carruseles con muchos productos → Mitigation: Implementar paginación o lazy loading en carruseles

## Migration Plan

1. Agregar nuevos modelos de base de datos (User, Cart, Purchase)
2. Crear endpoints de autenticación JWT
3. Implementar seed de datos (5 clientes, 2 administradores)
4. Actualizar componentes de frontend
5. Deploy con feature flag si es necesario
6. Rollback: Revertir migración de BD y restaurar código anterior

## Open Questions

- ¿Framework específico del frontend? (React, Vue, Angular)
- ¿Base de datos actual? (SQL vs NoSQL)
- ¿Autenticación existente o nueva implementación?