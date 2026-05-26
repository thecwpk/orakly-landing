# Orakly Market — Landing (standalone)

Marketing landing page only — no database, wallet, or monorepo. Deploy on Vercel as its own project.

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this folder to a **new** GitHub repo (e.g. `orakly-landing`).
2. [vercel.com/new](https://vercel.com/new) → Import that repo.
3. Framework: **Next.js** (auto-detected). Root directory: **`.`** (repo root).
4. Deploy — no `DATABASE_URL` or Prisma required.

### Optional env

| Variable | Purpose |
|----------|---------|
| `WAITLIST_WEBHOOK_URL` | POST signups to Formspree, Zapier, etc. Without it, `/api/waitlist` still returns success (honeypot + validation only). |
| `NEXT_PUBLIC_APP_URL` | Canonical URL for metadata (Vercel sets `VERCEL_URL` automatically in production). |

## What’s included

- Hero, markets grid, how it works, why Orakly, trust, roadmap, waitlist, footer
- Navbar: Twitter, Dextool, Launch app (coming soon toast)
- Same styling and behavior as the main app landing at `/`

## Link to main app later

When the full app is live, set external links in `src/widgets/landing/lib/landing-external-links.ts` and replace coming-soon buttons with real URLs.
