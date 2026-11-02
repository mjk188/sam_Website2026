# Contribution conventions

How changes to this site are made and checked.

## Making changes

- Content and copy live in `src/data/`; prefer editing data over page markup.
- Changes are reviewed visually. After each change, state what changed, where to look, and whether it affects the
  phone layout, the laptop layout or both.
- "Reverse" means undo only the most recent change.

## Phone vs laptop

Phone and laptop layouts are tuned separately. During a phone-focused pass, layout changes apply only below the `md`
breakpoint: change the base (unprefixed) classes and keep the laptop value pinned with `md:`/`lg:`. If a request could
apply to either, say which one was changed.

Check phone layouts with a 390px-wide mobile-emulated browser (for example puppeteer-core with `isMobile: true`).
Plain headless Chrome can't render narrower than about 500px.

## Scope

Documents pasted for discussion (for example proposals) are not site content. Don't add them to the site unless
asked.

## Safety

- Don't rewrite git history, force-push or delete media without explicit confirmation.
- Back up before bulk-processing photos or video.
- Strip metadata (GPS, device, dates) from new media before committing: `ffmpeg -map_metadata -1 -c copy` for video;
  resizing through ffmpeg drops EXIF from JPGs.
- Never commit plain contact details: `EMAIL` and `WHATSAPP_URL` are assembled at runtime in `src/data/site.ts`.
