# Architecture

**Analysis Date:** 2026-04-24

## Pattern Overview

**Overall:** Layered Express API + React SPA served from a Node.js process.

**Key Characteristics:**
- `server.js` exposes the HTTP server, mounts API routes, and serves the EJS shell from `src/views/index.ejs`.
- Backend code is organized by feature slice in `src/slices/*` with `routes -> controller -> service` flow.
- Persistence is handled by Sequelize models in `src/models/*` against PostgreSQL.
- The browser UI is a React app bundled from `src/client/index.js` and loaded from `public/js/bundle.js`.

## Layers

**HTTP/Bootstrap Layer:**
- Purpose: Start the app, configure middleware, and register routes.
- Location: `server.js`
- Contains: Express setup, CORS, JSON parsing, static asset serving, EJS view configuration, database connection bootstrap.
- Depends on: `src/models/index.js`, `src/slices/*/*.routes.js`, `src/views/index.ejs`, `public/*`
- Used by: The Node runtime entrypoint.

**API Slice Layer:**
- Purpose: Expose domain endpoints for products, categories, providers, dashboard KPIs, and reports.
- Location: `src/slices/*`
- Contains: Route definitions, request handlers, domain services, report PDF generation.
- Depends on: `src/models/*`, Sequelize operators, `pdfmake` in `src/slices/reports/pdfGenerator.js`.
- Used by: `server.js` and the React client through `/api/*`.

**Persistence Layer:**
- Purpose: Define tables, associations, and query behavior.
- Location: `src/models/*`, `src/migrations/*`, `src/seeders/*`, `src/config/database.js`
- Contains: Sequelize model definitions, migration scripts, seed data, database environment mapping.
- Depends on: Environment variables loaded by `dotenv`.
- Used by: Slice services and `src/models/index.js`.

**Client Layer:**
- Purpose: Render the dashboard, CRUD screens, and report actions in the browser.
- Location: `src/client/*`
- Contains: React entrypoint, router, page components, reusable UI components, Axios client.
- Depends on: `react`, `react-router-dom`, `axios`, generated assets from Webpack/Tailwind.
- Used by: `src/views/index.ejs` through `/js/bundle.js`.

## Data Flow

**CRUD Request Flow:**

1. React components in `src/client/components/*` call the shared Axios instance in `src/client/services/api.js`.
2. Requests hit Express routes in `src/slices/*/*.routes.js` under `/api/...`.
3. Controllers in `src/slices/*/*.controller.js` validate the request/response path and translate errors to HTTP status codes.
4. Services in `src/slices/*/*.service.js` perform business rules and query Sequelize models from `src/models/index.js`.
5. Sequelize reads/writes PostgreSQL tables defined in `src/migrations/*` and mapped by `src/models/*.js`.

**Dashboard Flow:**

1. `src/client/components/Dashboard/Dashboard.jsx` requests `/api/dashboard/kpis`.
2. `src/slices/dashboard/dashboard.controller.js` delegates to `src/slices/dashboard/dashboard.service.js`.
3. The service combines Sequelize ORM calls and raw SQL queries to compute KPIs and aggregations.
4. The response is rendered into charts and KPI cards in the React client.

**Report Flow:**

1. `src/client/components/Reports/ReportOperacional.jsx` and `src/client/components/Reports/ReportGestion.jsx` request `/api/reports/*` with `responseType: 'blob'`.
2. `src/slices/reports/reports.controller.js` gathers report data via `src/slices/reports/reports.service.js`.
3. `src/slices/reports/pdfGenerator.js` builds the PDF document definition with `pdfmake`.
4. The browser downloads the generated PDF.

**State Management:**
- Server state is fetched on demand from the API.
- Client state is local React component state (`useState`, `useEffect`) inside feature components.
- Pagination, filters, modal state, and loading/error indicators are held in component state.

## Key Abstractions

**Sequelize Models:**
- Purpose: Represent database entities and associations.
- Examples: `src/models/Producto.js`, `src/models/Categoria.js`, `src/models/Proveedor.js`
- Pattern: Each model declares soft-delete timestamps with `paranoid: true` and custom timestamp column names.

**Feature Slices:**
- Purpose: Keep API concerns grouped by domain.
- Examples: `src/slices/productos/*`, `src/slices/categorias/*`, `src/slices/proveedores/*`, `src/slices/dashboard/*`, `src/slices/reports/*`
- Pattern: Controller delegates to service; route file only wires endpoints.

**Shared API Client:**
- Purpose: Centralize base URL and response error logging.
- Examples: `src/client/services/api.js`
- Pattern: A single Axios instance with `/api` base URL.

**Report Generator:**
- Purpose: Convert product/KPI data into downloadable PDF output.
- Examples: `src/slices/reports/pdfGenerator.js`
- Pattern: Pure generator functions return a `Buffer` from a `docDefinition`.

## Entry Points

**Server Bootstrap:**
- Location: `server.js`
- Triggers: `npm start`, `npm run dev`
- Responsibilities: load env vars, create Express app, mount routes, connect to PostgreSQL, start listening.

**Client Bootstrap:**
- Location: `src/client/index.js`
- Triggers: Webpack bundle loaded by `src/views/index.ejs`
- Responsibilities: create React root and render `<App />`.

**Bundle Configuration:**
- Location: `webpack.config.js`
- Triggers: `npm run build`, `npm run build:dev`
- Responsibilities: compile `src/client/index.js` into `public/js/bundle.js`.

**View Shell:**
- Location: `src/views/index.ejs`
- Triggers: fallback route in `server.js`
- Responsibilities: provide the HTML shell with `#root`, CSS, and JS asset links.

## Error Handling

**Strategy:** Controllers return JSON errors for API calls and the client renders alerts or fallback UI.

**Patterns:**
- `src/slices/*/*.controller.js` maps not-found cases to `404` and validation/constraint failures to `400`.
- Client components in `src/client/components/*` catch Axios failures and display `Alert` messages from `src/client/components/common/Alert.jsx`.
- `src/client/components/common/ErrorBoundary.jsx` isolates chart rendering failures.

## Cross-Cutting Concerns

**Logging:** `console.log`/`console.error` in `server.js`, `src/client/services/api.js`, and `src/client/components/common/ErrorBoundary.jsx`.
**Validation:** Domain validation lives primarily in services, with some form-level checks in `src/client/components/Products/ProductForm.jsx`.
**Authentication:** Not detected.
**Soft Delete:** Sequelize `paranoid` models plus `/deleted` and `/restore/:id` endpoints in the slice routers.
**Configuration:** Runtime settings come from `.env` via `dotenv`; database mapping is centralized in `src/config/database.js` and `.sequelizerc`.

---

*Architecture analysis: 2026-04-24*
