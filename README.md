# Ledger

A self-hosted personal finance app — a YNAB / Monarch clone — built with
**React + TypeScript + Vite**, **Supabase** (auth + Postgres), and **Tailwind CSS**
(dark mode by default).

## Getting started

```bash
npm install
cp .env.example .env   # fill in your Supabase + Plaid values
npm run dev            # Vite dev server (client)
npm run server         # /server layer (Plaid + service-role calls)
```

| Script              | What it does                                             |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server.                              |
| `npm run build`     | Type-check and build the client for production.         |
| `npm run preview`   | Preview the production build.                           |
| `npm run server`    | Run the `/server` backend layer (tsx watch).            |
| `npm run typecheck` | Type-check the client and server projects.              |

## Folder structure

```
ledger/
├─ src/
│  ├─ components/   Reusable UI (e.g. Layout shell + sidebar)
│  ├─ routes/       Page-level route components (Dashboard, Settings)
│  ├─ hooks/        React hooks (useAuth, useTheme)
│  ├─ lib/          Client singletons & helpers (supabase, env, api)
│  └─ types/        Shared domain types (Account, Transaction, …)
├─ server/          Trusted backend: Plaid + Supabase service-role calls
├─ supabase/
│  └─ functions/    Supabase Edge Functions (Deno) — privileged work
├─ .env.example     Documented env-var template (client vs server-only)
└─ vite.config.ts   Vite config, "@/" alias, dev proxy to /server
```

## Security model

The browser only ever holds **public** values: the Supabase URL and the anon
key (which is safe because access is gated by Row Level Security). Every
privileged operation — Plaid calls and anything needing the Supabase
**service-role** key — runs in `/server` or a Supabase Edge Function, behind the
`/api` boundary. Server secrets are read from non-`VITE_` environment variables,
which Vite refuses to expose to client code, so they can never be bundled into
the front end.
