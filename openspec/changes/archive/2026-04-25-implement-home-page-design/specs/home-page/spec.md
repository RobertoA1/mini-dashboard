## ADDED Requirements

### Requirement: Campo cupón del día
El modelo CUPON SHALL tener campo es_del_dia para identificar cupón del día.

#### Scenario: Agregar campo
- **WHEN** se ejecuta migración
- **THEN** tabla cupones tiene columna es_del_dia (BOOLEAN, DEFAULT false)

### Requirement: Página home con datos dinámicos
La página home SHALL cargar categorías, cupón del día y productos desde BD.

#### Scenario: Cargar datos
- **WHEN** usuario visita home
- **THEN** muestra categorías desde BD, cupón del día, productos destacados

### Requirement: Usuario en header
El header SHALL mostrar nombre de usuario desde sesión o "Iniciar sesión".

#### Scenario: Sesión activa
- **WHEN** hay usuario logueado
- **THEN** muestra "{nombre} {apellido}" (hasta 10 letras sin espacios)

#### Scenario: Sin sesión
- **WHEN** no hay usuario logueado
- **THEN** muestra "Iniciar sesión"