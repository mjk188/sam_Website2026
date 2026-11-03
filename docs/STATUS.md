# Project status

_Last updated: 3 November 2026_

## Where things stand

- All pages are built and on `main`. The repository is **public** but proprietary (© Sam Foundation, see LICENSE), and
  is hosted free on **GitHub Pages** (Source: GitHub Actions; first deploy succeeded 2 Nov 2026). History was reset
  to a single clean commit on 2 Nov 2026; the pre-reset history exists only in the local branch `backup/pre-public`.
- Repo hardening is on: secret scanning plus push protection, Dependabot alerts and security updates (monthly
  version checks in `.github/dependabot.yml`), CodeQL code scanning (0 alerts), private vulnerability reporting,
  ruleset "Protect main" (no force-push or deletion), Issues/Wiki/Projects/Discussions off, read-only Actions token,
  GitHub-owned actions only, pinned to commit SHAs (required by repo setting). `npm audit`: 0 vulnerabilities
  (React Router 7, Vite 8, ESLint 10; `minimatch` forced to 11 via `overrides`). Build runs on Node 24.
- TLS: Let's Encrypt certificate (auto-renewed by GitHub), TLS 1.2/1.3 only, HTTPS enforced, www → apex redirect.
  GitHub Pages can't send custom headers (no HSTS); the CSP is a meta tag.
- **Live at https://samfoundation.in** (bought 3 Nov 2026 at Hostinger for 3 years; DNS in Hostinger: four `A`
  records for `@` → 185.199.108–111.153, `CNAME` `www` → `mjk188.github.io`; custom domain set in GitHub Pages).
  Turn off auto-renew on Hostinger's free 1-month hosting add-on (not used). `samfoundation.org` (parked at GoDaddy, possibly for sale) and `samfoundation.com` (expires 30 Nov 2026) belong
  to others.
- Publishing is automatic via `.github/workflows/deploy.yml` on every push to `main`. The site expects to live at
  a domain root, so only the domain address works.
- The contact form sends live through Web3Forms, with spam guards (honeypot, 3-second minimum, ≤2 links, length
  limits, one per minute). Tested 2 Nov 2026.
- Copyright: footer notice on every page, `/terms` page, LICENSE, SECURITY.md, a right-click/drag deterrent on media,
  and a Content-Security-Policy on the published build.
- Privacy: all video metadata (including GPS) stripped; photos carry no EXIF; the email is assembled at runtime;
  no phone number is published (walk "Drop a message" buttons go to the contact form, 3 Nov 2026).

## Content on the site

- **Home order:** banner → What we do (mission + "Eight interlinked streams", See all → /about) → How we do it (three
  pillars) → Why we do it ("The future has no roots without the past.") → quote band.
- **Navigation:** Home · About Us · Gallery · Attend an Event · Get Involved (Collaborate, Sponsor & Contribute) ·
  Contact Us. The Attend page is titled संवाद | Samvaad. The footer shows only Attend an Event (Samvaad) and Follow.
- **About:** Vision plus a shorter mission ("We work to keep India's heritage alive…"); Home uses the longer mission.

- **Walks** (Attend page, in this order): Quwwat-e-Qutub, Sunder Nursery, Safdarjung Tomb, Peepal ki Chhanv Mein
  (theatre, with 4 Instagram reels), Hauz-e-Khas (20 Sep 2026, 10:30 AM), Gardens of Paradise (लोधी गार्डन),
  Humayun's Tomb, Qalb-e-Sufiya (Nizamuddin Dargah), Kingsway to Kartavyapath.
- **Gallery:** 18 looping video clips plus the photo mosaic. Photos removed by hand are listed in `HIDDEN` in
  `src/pages/Gallery.tsx`.

## Open items

- HTTPS is enforced (3 Nov 2026). Verify the Hostinger registration email. Optional: Google Search Console with `sitemap.xml`; email forwarding for the domain.
- In Hostinger: turn on DNSSEC and the domain transfer lock; optionally a `CAA` record
  `0 issue "letsencrypt.org"`. Two-factor login on the GitHub and Hostinger accounts.
- Optional: hCaptcha on the contact form (Web3Forms free tier). Needs a manual test in a real browser.
- Manifesto page ("Read our manifesto" still points to `/about`). Donation channels for "Contribute".
- Higher-quality originals for the Sunder Nursery and Gardens of Paradise posters.
- Puppet clip (`public/videos/puppet-stall.mp4`) crops out the dancing dolls; recut needs the original IMG_9310.MOV
  (no longer on the laptop), or remove the clip.
- Attend page intro line: the owner proposed "…from intimate groups to large corporate events"; wording not chosen yet.
- Restore point: git tag `checkpoint-2026-11-03` (the site before the 3 Nov edits).
