# Technology Stack

**Analysis Date:** 2026-04-24

## Languages

**Primary:**
- JavaScript (Node.js/CommonJS) - backend entrypoint `server.js`, Sequelize models/services in `src/`, webpack config in `webpack.config.js`
- JavaScript (React/JSX) - frontend app in `src/client/`

**Secondary:**
- CSS - Tailwind entry in `src/client/styles.css`
- EJS - server-rendered shell in `src/views/index.ejs`
- SQL - raw queries in `src/slices/dashboard/dashboard.service.js` and report services

## Runtime

**Environment:**
- Node.js (version not pinned)

**Package Manager:**
- npm
- Lockfile: present (`package-lock.json`)

## Frameworks

**Core:**
- Express `^4.18.2` - HTTP server and API routing in `server.js` and `src/slices/*/*.routes.js`
- React `^18.2.0` - client UI in `src/client/`
- React Router DOM `^6.14.1` - client navigation in `src/client/App.js` and layout components
- Sequelize `^6.32.1` - ORM/models in `src/models/` and queries in `src/slices/*/*.service.js`
- EJS `^3.1.9` - HTML shell rendered from `src/views/index.ejs`
- Tailwind CSS `^3.3.2` - utility styling configured in `tailwind.config.js` and `src/client/styles.css`

**Testing:**
- Not detected

**Build/Dev:**
- Webpack `^5.88.1` / webpack-cli `^5.1.4` - bundles `src/client/index.js` to `public/js/bundle.js`
- Babel (`@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `babel-loader`) - transpiles JSX/ESNext in `webpack.config.js`
- Nodemon `^2.0.22` - development server via `npm run dev`
- PostCSS `^8.4.24`, Autoprefixer `^10.4.14`, `postcss-loader` - CSS pipeline from Tailwind
- sequelize-cli `^6.6.0` - migrations/seeds via `npm run migrate` and `npm run seed`

## Key Dependencies

**Critical:**
- Axios `^1.4.0` - API client wrapper in `src/client/services/api.js`
- Express `^4.18.2` - REST/API server in `server.js`
- Sequelize `^6.32.1` - database access layer in `src/models/index.js`
- `pg` `^8.11.1` and `pg-hstore` `^2.3.4` - PostgreSQL dialect support configured in `src/config/database.js`
- Recharts `^3.8.1` - active charting library in `src/client/components/Dashboard/BarChart.jsx` and `PieChart.jsx`
- pdfmake `^0.2.7` - server-side PDF generation in `src/slices/reports/pdfGenerator.js`

**Infrastructure:**
- dotenv `^16.3.1` - loads environment config in `server.js` and `src/config/database.js`
- cors `^2.8.5` - cross-origin middleware in `server.js`
- tailwindcss `^3.3.2`, postcss, autoprefixer - CSS build pipeline
- font-awesome `^4.7.0` - icon styles loaded in `src/views/index.ejs`
- react-dom `^18.2.0` - React mount in `src/client/index.js`
- `chart.js` `^4.5.1` and `react-chartjs-2` `^5.3.1` - installed in `package.json`, not referenced in `src/`
- puppeteer `^24.41.0` - installed in `package.json`, no in-repo source reference detected

## Configuration

**Environment:**
- Environment variables are loaded through `dotenv`
- Database config uses `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_HOST`, `DB_PORT` in `src/config/database.js`
- Server port uses `PORT` in `server.js`

**Build:**
- `webpack.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `.sequelizerc`

## Platform Requirements

**Development:**
- Node.js + npm
- PostgreSQL database reachable with the configured `DB_*` variables
- Browser runtime for the React SPA served from `src/views/index.ejs`

**Production:**
- Node.js process serving Express from `server.js`
- PostgreSQL database
- Static assets served from `public/`

---

*Stack analysis: 2026-04-24*
