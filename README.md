# void — PROFILE.OS

A personalized, interactive portfolio for **void** (`@definescloud`).

- Discord user ID: `337964487241891840`
- Support: [void@definescloud.site](mailto:void@definescloud.site)
- Application: [`PROFILE.OS-main/`](PROFILE.OS-main/)
- Replaceable avatar: [`PROFILE.OS-main/public/avatar.png`](PROFILE.OS-main/public/avatar.png)

## Deploy on Netlify

Import this repository into Netlify. The root [`netlify.toml`](netlify.toml) sets the application base directory, Node.js 22, the production build command, and the Next.js Runtime. The publish directory is intentionally `.next`, **not** `out`: the portfolio includes Next.js API routes.

Set `NEXT_PUBLIC_SITE_URL` in Netlify's environment variables to the actual site URL. The default, `https://definescloud.site`, is inferred from the supplied support-email domain. Redeploy after changing public environment variables. See [`PROFILE.OS-main/.env.example`](PROFILE.OS-main/.env.example) for the other optional settings.

The Next.js Runtime is already included in the app's dependencies and configured in `netlify.toml`; do not add a second copy through the Netlify UI.

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
