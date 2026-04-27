## Why

El modelo Usuario necesita campos adicionales (apellido, direccion) para soportar el registro de usuarios y la funcionalidad de "Enviar a {direccion}". El modelo Compra no existe en migraciones y debe crearse.

## What Changes

- Agregar columnas `apellido` y `direccion` a la tabla `usuarios`
- Crear migración para tabla `compras`
- Actualizar modelos para reflejar los nuevos campos

## Capabilities

### Modified Capabilities
- `user-auth`: Agregar campos apellido y direccion al registro y perfil de usuario

## Impact

- Migraciones de base de datos
- Modelos Sequelize (Usuario, Compra)