# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single-package **Vite + React 19 + TypeScript** marketing SPA (`qubain`) for Florida residential/investment land lots. No backend, database, or Docker services. Lead capture is a client-side inquiry form only (`action="#"`).

### Services

| Service | Port | Command |
|---------|------|---------|
| Vite dev server | 5173 | `npm run dev` (add `-- --host 127.0.0.1` if binding off localhost is needed) |
| Vite preview (prod build) | 4173 | `npm run build && npm run preview` |

### Standard commands

See `package.json` scripts: `dev`, `build` (`tsc -b && vite build`), `lint`, `preview`. There is no `test` script.

### Lint / build notes

- **`npm run lint`** currently reports ESLint errors in app and shadcn UI files (unused imports, `inquiry` component naming vs hooks rule, carousel effect rule). **`npm run build`** still succeeds.
- Production build may log a **lightningcss** warning for `@theme inline` in CSS; build completes.

### Dev server

Prefer a **tmux** session (e.g. `vite-dev-server`) for long-running `npm run dev`. After `npm install`, restart the dev server if new dependencies were added—Vite HMR does not always pick up new packages without a restart.

### Hello-world verification

1. Open http://127.0.0.1:5173/
2. Scroll through Hero → Opportunities → Trusted → Inquiry
3. Fill the inquiry form and click **Submit Inquiry** (no backend; no success UI yet)

### Secrets

None required for local development.
