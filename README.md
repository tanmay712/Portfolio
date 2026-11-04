# void — Holds indra

A personalized, interactive portfolio for **void** (`@definescloud`).

- Discord user ID: `337964487241891840`
- Support: [void@definescloud.site](mailto:void@definescloud.site)
- Application: [`PROFILE.OS-main/`](PROFILE.OS-main/)
- Replaceable avatar: [`PROFILE.OS-main/public/avatar.png`](PROFILE.OS-main/public/avatar.png)

## Deploy on Vercel

Import this repository into Vercel and set **Root Directory** to **`PROFILE.OS-main`**.
The app's `vercel.json` selects Next.js, `npm ci`, `npm run build`, and `.next` output. Choose **Node.js 22.x** in Vercel project settings. Do not use static export: Discord and GitHub require server routes.

Set `NEXT_PUBLIC_SITE_URL` to your actual deployment URL. The default `https://definescloud.site` is inferred from the support email. Add variables from the app's `.env.example` in Vercel project settings, then redeploy. Never commit secret keys. The Netlify configuration and runtime dependency have been removed.


## Run locally

```bash
cd PROFILE.OS-main
npm ci
npm run dev -- --hostname 0.0.0.0
```

Open http://localhost:3000. For production checks, run `npm run typecheck`, `npm run lint`, and `npm run build`.

## Make it yours

Replace `PROFILE.OS-main/public/avatar.png` with your own PNG, keeping the filename. A square image, at least 512 × 512 pixels, works well. The same file is used for the hero, Discord card fallback, browser icon, and social preview. Redeploy after replacing it.

Edit `data/profile.ts` for the introduction and current-focus notes. Public identity and contact defaults live in `lib/constants.ts`. No GitHub, YouTube, or Instagram account was assumed; set `NEXT_PUBLIC_GITHUB_USERNAME` to enable an optional GitHub link.

Live Discord activity requires Lanyard to monitor the configured user. The portfolio remains usable and displays the local avatar when presence is unavailable. The skills panel lists technologies used by this portfolio, not unverified personal qualifications. Project content is intentionally left ready for real work rather than fabricated projects.

The inherited music files are local listening samples, not music authored by void. Replace them with your own or appropriately licensed selections before publishing. See the app README for details.

Original template copyright and MIT license notices are retained in `PROFILE.OS-main/LICENSE`.
