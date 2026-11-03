# void (@definescloud) — PROFILE.OS

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

## Netlify

Use the **repository root's `netlify.toml`** when importing the repository. It configures:

- Base directory: `PROFILE.OS-main`
- Build command: `npm run build`
- Publish directory: `.next` (processed by the Next.js Runtime)
- Node.js: 22
- Next.js Runtime: `@netlify/plugin-nextjs`, installed from this package's lockfile

Do not select static export or set the publish directory to `out`; the Discord and optional GitHub API routes require the Next.js runtime. Do not install a second Next.js Runtime plugin in the Netlify UI.

Set `NEXT_PUBLIC_SITE_URL` to the actual deployment URL for canonical and social-preview metadata. If using a temporary `*.netlify.app` URL, use that URL until the custom domain is ready. Public `NEXT_PUBLIC_*` values are embedded at build time, so redeploy after changing them.

If configuring a site manually instead of importing the repository root, use `PROFILE.OS-main` as the package/base directory and replicate the root TOML settings relative to that directory.

### Environment variables

See `.env.example`. Only public values use the `NEXT_PUBLIC_` prefix. `GITHUB_TOKEN` is optional and stays server-side. Never commit `.env.local` or real secrets.

GitHub links are hidden until `NEXT_PUBLIC_GITHUB_USERNAME` is set to a real account. `/api/github` returns `available: false` without making a request when unconfigured. Setting a username enables the public link and API; the API fetches public profile information and the six most recently updated repositories.

### Discord presence

The configured user ID is `337964487241891840`. Lanyard must be monitoring this account for live status, custom status, activities, or Spotify information to appear. If the user is not monitored or the service cannot be reached, the site shows a standby state and the local avatar instead of failing. See [Lanyard's setup documentation](https://github.com/Phineas/lanyard).

Presence uses Lanyard's REST endpoint for the initial snapshot and its WebSocket for updates. The server snapshot is also available at `/api/discord`. The displayed Discord profile link always uses the configured user ID.

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
