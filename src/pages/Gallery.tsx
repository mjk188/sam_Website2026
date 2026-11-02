import { useState } from "react";
import Lightbox from "../components/Lightbox";
import MotionReel from "../components/MotionReel";
import { FEATURED_IDS, HOME_SLIDES } from "../data/home";
import { PHOTOS, photo, thumb, type Photo } from "../data/photos";

// Twelve tiles that exactly fill a 12-column x 6-row block (laptop) or a 6-column x 6-row block (phone),
// in an order grid-flow-dense places without gaps.
const md = (c: number, r: number) => `md:col-span-${c} md:row-span-${r}`;
const TILE_PATTERN = [
  { cls: `col-span-4 row-span-2 ${md(6, 2)}`, big: true },
  { cls: `col-span-2 row-span-1 ${md(3, 1)}` },
  { cls: `col-span-2 row-span-1 ${md(3, 2)}` },
  { cls: `col-span-2 row-span-1 ${md(3, 1)}` },
  { cls: `col-span-2 row-span-1 ${md(4, 2)}` },
  { cls: `col-span-2 row-span-1 ${md(4, 1)}` },
  { cls: `col-span-2 row-span-1 ${md(4, 2)}` },
  { cls: `col-span-2 row-span-1 ${md(4, 1)}` },
  { cls: `col-span-2 row-span-1 ${md(3, 1)}` },
  { cls: `col-span-4 row-span-2 ${md(6, 2)}`, big: true },
  { cls: `col-span-2 row-span-1 ${md(3, 2)}` },
  { cls: `col-span-2 row-span-1 ${md(3, 1)}` },
];
// Tailwind only generates classes it can see in source, so list the ones built above.
// md:col-span-3 md:col-span-4 md:col-span-6 md:col-span-12 md:row-span-1 md:row-span-2
// col-span-2 col-span-3 col-span-6

// Photos left over after the last full block are laid out in even rows (up to 3 per row) so the
// mosaic always ends on a straight line: each row splits the full width equally.
function tailTiles(count: number) {
  const rows: number[] = [];
  for (let left = count; left > 0; ) {
    const n = left === 4 ? 2 : Math.min(3, left); // 4 → 2 + 2 rather than 3 + 1
    rows.push(n);
    left -= n;
  }
  const span: Record<number, string> = {
    1: "col-span-6 row-span-2 md:col-span-12 md:row-span-2",
    2: "col-span-3 row-span-1 md:col-span-6 md:row-span-2",
    3: "col-span-2 row-span-1 md:col-span-4 md:row-span-1",
  };
  return rows.flatMap((n) => Array.from({ length: n }, () => ({ cls: span[n], big: n < 3 })));
}

// Interleave collections so neighbouring tiles come from different places.
function interleave(photos: Photo[]) {
  const groups = new Map<string, Photo[]>();
  photos.forEach((p) => groups.set(p.collection, [...(groups.get(p.collection) ?? []), p]));
  const lists = [...groups.values()];
  const out: Photo[] = [];
  for (let i = 0; out.length < photos.length; i++) lists.forEach((l) => l[i] && out.push(l[i]));
  return out;
}

// Architecture-only shots (no people) are left out of the Gallery; they still appear inside their walks.
const BUILDINGS_ONLY = [
  "p26", "p53", "p50", "p55", "p51", "p21", "p25", "p54", "p33", "p31", "p32", "p34", "p35", "p36", "p28", "p30",
  "p29", "p05", "p16", "p12", "p60", "p39", "p40", "p41", "p42", "p88", "p85", "p89", "p91", "p123", "p128",
  "p133", "p135", "p136", "p138", "p140", "p142", "p151", "p153", "p154", "p155", "p156", "p158", "p09", "p08",
  "p10", "p11", "p193", "p194", "p196", "p198", "p201", "p204",
  "p205", "p206", "p207", "p209",
];
// Picked out of the Gallery by hand; some still appear inside their walks.
const HIDDEN = ["p52", "p45", "p137", "p157", "p141", "p43", "p62", "p113"];
const SHOWN_ELSEWHERE = new Set([...HOME_SLIDES.map((s) => s.id), ...FEATURED_IDS, ...BUILDINGS_ONLY, ...HIDDEN]);
const ORDERED = interleave(PHOTOS.filter((p) => !SHOWN_ELSEWHERE.has(p.id)));
const FULL = ORDERED.length - (ORDERED.length % TILE_PATTERN.length);
const TAIL = tailTiles(ORDERED.length - FULL);

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section>
        <div className="container-site pt-8 md:pt-16">
          <div>
            <p className="eyebrow">Gallery</p>
            <h1 className="display mt-3 text-[30px] leading-[1.1] md:mt-5 md:text-[56px]">
              Field notes, <span className="accent text-teal">in motion.</span>
            </h1>
          </div>
          <p className="mt-4 font-serif text-[16px] leading-[1.5] text-moss md:text-[22px] md:leading-[1.6]">
            Glimpses from our work and visits: places, people and time in motion.
          </p>
        </div>
      </section>

      <section>
        <div className="container-site pt-5 md:pt-10">
          <MotionReel />
        </div>
      </section>

      <section>
        <div className="container-site pb-9 pt-1.5 md:py-20">
          <div className="grid grid-flow-dense auto-rows-[118px] grid-cols-6 gap-1.5 md:auto-rows-[220px] md:grid-cols-12 md:gap-3">
            {ORDERED.map((p, i) => {
              const tile = i < FULL ? TILE_PATTERN[i % TILE_PATTERN.length] : TAIL[i - FULL];
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setOpen(i)}
                  className={`group relative overflow-hidden bg-mist ${tile.cls}`}
                >
                  <img
                    src={tile.big ? photo(p.id) : thumb(p.id)}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {open !== null && (
        <Lightbox photos={ORDERED} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
