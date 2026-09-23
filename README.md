# ARK Big Ideas 2026 — Own What’s Next

Interactive single-page explainer of **ARK Invest Big Ideas 2026**. All chart figures come from `public/data/bigideas2026-chart-data.json` (same payload as `src/data/bigideas2026-chart-data.json`). Nothing here is investment advice.

## Live site

- **Public production URL:** https://ark-big-ideas-2026-six.vercel.app
- **Vercel project:** `ark-big-ideas-2026` on Yoon Conner’s personal account (`yoonconner`)
- **GitHub:** https://github.com/yoonconner/ark-big-ideas-2026
- Deployment Protection is off. Anyone can open the production URL without login.

The shorter `ark-big-ideas-2026.vercel.app` hostname is already taken by a different app, so Vercel assigned `ark-big-ideas-2026-six.vercel.app` to this project.

## What’s on the page

1. Hero with the five-platform frame and a research disclaimer
2. Horizontal 2030 opportunity-size bars — click a bar for the linked theme ($34T robotaxis, etc.)
3. Eleven theme cards — expand for the one-liner and linked tickers
4. Bitcoin / digital-asset mix plus bear / base / bull digital-gold penetration
5. ARKK top holdings (Sep 22, 2026) with weights and Big Idea chips
6. Worker-productivity and broader-opportunity scenario bars

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start -- --port 43123
```

## Stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui. Charts are SSR HTML/SVG (horizontal bars + donut).

## Deploy

Production is already live from GitHub `main` (`yoonconner/ark-big-ideas-2026`) to Vercel project **ark-big-ideas-2026**. No environment variables are required.

To redeploy from a machine logged into that Vercel account:

```bash
npm i -g vercel
vercel login
vercel link --yes --project ark-big-ideas-2026
vercel --prod --yes
```
