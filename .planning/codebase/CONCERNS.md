# Codebase Concerns

**Analysis Date:** 2026-04-24

## Tech Debt

**Open API surface in `server.js` and slice routes:**
- Issue: `app.use(cors())` is enabled globally in `server.js`, and the API routes under `src/slices/*` are mounted without authentication or authorization middleware.
- Files: `server.js`, `src/slices/productos/productos.routes.js`, `src/slices/categorias/categorias.routes.js`, `src/slices/proveedores/proveedores.routes.js`, `src/slices/dashboard/dashboard.routes.js`, `src/slices/reports/reports.routes.js`
- Impact: any reachable client can list, create, update, delete, restore, and export data.
- Fix approach: add authn/authz middleware, restrict CORS origins, and protect mutating/report routes.

**Mass assignment and unvalidated payloads:**
- Issue: controllers pass `req.body` directly into Sequelize create/update calls.
- Files: `src/slices/productos/productos.controller.js`, `src/slices/categorias/categorias.controller.js`, `src/slices/proveedores/proveedores.controller.js`, `src/slices/productos/productos.service.js`, `src/slices/categorias/categorias.service.js`, `src/slices/proveedores/proveedores.service.js`
- Impact: clients can send unexpected fields; audit columns in `src/models/Producto.js`, `src/models/Categoria.js`, and `src/models/Proveedor.js` are model attributes, so metadata can be manipulated unless explicitly filtered.
- Fix approach: validate request payloads with a schema and whitelist writable fields.

**Unbounded pagination parameters:**
- Issue: `page` and `limit` come from `req.query` and are only `parseInt`-ed.
- Files: `src/slices/productos/productos.service.js`, `src/slices/categorias/categorias.service.js`, `src/slices/proveedores/proveedores.service.js`
- Impact: malformed values can produce `NaN` offsets or oversized queries.
- Fix approach: enforce numeric bounds and defaults in shared validation.

## Security Considerations

**Information leakage through raw error messages:**
- Issue: catch blocks return `error.message` to clients in multiple controllers.
- Files: `src/slices/productos/productos.controller.js`, `src/slices/categorias/categorias.controller.js`, `src/slices/proveedores/proveedores.controller.js`, `src/slices/dashboard/dashboard.controller.js`, `src/slices/reports/reports.controller.js`
- Impact: database, ORM, and stack details can leak in production responses.
- Fix approach: return generic client messages and log details server-side.

**Public destructive endpoints:**
- Issue: soft-delete and restore routes are publicly reachable and accept IDs directly.
- Files: `src/slices/productos/productos.routes.js`, `src/slices/categorias/categorias.routes.js`, `src/slices/proveedores/proveedores.routes.js`
- Impact: unauthenticated callers can alter inventory state.
- Fix approach: require authenticated roles and add audit logging.

**Environment-driven DB settings without startup validation:**
- Issue: `src/config/database.js` depends on env vars, and `server.js` only logs a failed database connection.
- Files: `src/config/database.js`, `server.js`
- Impact: missing or wrong env values can leave the service running without a ready API.
- Fix approach: validate required env vars at boot and exit non-zero on fatal startup errors.

## Performance Bottlenecks

**PDF generation buffers entire documents in memory:**
- Issue: `src/slices/reports/pdfGenerator.js` concatenates all PDF chunks into a single buffer.
- Files: `src/slices/reports/pdfGenerator.js`, `src/slices/reports/reports.controller.js`, `src/slices/reports/reports.service.js`
- Impact: large inventories can increase memory use and response time.
- Fix approach: stream PDFs or cap report size and move heavy exports to background jobs.

**Heavy report queries run on demand:**
- Issue: management and operational reports load full active-product datasets and KPI aggregates per request.
- Files: `src/slices/reports/reports.service.js`, `src/slices/dashboard/dashboard.service.js`
- Impact: repeated report requests can become expensive as data grows.
- Fix approach: cache KPI/report snapshots or precompute aggregates.

## Fragile Areas

**Model auto-loading depends on directory contents:**
- Issue: `src/models/index.js` loads every non-test `.js` file in `src/models`.
- Files: `src/models/index.js`
- Impact: adding helper files to that directory can break startup or create unintended model registration.
- Safe modification: keep `src/models` model-only or replace auto-discovery with an explicit registry.

**Soft-delete lifecycle has no dependency checks:**
- Issue: `softDelete` and `restore` methods do not verify dependent records before changing status.
- Files: `src/slices/productos/productos.service.js`, `src/slices/categorias/categorias.service.js`, `src/slices/proveedores/proveedores.service.js`, `src/migrations/20250101000003-create-producto.js`
- Impact: categories or suppliers can be deleted/restored while products still point at them, creating inconsistent operational views.
- Safe modification: block parent deletion when active dependents exist, or define explicit lifecycle rules.

**Startup path has no health/readiness checks:**
- Issue: `server.js` authenticates the database before `listen`, but there is no readiness endpoint or startup probe.
- Files: `server.js`
- Impact: operational failures are hard to detect automatically.
- Safe modification: add health endpoints and readiness checks for DB connectivity and migrations.

## Scaling Limits

**No rate limiting on expensive or mutating endpoints:**
- Current capacity: not enforced.
- Limit: public endpoints can be called repeatedly, including PDF generation and full-table listings.
- Scaling path: add rate limiting, caching, and request volume controls.

**No pagination on report datasets:**
- Current capacity: report exports return all active products.
- Limit: large catalogs increase memory and response cost.
- Scaling path: limit report scope or generate exports asynchronously.

## Dependencies at Risk

**Unused or heavy runtime packages:**
- Risk: `package.json` includes `puppeteer` and other heavy libraries alongside PDF tooling.
- Impact: larger installs and a broader CVE surface if the package is not needed at runtime.
- Migration plan: remove unused dependencies after confirming no references in `src/`.

## Missing Critical Features

**Authentication and authorization:**
- Problem: no auth middleware or role checks are present in the request path.
- Blocks: safe administration of inventory and report endpoints.

**Centralized input validation:**
- Problem: validation is scattered and partial (`src/slices/proveedores/proveedores.service.js` only validates email/phone on create).
- Blocks: consistent error handling and safe persistence.

**Graceful operational controls:**
- Problem: no graceful shutdown, retry, or readiness pattern is implemented in `server.js`.
- Blocks: stable deployments under database outages or rolling restarts.

## Test Coverage Gaps

**No repository tests detected:**
- What's not tested: controllers, services, report generation, and delete/restore flows.
- Files: `server.js`, `src/slices/**`, `src/models/**`
- Risk: regressions in validation, report output, and destructive actions can ship unnoticed.
- Priority: High

---

*Concerns audit: 2026-04-24*
