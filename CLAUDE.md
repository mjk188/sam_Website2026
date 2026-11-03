# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website of **Sam Foundation** (Sam / सम् / CollectiveSamm), a heritage collective (Sanskriti · Samvad · Sanrakshan). It started as a hand-built replica of the Lovable prototype (https://sam-sanskriti-samvad.lovable.app/) in its **v2 "Sam" look** (maroon pill CTAs, teal mono nav, serif headlines) and has since been reworked with real photos, walks and video. The v1 "CollectiveSamm" look (black strip, boxed logo, black CTAs) is deliberately not used.

Read these first; they hold the contribution conventions and the current project state:

@docs/AGENT_NOTES.md
@docs/STATUS.md

## Commands

```bash
npm install
npm run dev       # Vite dev server (listens on localhost, IPv6 ::1)
npm run build     # tsc -b type-check + vite build → dist/
npm run lint      # eslint (flat config)
npm run preview   # serve dist/
```

There is no test suite. Verify changes with `npm run build` and `npm run lint`, and visually at phone (390px) and laptop (1280–1920px) widths.

## Architecture

- Vite + React 18 + TypeScript + Tailwind v3 + react-router-dom v6 (BrowserRouter). Deploying needs an SPA fallback so deep links resolve to `index.html`.
- `src/App.tsx` defines every route under `components/Layout.tsx` (sticky `Header`, `<Outlet/>`, `Footer`; scrolls to top on route change). `/get-involved/donate` redirects to `/get-involved/sponsor#contribute`.
- **Copy lives in `src/data/`, not in the pages.**
  - `content.ts`: `EVENTS` (walks, typed `Walk`: poster, cover, photos, details, Instagram `videos`), `PILLARS`, activities, collaboration types, partners.
  - `site.ts`: `EMAIL` (assembled at runtime from parts so scrapers can't harvest it; never write it as a plain string anywhere in the repo; no phone number is published), `ORG_NAME`, `SITE_DOMAIN`, `SOCIALS`, `GET_INVOLVED`, triads, `WEB3FORMS_KEY`, and the `mailto()` helper.
  - `legal.ts`: `COPYRIGHT_NOTICE` (footer row on every page) and `TERMS` (the `/terms` page).
  - `home.ts`: `HOME_SLIDES` (hero slideshow order) and `FEATURED_IDS` (photos used on Home/About/Sponsor/Collaborate).
  - `photos.ts`: photo catalogue via `p(n, collection, alt)`; use `photo(id)`, `thumb(id)`, `byId(id)` rather than hard-coded paths.
- **One appearance per photo.** `pages/Gallery.tsx` excludes `HOME_SLIDES`, `FEATURED_IDS`, `BUILDINGS_ONLY` (architecture-only shots, which stay inside their walks) and `HIDDEN` (removed by hand). Add new building-only photos to `BUILDINGS_ONLY`.
- **Walks:** `WalkCard` uses CSS subgrid (`row-span-5 grid-rows-subgrid`) so titles and links align across a row; `WalkModal` shows poster, details, reel cards (`ReelModal`, Instagram embed) and a photo masonry that opens `Lightbox`.
- **Contact form** posts `FormData` (not JSON, to avoid a CORS preflight) to Web3Forms. Web3Forms rejects server-side/curl requests and headless-Chrome user agents, so test it in a real browser or with a normal UA. Spam guards in `pages/Contact.tsx`: a hidden `botcheck` honeypot and a <3 s fill time both fake success without sending; more than 2 links is rejected; `maxLength` limits; one send per minute per browser (localStorage). With an empty key it falls back to `mailto()`. `?about=<text>` pre-fills the message (walk "Drop a message" buttons use it). Other CTAs use `mailto()`.
- **Copyright and security:** all content is proprietary to Sam Foundation (LICENSE, SECURITY.md, footer notice, `/terms`). `Layout` blocks the context menu on images and videos, and `index.css` disables media drag and long-press save. `vite.config.ts` injects a Content-Security-Policy meta tag at **build only** (the dev server needs inline scripts). If you add a new external service (script, API, iframe, font), add its origin to `CSP` there or it will be blocked in production.
- Design tokens are in `tailwind.config.js`: colors `ink`, `muted`, `faint`, `maroon`, `teal` (`.bright`/`.deep`), `mist`, `line`, `blush`, `moss` (green intro text); fonts `serif` (Fraunces), `sans` (DM Sans), `mono` (JetBrains Mono), `deva` (Tiro Devanagari Hindi), plus Kurale for the logo's स. Fonts load from Google Fonts in `index.html`; `maxWidth.site` is 1240px. Shared classes in `src/index.css`: `.container-site`, `.eyebrow`, `.display`, `.accent`, `.lead`, `.btn-primary`, `.link-mono`.
- Reusable blocks: `Wordmark` (SVG sun-dot over स in Kurale, divider, "Saṃ"; `sm` header / `lg` footer), `NumberedGrid`, `GetInvolvedIntro` (shared header and tabs on `/get-involved/*`), `DiamondBand`, `HeroCarousel` (3 s crossfade, loads one slide ahead), `MotionReel`.
- Watermarks (large faint स and diamond) on Home and Footer are positioned inside a `max-w-site` box, so they sit in the same place on every laptop width. The Home hero image height is `min(680px, 100svh − header − padding)` so the hero fits any laptop screen.

## Responsive conventions

- Phone and laptop layouts are tuned separately. Base (unprefixed) classes are the phone layout; `md:`/`lg:` classes carry the laptop values. When asked to change "phone only", change base classes and pin the old value with `md:`; never alter `md:`/`lg:` values in that case.
- On phones: the hero slideshow is a full-bleed 4:3 banner above the text; walks, streams of work, collaboration types and the three pillars use 2–3 column grids; the Gallery uses 3 columns; the footer collapses to single lines of links.

## Media

- Photos: `public/images/photos/pNN.jpg` (≤1400px, recompressed) and `sm/pNN.jpg` thumbnails (720px). Convert HEIC with `sips`; crop/resize with ffmpeg (it honours EXIF rotation). Instagram-export squares have white rounded borders: crop ~920–940px from 70–80px in.
- Walk posters: `public/images/walks/`.
- Video loops: `public/videos/<name>.mp4` + `<name>.jpg` poster, listed in `CLIPS` in `MotionReel.tsx` (interleaved so clips from the same place never sit side by side; a lone last clip on phones is widened). Cut with ffmpeg: `-an -map_metadata -1` (drops GPS and device data), scale+crop to 600×800, `-crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart`, ~6 s, ≤2 MB. iPhone HEVC/MOV sources convert fine this way.

## Deploying

`.github/workflows/deploy.yml` builds on every push to `main`, copies `dist/index.html` to `dist/404.html` (GitHub Pages has no SPA fallback), and publishes to GitHub Pages. `public/CNAME` holds `samfoundation.in`; canonical and Open Graph URLs in `index.html`, plus `public/robots.txt` and `public/sitemap.xml`, use that domain. Add new routes to `sitemap.xml`.

## Sharing a preview

`vite.config.ts` allows `.trycloudflare.com` hosts. A temporary public link: `cloudflared tunnel --url http://[::1]:5173` (must target `[::1]`, since Vite listens on IPv6 localhost). The link dies when the laptop sleeps.

Open items and known content gaps are tracked in `docs/STATUS.md`; update it when something lands.
