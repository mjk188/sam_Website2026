# Sam (सम्) — website

> **© 2026 Sam Foundation. All rights reserved. Proprietary — not open source.**
> Everything in this repository (code, text, photographs, videos, posters, logos and design) is the exclusive
> property of Sam Foundation. Any copying, reuse or redistribution without prior written permission is strictly
> prohibited and unlawful. See [LICENSE](LICENSE). Report misuse via [SECURITY.md](SECURITY.md).

Website of **Sam Foundation** (Sam / CollectiveSamm), a heritage collective working across
Culture, Conversations and Conservation (संस्कृति · संवाद · संरक्षण).

Built with Vite, React, TypeScript and Tailwind CSS. There is no backend: the
site is static files plus a contact form that sends through Web3Forms.

## Pages

| Page | Path | What's on it |
|---|---|---|
| Home | `/` | Photo slideshow, what we do, the three streams, quote band |
| About Us | `/about` | Vision, mission, eight streams of work |
| Attend an Event | `/get-involved/attend` | Walk cards; each opens posters, photos and Instagram reels |
| Collaborate | `/get-involved/collaborate` | Ways to collaborate, who we work with |
| Sponsor & Contribute | `/get-involved/sponsor` | Sponsorship and individual giving (`/get-involved/donate` redirects here) |
| Gallery | `/gallery` | Looping video clips and a photo mosaic with a lightbox |
| Join the Collective | `/join` | Roles for people who want to work with us |
| Contact Us | `/contact` | Email, Instagram and a contact form |
| Terms of Use | `/terms` | Copyright and terms of use (linked from every footer) |

## Running it locally

```bash
npm install
npm run dev       # preview at http://localhost:5173
npm run build     # type-check and build the site into dist/
npm run lint
npm run preview   # serve the built site from dist/
```

## Editing content

Text and lists live in `src/data/`, not in the page files:

- `src/data/content.ts`: walks/events, the three streams, activities, collaboration types, partners
- `src/data/site.ts`: email, Instagram, Get Involved menu, contact form key
- `src/data/home.ts`: which photos the Home slideshow shows, and photos featured on other pages
- `src/data/photos.ts`: the photo catalogue (id, collection, alt text)

Media:

- Photos: `public/images/photos/pNN.jpg` (full size) and `public/images/photos/sm/pNN.jpg` (thumbnail). Add a matching `p(NN, "collection", "alt text")` line in `photos.ts`.
- Walk posters: `public/images/walks/`
- Gallery video loops: `public/videos/<name>.mp4` plus a `<name>.jpg` poster, listed in `src/components/MotionReel.tsx`

Each photo appears once across the site: anything on the Home page or inside a
walk's building shots is left out of the Gallery automatically.

## Contact form

The form posts to [Web3Forms](https://web3forms.com) using the access key in
`src/data/site.ts`, and messages arrive in the foundation's inbox. Spam guards: a hidden honeypot field,
a minimum fill time, a link limit, length limits and one message per minute per browser. If the key is
empty, the form falls back to opening the visitor's email app.

## Deploying

The site is published to **GitHub Pages** at https://samfoundation.in by the workflow in
`.github/workflows/deploy.yml` on every push to `main`. The workflow builds the site and copies
`index.html` to `404.html` so deep links like `/get-involved/attend` work. `public/CNAME` holds the domain.
