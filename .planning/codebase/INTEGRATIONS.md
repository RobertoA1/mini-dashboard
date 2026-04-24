# External Integrations

**Analysis Date:** 2026-04-24

## APIs & External Services

**Internal REST API:**
- `src/client/services/api.js` calls the same-origin backend under `/api`
- Route groups:
  - `server.js` → `/api/productos`, `/api/categorias`, `/api/proveedores`, `/api/dashboard`, `/api/reports`
  - `src/slices/productos/productos.routes.js`
  - `src/slices/categorias/categorias.routes.js`
  - `src/slices/proveedores/proveedores.routes.js`
  - `src/slices/dashboard/dashboard.routes.js`
  - `src/slices/reports/reports.routes.js`
- Auth: none detected

**External asset delivery:**
- Font Awesome CSS loaded from cdnjs in `src/views/index.ejs`

**PDF generation:**
- Server-side PDF generation is local/in-process in `src/slices/reports/pdfGenerator.js`
- SDK/Client: `pdfmake`
- Auth: not applicable

## Data Storage

**Databases:**
- PostgreSQL
  - Connection: `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_HOST`, `DB_PORT`
  - Client: Sequelize in `src/models/index.js`
  - Schema/migrations: `src/migrations/`
  - Seeds: `src/seeders/`

**File Storage:**
- Local filesystem only
  - Static assets: `public/`
  - Frontend bundle output: `public/js/bundle.js`
  - Built Tailwind CSS: `public/css/tailwind.css`

**Caching:**
- None detected

## Authentication & Identity

**Auth Provider:**
- Custom / not detected
  - No login, token, session, or OAuth flow found in `server.js` or `src/client/`

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- Console logging in `server.js`, `src/client/services/api.js`, and service layers such as `src/slices/productos/productos.service.js`

## CI/CD & Deployment

**Hosting:**
- Not detected
  - App runs as an Express server from `server.js`

**CI Pipeline:**
- Not detected

## Environment Configuration

**Required env vars:**
- `PORT` (`server.js`)
- `DB_USER` (`src/config/database.js`)
- `DB_PASSWORD` (`src/config/database.js`)
- `DB_NAME` (`src/config/database.js`)
- `DB_HOST` (`src/config/database.js`)
- `DB_PORT` (`src/config/database.js`)

**Secrets location:**
- `.env` file present at repository root
- Loaded by `dotenv` in `server.js` and `src/config/database.js`

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- None detected

---

*Integration audit: 2026-04-24*
