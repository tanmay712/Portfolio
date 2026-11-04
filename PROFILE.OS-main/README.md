# void (@definescloud) — Holds indra

A cinematic, command-driven personal portfolio built with Next.js, TypeScript, React, Tailwind CSS, Framer Motion, Lanyard, and the browser Audio API.

## Identity

- **Name:** void
- **Username:** definescloud
- **Discord user ID:** 337964487241891840
- **Support email:** [void@definescloud.site](mailto:void@definescloud.site)
- **Default site URL:** https://definescloud.site (configurable; inferred from the support-email domain)

Public identity defaults are centralized in `lib/constants.ts`. The introduction and current-focus notes are in `data/profile.ts`; public contact links are in `data/socials.ts`. No unrelated social accounts or employment claims are included.

## Run locally

Requires Node.js 22 or newer.

```bash
npm ci
cp .env.example .env.local  # Optional; sensible public defaults are already set.
npm run dev -- --hostname 0.0.0.0
```

Open http://localhost:3000. Fonts are bundled locally through Fontsource; the build does not fetch Google Fonts.

## Checks and production

```bash
npm run typecheck
npm run lint
npm run build
npm start -- --hostname 0.0.0.0
```

## Deploy on Vercel

Import this repository into Vercel and set **Root Directory** to **`PROFILE.OS-main`**.
The app's `vercel.json` selects Next.js, `npm ci`, `npm run build`, and `.next` output. Choose **Node.js 22.x** in Vercel project settings. Do not use static export: Discord and GitHub require server routes.

Set `NEXT_PUBLIC_SITE_URL` to your actual deployment URL. The default `https://definescloud.site` is inferred from the support email. Add variables from the app's `.env.example` in Vercel project settings, then redeploy. Never commit secret keys. The Netlify configuration and runtime dependency have been removed.

### Environment variables

See `.env.example`. Only public values use the `NEXT_PUBLIC_` prefix. `GITHUB_TOKEN` is optional and stays server-side. Never commit `.env.local` or real secrets.

GitHub links are hidden until `NEXT_PUBLIC_GITHUB_USERNAME` is set to a real account. `/api/github` returns `available: false` without making a request when unconfigured. Setting a username enables the public link and API; the API fetches public profile information and the six most recently updated repositories.

### Discord presence

The configured user ID is `337964487241891840`. Lanyard must be monitoring this account for live status, custom status, activities, or Spotify information to appear. If the user is not monitored or the service cannot be reached, the site shows a standby state and the local avatar instead of failing. See [Lanyard's setup documentation](https://github.com/Phineas/lanyard).

Presence polls `/api/discord` every 15 seconds through a server-side proxy. No browser request goes directly to the upstream endpoint, and no public WebSocket can overwrite custom API data.

Set `LANYARD_API_URL` to a users base URL, a complete user URL, or a URL containing `{userId}`. Existing `NEXT_PUBLIC_LANYARD_API_URL` settings are supported as a legacy fallback; prefer the server-only setting. The upstream must return the standard Lanyard `{ success: true, data: ... }` shape.

Public Lanyard presence needs **no API key**. For a protected custom endpoint, set server-only `LANYARD_API_KEY`. Defaults are `LANYARD_API_KEY_HEADER=Authorization` and `LANYARD_API_KEY_PREFIX=Bearer`. For `x-api-key: <key>`, set the header to `x-api-key` and the prefix to an empty value. For raw Authorization, leave the prefix empty. Follow your provider's requirements; never use `NEXT_PUBLIC_*` for credentials. Errors never return upstream messages or keys. Authenticated custom WebSockets are not used. The Discord link always uses your configured user ID.

## Replace the avatar

The single canonical file is **`public/avatar.png`**, served at **`/avatar.png`**. Replace it with your own PNG, keeping the same filename. Use a square image, at least 512 × 512 pixels. It is used by:

- Hero portrait
- Discord card (including the offline/unavailable state)
- Browser and Apple touch icons
- Open Graph and Twitter preview images

Rebuild/redeploy after replacing the image. Social platforms may cache the old preview; refresh it with their sharing debuggers if needed.

## Projects, skills, and focus

The projects panel is intentionally honest about work not yet published. Add real projects when ready. `skills` and `stack` describe the technologies used by this site, not a claim about void's personal expertise. `experience` shows current-focus notes rather than invented employment history. Edit these sources as your portfolio grows.

## Local music

The template's audio files remain in `public/music/`, with artwork in `public/music/artwork/`. They are listening samples, **not tracks authored by void**. Replace them with your own or appropriately licensed tracks and update `data/music.ts` with accurate titles, artists, album names, paths, and durations. The player only starts after user interaction and does not require Spotify.

Controls include play/pause, previous/next, shuffle, repeat, seeking, and volume. See `public/music/README.md`.

## Terminal commands

`help` `about` `whoami` `projects` `skills` `stack` `experience` `contact` `socials` `discord` `github` `status` `neofetch` `history` `date` `pwd` `ls` `open` `visit` `music` `nowplaying` `play` `pause` `resume` `next` `previous` `theme` `matrix` `coffee` `fortune` `ascii` `secret` `sudo` `konami` `42`

Commands are case-insensitive and support aliases, TAB autocomplete, and session history. Try `whoami`, `contact`, or `open discord`. The interface supports mobile layouts and reduced-motion preferences.

## License

The original MIT license and copyright notice are retained in `LICENSE`.
