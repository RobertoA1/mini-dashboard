# Codebase Structure

**Analysis Date:** 2026-04-24

## Directory Layout

```text
project-root/
├── .planning/          # Codebase mapping docs
├── public/             # Built static assets served by Express
├── src/                # Application source code
├── logs/               # Runtime log files
├── server.js           # Node/Express entrypoint
├── package.json        # Scripts and dependencies
├── webpack.config.js   # Client bundle config
├── tailwind.config.js  # Tailwind theme/content config
└── .sequelizerc        # Sequelize CLI path mapping
```

## Directory Purposes

**`.planning/`:**
- Purpose: Repository planning and codebase analysis output.
- Contains: Markdown documentation.
- Key files: `.planning/codebase/ARCHITECTURE.md`, `.planning/codebase/STRUCTURE.md`

**`public/`:**
- Purpose: Static files served directly by `server.js`.
- Contains: Generated JavaScript and CSS bundles.
- Key files: `public/js/bundle.js`, `public/css/tailwind.css`

**`src/`:**
- Purpose: Application source for backend, client, database, and views.
- Contains: `client`, `config`, `migrations`, `models`, `seeders`, `slices`, `views`.
- Key files: `src/models/index.js`, `src/client/index.js`, `src/views/index.ejs`

**`logs/`:**
- Purpose: Runtime logs.
- Contains: Log files.
- Key files: `logs/error.log`, `logs/reporter.log`

## Key File Locations

**Entry Points:**
- `server.js`: Express bootstrap and API registration.
- `src/client/index.js`: React application bootstrap.
- `src/views/index.ejs`: HTML shell loaded by Express.

**Configuration:**
- `package.json`: scripts, dependencies, and package metadata.
- `webpack.config.js`: bundles client code into `public/js/bundle.js`.
- `tailwind.config.js`: Tailwind content paths and theme colors.
- `.sequelizerc`: Sequelize CLI path aliases for `src/config`, `src/models`, `src/migrations`, and `src/seeders`.
- `src/config/database.js`: environment-specific PostgreSQL config.

**Core Logic:**
- `src/slices/productos/*`: product CRUD and filter endpoints.
- `src/slices/categorias/*`: category CRUD and soft-delete endpoints.
- `src/slices/proveedores/*`: provider CRUD and soft-delete endpoints.
- `src/slices/dashboard/*`: KPI aggregation endpoints.
- `src/slices/reports/*`: report data assembly and PDF generation.
- `src/models/*.js`: Sequelize entity definitions.

**Client UI:**
- `src/client/App.js`: React Router map for pages.
- `src/client/components/Layout/*`: app shell, sidebar, and header.
- `src/client/components/Dashboard/*`: dashboard widgets and charts.
- `src/client/components/Products/*`: product listing, form, filters, deleted items.
- `src/client/components/Categories/*`: category listing and form.
- `src/client/components/Providers/*`: provider listing and form.
- `src/client/components/Reports/*`: PDF report triggers.
- `src/client/components/common/*`: reusable UI primitives.

**Database Schema:**
- `src/migrations/*`: table creation scripts.
- `src/seeders/*`: demo data loaders.

## Naming Conventions

**Files:**
- Feature modules use `*.routes.js`, `*.controller.js`, and `*.service.js` inside `src/slices/<feature>/`.
- React components use PascalCase filenames such as `ProductList.jsx`, `Layout.jsx`, and `ErrorBoundary.jsx`.
- Sequelize models use singular PascalCase filenames such as `Producto.js` and `Categoria.js`.

**Directories:**
- Feature folders use lowercase plural names under `src/slices/` for backend domains.
- React UI folders use PascalCase feature groupings under `src/client/components/`.

## Where to Add New Code

**New Feature API:**
- Primary code: `src/slices/<feature>/`
- Tests: Not detected in this repository.

**New React Page/Widget:**
- Implementation: `src/client/components/<Feature>/`
- Router wiring: `src/client/App.js`

**Shared UI Helpers:**
- Shared helpers: `src/client/components/common/`

**New Database Entity:**
- Model: `src/models/<Entity>.js`
- Migration: `src/migrations/<timestamp>-create-<entity>.js`
- Seed data: `src/seeders/<timestamp>-demo-<entity>.js`

**New Static Asset Output:**
- Client bundle output: `public/js/`
- Compiled CSS output: `public/css/`

## Special Directories

**`src/client/components/common/`:**
- Purpose: Shared presentational utilities used across multiple pages.
- Generated: No
- Committed: Yes

**`src/slices/reports/`:**
- Purpose: API endpoints and PDF assembly for report downloads.
- Generated: No
- Committed: Yes

**`public/`:**
- Purpose: Generated assets consumed by the browser.
- Generated: Yes
- Committed: Yes

**`logs/`:**
- Purpose: Application log output.
- Generated: Yes
- Committed: Yes

---

*Structure analysis: 2026-04-24*
