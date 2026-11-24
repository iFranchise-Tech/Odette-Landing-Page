# Odette Franchise Landing Page

Premium conversion-focused landing page for the Odette Franchise Opportunity, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Build

```bash
npm run build
npm start
```

## Cloudflare Workers deployment

This Next.js App Router project uses the OpenNext Cloudflare adapter and deploys as a Cloudflare Worker with static assets. Keep production secrets out of source control.

```bash
npm run cf:preview
npm run cf:deploy
```

Before deploying, authenticate Wrangler with `npx wrangler login`. Configure `GOOGLE_SCRIPT_URL` and `RESEND_API_KEY` as Worker secrets. Set non-secret production values such as `RESEND_FROM_EMAIL` and `CONTACT_NOTIFICATION_EMAIL` in Worker settings. `NEXT_PUBLIC_*` values are read during the build and must be present in the build environment.

The Worker uses `nodejs_compat` for the existing Next.js server route and email integration. Its temporary `*.workers.dev` URL can be checked before attaching `odette.ifranchise.in` as a custom domain.

## Troubleshooting

If you see a runtime error like `Cannot find module './611.js'`, the local Next.js cache is stale. Run:

```bash
npm run dev:clean
```

Or manually:

```bash
npm run clean
npm run dev
```

Only run one dev server at a time (do not start `npm run dev` in multiple terminals).
