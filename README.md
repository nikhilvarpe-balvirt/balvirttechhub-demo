# Balvirt Tech Hub

Marketing site for Balvirt Tech Hub — career-focused tech training across **Java Full Stack + AI**, **NetSuite Functional**, **NetSuite Technical**, and **Generative AI**, with placement prep built into every program.

## Tech Stack

- **React 19 + Vite** — frontend
- **React Router** — client-side routing
- **Tailwind CSS v4** — styling (theme tokens defined in `src/index.css`)
- **Framer Motion** — animations
- **lucide-react** — icons
- **Vercel Serverless Function + SendGrid** — contact/enrollment form emails (`api/contact.js`)

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### Contact & Enroll forms (local email testing)

The Contact and Enroll forms both POST to `/api/contact`, which sends two emails via SendGrid: an internal notification to your team, and an auto-confirmation to whoever submitted the form.

To test this locally (no Vercel CLI needed — `npm run dev` runs the real function via a Vite plugin):

1. Copy `.env.example` to `.env`.
2. Fill in:
   - `SENDGRID_API_KEY` — from your SendGrid account
   - `SENDGRID_FROM_EMAIL` — must be a **verified sender** in SendGrid (Settings → Sender Authentication)
   - `SENDGRID_FROM_NAME` — optional, defaults to "Balvirt Tech Hub"
   - `CONTACT_TO_EMAIL` — the inbox that should receive submissions (doesn't need to be verified in SendGrid)
3. Restart `npm run dev` if it was already running (env vars are only read on startup).
4. Submit the Contact or Enroll form and check both inboxes.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```
api/                   Vercel serverless functions (contact/enroll email handling)
src/
  assets/images/       Optimized WebP images used across the site
  components/
    home/               Home-page-only sections
    layout/             Navbar, Footer, Layout
    shared/             Reusable UI (Button, Card, CustomSelect, etc.)
  data/                 Site content — courses, FAQs, site config (phone/email/social)
  hooks/                Custom hooks (per-page title/meta)
  pages/                Route-level page components
  utils/                Shared form validation logic
```

## Content Editing

Most business content lives in `src/data/`:
- `courses.js` — course catalog, curriculum, internships, capstones
- `siteConfig.js` — phone, email, WhatsApp, address, social links, nav links
- `faqs.js` — FAQ content shown on Home and Contact

Placeholder values are wrapped in `[brackets]` — search for `[` in `src/data/` to find what still needs real values filled in.

## Deployment

Deploys to **Vercel** (see `vercel.json` for SPA routing config). Add the four environment variables listed above under Project Settings → Environment Variables, then redeploy.
