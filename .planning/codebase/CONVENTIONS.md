# Coding Conventions

**Analysis Date:** 2026-04-24

## Naming Patterns

**Files:**
- React components use PascalCase filenames in `src/client/components/**` such as `ProductForm.jsx`, `CategoryList.jsx`, and `ErrorBoundary.jsx`.
- Backend feature files use lowercase feature names with role suffixes in `src/slices/**`, such as `productos.controller.js`, `productos.service.js`, and `productos.routes.js`.
- Sequelize models use PascalCase filenames in `src/models/**` such as `Producto.js`, `Categoria.js`, and `Proveedor.js`.

**Functions:**
- Component functions and request handlers use camelCase, e.g. `handleSubmit`, `fetchProducts`, and `getAll`.
- Boolean props and state use descriptive nouns/flags such as `deleted`, `loading`, `showModal`, and `stockBajo`.

**Variables:**
- Local state and payload objects use camelCase (`formData`, `pagination`, `selectedCategory`).
- API field names preserve backend snake_case (`precio_compra`, `fecha_eliminacion`) when passed through forms and models.

**Types:**
- Not applicable; the codebase is JavaScript-only and does not use TypeScript types.

## Code Style

**Formatting:**
- Code uses 4-space indentation, semicolons, single quotes, and arrow functions in most modules.
- JSX props are written inline for small components and split across lines for larger forms and tables.
- No ESLint or Prettier config file is detected at the repository root.

**Linting:**
- Not detected. There is no `lint` script in `package.json`, and no `.eslintrc*` or `eslint.config.*` file is present.

## Import Organization

**Order:**
1. External packages (`react`, `express`, `axios`, `sequelize`)
2. Local relative modules from the same feature folder
3. Shared UI/common helpers

**Path Aliases:**
- Not detected. Imports use relative paths such as `../../services/api` and `../common/Loader`.

## Error Handling

**Patterns:**
- Controllers wrap async handlers in `try/catch` and return JSON error payloads from `src/slices/**`.
- Missing resources return 404 responses, e.g. `src/slices/productos/productos.controller.js` and `src/slices/categorias/categorias.controller.js`.
- Validation and uniqueness errors from Sequelize are mapped to 400 responses in controllers such as `src/slices/productos/productos.controller.js`.
- Services throw domain errors with `new Error(...)` for business rules, e.g. `src/slices/productos/productos.service.js` and `src/slices/proveedores/proveedores.service.js`.
- Client code stores request failures in local `error` state and renders `<Alert />` from `src/client/components/common/Alert.jsx`.

## Validation

**Patterns:**
- Forms validate before submit in component code, such as `ProductForm.jsx`, `CategoryForm.jsx`, and `ProviderForm.jsx`.
- Validation combines required-field checks with business rules like price ordering and non-negative stock in `src/client/components/Products/ProductForm.jsx`.
- Input constraints are also enforced by the DOM (`required`, `type="number"`, `maxLength`) and by Sequelize model validators in `src/models/Producto.js`.
- Email format is validated in `src/client/components/Providers/ProviderForm.jsx` and `src/slices/proveedores/proveedores.service.js`.
- Soft-delete aware queries filter on `fecha_eliminacion` in services such as `src/slices/productos/productos.service.js`.

## Logging

**Framework:** `console`

**Patterns:**
- Server startup and database connection status are logged in `server.js`.
- API and component-level errors are logged with `console.error` in `src/client/services/api.js` and `src/client/components/common/ErrorBoundary.jsx`.
- Some services log caught exceptions before rethrowing, e.g. `src/slices/productos/productos.service.js`.

## Comments

**When to Comment:**
- Comments are used as short explanatory notes, often in Spanish, for route intent or UI behavior.
- Inline comments appear in files such as `server.js`, `src/client/components/Products/ProductFilters.jsx`, and `src/client/components/Layout/Sidebar.jsx`.

**JSDoc/TSDoc:**
- Not detected.

## Function Design

**Size:**
- Functions are generally small and single-purpose, especially in controllers, services, and React components.

**Parameters:**
- Request handlers follow `(req, res)` and service methods accept plain objects or IDs.

**Return Values:**
- API handlers return JSON objects with consistent `{ error: ... }` or success payloads.
- Service methods return Sequelize results directly or `null` when a record is missing.

## Module Design

**Exports:**
- Backend modules use CommonJS `module.exports` / `exports.*`.
- Frontend modules use ES module `export default`.

**Barrel Files:**
- `src/models/index.js` acts as a model index/barrel and wires associations.

---

*Convention analysis: 2026-04-24*
