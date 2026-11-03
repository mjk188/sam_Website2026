# Project status

_Last updated: 3 November 2026_

## Where things stand

- All pages are built and on `main`. The repository is **public** but proprietary (© Sam Foundation, see LICENSE), and
  is hosted free on **GitHub Pages** (Source: GitHub Actions; first deploy succeeded 2 Nov 2026). History was reset
  to a single clean commit on 2 Nov 2026; the pre-reset history exists only in the local branch `backup/pre-public`.
- Repo hardening is on: secret scanning plus push protection, Dependabot alerts, ruleset "Protect main" (no
  force-push or deletion), Issues/Wiki/Projects/Discussions off, read-only Actions token, GitHub-owned actions only.
- **Domain:** `samfoundation.in` is the chosen address (to be purchased). `public/CNAME` already holds it.
  `samfoundation.org` (parked at GoDaddy, possibly for sale) and `samfoundation.com` (expires 30 Nov 2026) belong
  to others.
- Publishing is automatic via `.github/workflows/deploy.yml` on every push to `main`. Until the domain is connected,
  the Pages address `mjk188.github.io/sam_Website2026/` shows a blank page, because the site expects to live at a
  domain root.
- The contact form sends live through Web3Forms, with spam guards (honeypot, 3-second minimum, ≤2 links, length
  limits, one per minute). Tested 2 Nov 2026.
- Copyright: footer notice on every page, `/terms` page, LICENSE, SECURITY.md, a right-click/drag deterrent on media,
  and a Content-Security-Policy on the published build.
- Privacy: all video metadata (including GPS) stripped; photos carry no EXIF; contact details are assembled at runtime.

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

- Buy `samfoundation.in`. Set DNS: `A` records for `@` → 185.199.108.153, .109.153, .110.153, .111.153; `CNAME` `www` →
  `mjk188.github.io`. Then set the custom domain in Settings → Pages (or `gh api -X PUT repos/mjk188/sam_Website2026/pages -f cname=samfoundation.in`)
  and tick Enforce HTTPS.
- Optional: hCaptcha on the contact form (Web3Forms free tier). Needs a manual test in a real browser.
- Consent check for photos showing children; blur or remove if needed.
- Manifesto page ("Read our manifesto" still points to `/about`). Donation channels for "Contribute".
- Higher-quality originals for the Sunder Nursery and Gardens of Paradise posters.
- Puppet clip (`public/videos/puppet-stall.mp4`) crops out the dancing dolls; recut needs the original IMG_9310.MOV
  (no longer on the laptop), or remove the clip.
- Attend page intro line: the owner proposed "…from intimate groups to large corporate events"; wording not chosen yet.
- Restore point: git tag `checkpoint-2026-11-03` (the site before the 3 Nov edits).
