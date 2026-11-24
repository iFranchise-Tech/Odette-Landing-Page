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

## Cloudflare Workers deployment (manual Wrangler workflow)

This existing Next.js App Router project uses `@opennextjs/cloudflare`. OpenNext produces the Worker entry point at `.open-next/worker.js` and static assets in `.open-next/assets`; Wrangler deploys those outputs as the separate `odette-landing-page` Worker. `nodejs_compat` is enabled for the server route and email integration. This keeps the current Next.js application and its behavior intact.

Wrangler is installed locally in this repository. Use the scripts below from the project root; they do not use GitHub Actions or Cloudflare's Git integration.

### 1. Install dependencies and authenticate

```bash
npm ci
npx wrangler login
npx wrangler whoami
```

Wrangler uses the account selected during authentication; no account ID is stored in this repository.

### 2. Run locally and preview the Worker

```bash
npm run dev
npm run cf:preview
```

`npm run dev` runs the regular Next.js development server at `http://localhost:3000`. `npm run cf:preview` builds the OpenNext Worker and starts Wrangler's local runtime, normally at `http://localhost:8787`.

### 3. Build and check the deployment package

```bash
npm run cf:build
npm run cf:dry-run
```

`cf:dry-run` rebuilds the Worker and asks Wrangler to validate the deployment bundle without uploading it.

### 4. Configure runtime secrets

The contact API needs `GOOGLE_SCRIPT_URL`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_NOTIFICATION_EMAIL`. Keep these values in a local, ignored `.worker-secrets` file containing only those key/value pairs, or add them interactively with `npx wrangler secret put <NAME>`. Never commit that file or put secret values in `wrangler.jsonc`.

For an existing Worker, upload the local secret file before deploying:

```bash
npx wrangler secret bulk .worker-secrets
```

For a first deployment, deploy once, add the secrets, then deploy the application again. Wrangler applies each secret update as a Worker deployment.

`NEXT_PUBLIC_*` settings are build-time values. Set the required public values in a local ignored `.env.local` before building; `.env.example` lists the supported names. These values are embedded into the client build and must not contain credentials or private tokens.

### 5. Deploy manually

```bash
npm run cf:deploy
```

This rebuilds the OpenNext bundle, then runs the locally installed `wrangler deploy` command for only the `odette-landing-page` Worker. `wrangler.jsonc` enables its `workers.dev` URL and configures `odette.ifranchise.in` as its Cloudflare custom domain. A deployment using this config applies that custom-domain route; this repository setup does not itself perform a deployment or edit DNS.

### Cloudflare configuration

- Worker entry point: `.open-next/worker.js`
- Static assets directory: `.open-next/assets` (binding: `ASSETS`)
- Adapter config: `open-next.config.ts`
- Wrangler config: `wrangler.jsonc`
- Local-only values: `.env.local`, `.dev.vars`, and `.worker-secrets` are ignored by Git

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
